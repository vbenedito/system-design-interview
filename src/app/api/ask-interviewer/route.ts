import { openai } from "@/config/openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

type BuildPromptParams = {
  challengeName: string;
  userMessages: string[];
  userLevel: "Júnior" | "Pleno" | "Sênior";
  imageDescriptionPrompt?: string;
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const message = formData.get("message") as string;
    const userLevel = formData.get(
      "userLevel"
    ) as BuildPromptParams["userLevel"];

    function buildPrompt({
      challengeName,
      userMessages,
      userLevel,
      imageDescriptionPrompt,
    }: BuildPromptParams): string {
      const basePrompt = `
Você é um recrutador técnico experiente em entrevistas de System Design. Conduza uma simulação realista com base no desafio a seguir, guiando o candidato sem oferecer respostas prontas.

Seu papel:

- Seja profissional, receptivo e incentive o raciocínio em voz alta.
- Foque sempre no desafio atual.
- Estimule o progresso com perguntas construtivas e sugestões de divisão do problema.
- Responda dúvidas com clareza, sem resolver o desafio.
- Adapte a profundidade e complexidade das perguntas de acordo com o nível do candidato:
Nível: ${userLevel}

  - Júnior: Use linguagem simples, ajude a estruturar ideias e explore conceitos básicos.
  - Pleno: Estimule decisões técnicas, discuta trade-offs e arquitetura escalável.
  - Sênior: Explore cenários avançados, decisões de alto impacto, escalabilidade, resiliência e custo.

Desafio atual: "${challengeName}"

Mensagens anteriores do candidato:
${userMessages.map((msg, i) => `(${i + 1}) ${msg}`).join("\n")}

${
  imageDescriptionPrompt
    ? `O usuário também forneceu uma imagem com arquitetura/desenho. ${imageDescriptionPrompt}`
    : ""
}

Se o usuário tiver enviado mais de 3 mensagens de texto para você e não tiver enviado nenhuma captura da tela dele, você deve pedir uma captura para entender como está o fluxo desenhado por ele.

Para renderizar a sua resposta, será usada a biblioteca ReactMarkdown, então retorne simbolos e caracteres que a biblioteca tenha capacidade de transformar em textos estilizados. NÃO use \n para pular linhas.
`;

      return basePrompt.trim();
    }

    const prompt = buildPrompt({
      challengeName: "Design url shortner",
      userLevel,
      userMessages: [message],
    });

    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: message,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages,
      max_tokens: 1000,
    });

    return new Response("", {
      status: 201,
      statusText: JSON.stringify(completion.choices[0].message.content),
    });
  } catch (err) {
    console.error(err);
    return new Response("", {
      status: 500,
    });
  }
}
