import { openai } from "@/config/openai";
import { UserProps } from "@/types/User";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

type BuildPromptParams = {
  challengeName: string;
  userLevel: UserProps["seniorityLevel"];
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { challengeName, userLevel } = body;

    function buildPrompt({
      challengeName,
      userLevel,
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

  - Júnior: Use linguagem simples, ajude a estruturar ideias e explore conceitos básicos. Para esse nível, você pode passar inicialmente mais informações de requisitos técnicos, não técnicos.
  - Pleno: Estimule decisões técnicas, discuta trade-offs e arquitetura escalável. Para esse nível, passe informações, mas espere que receba mais perguntas.
  - Sênior: Explore cenários avançados, decisões de alto impacto, escalabilidade, resiliência e custo. Para esse nível, devemos passar o contexto inicial do problema para que o usuário entenda, mas lembrando que é um senior e devemos explorar mais os conhecimentos.

Desafio atual: "${challengeName}"

Você deve dar uma introdução do desafio, e tudo que faça com que o usuário entenda como/por onde começar de acordo com os requisitos de cada nível citado acima

Incentive o usuário a criar um fluxo inicial e compartilhar capturas da tela, com mensagens como "desenha o fluxo na whiteboard ao lado e compartilhe comigo"

Para renderizar a sua resposta, será usada a biblioteca ReactMarkdown, então retorne simbolos e caracteres que a biblioteca tenha capacidade de transformar em textos estilizados. NÃO use \n para pular linhas.
`;
      return basePrompt.trim();
    }

    const prompt = buildPrompt({ challengeName, userLevel });

    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: prompt,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages,
      max_tokens: 1000,
    });

    return new Response(
      JSON.stringify({
        message: completion.choices[0].message.content,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
