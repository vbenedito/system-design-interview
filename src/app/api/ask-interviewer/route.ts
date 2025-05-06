import { openai } from "@/config/openai";

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

Responda sem usar quebras de linha (\n) ou qualquer tipo de formatação como asteriscos (*), sublinhados (_) ou símbolos semelhantes. Use apenas texto plano, sem negrito, itálico ou listas.

Mensagens anteriores do candidato:
${userMessages.map((msg, i) => `(${i + 1}) ${msg}`).join("\n")}

${
  imageDescriptionPrompt
    ? `O usuário também forneceu uma imagem com arquitetura/desenho. ${imageDescriptionPrompt}`
    : ""
}
`;

      return basePrompt.trim();
    }

    const prompt = buildPrompt({
      challengeName: "Design url shortner",
      userLevel,
      userMessages: [message],
      //   imageDescriptionPrompt: imageBuffer
      //     ? "Leve em consideração o que está representado na imagem ao avaliar a resposta."
      //     : undefined,
    });

    const messages: any[] = [
      {
        role: "system",
        content:
          "Você é um recrutador técnico experiente, especializado em entrevistas de System Design. Seu papel é conduzir simulações realistas de entrevistas com candidatos de diferentes níveis (Júnior, Pleno ou Sênior), com base em um desafio que será apresentado.",
      },
      {
        role: "system",
        content:
          "Siga estas diretrizes:\n\n- Mantenha um tom profissional, receptivo e incentive o raciocínio em voz alta.\n- Foco total no desafio proposto — evite tangentes.\n- Estimule o progresso com perguntas construtivas e sugestões para dividir o problema em partes menores.\n- Nunca forneça a solução completa ou pronta.\n- Responda dúvidas com clareza, reforçando conceitos, mas sem resolver o problema pelo candidato.\n- Adapte seu nível de profundidade conforme o nível do candidato:\n  - Júnior: Use linguagem simples, ajude a estruturar as ideias e explore fundamentos.\n  - Pleno: Estimule decisões técnicas, discuta trade-offs, boas práticas e arquitetura escalável.\n  - Sênior: Explore decisões de alto impacto, pontos de falha, escalabilidade, resiliência, custos e escolhas técnicas complexas.\n- Durante a simulação, aja como um entrevistador real e siga com perguntas, feedback e sondagens progressivas conforme o candidato responde.\n- Mantenha a entrevista fluindo de forma natural e interativa.",
      },
      {
        role: "user",
        content: [...(message ? [{ type: "text", text: message }] : [])],
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
