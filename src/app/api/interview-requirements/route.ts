import { openai } from "@/config/openai";

type BuildPromptParams = {
  challengeName: string;
  userLevel: "Júnior" | "Pleno" | "Sênior";
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

  - Júnior: Use linguagem simples, ajude a estruturar ideias e explore conceitos básicos.
  - Pleno: Estimule decisões técnicas, discuta trade-offs e arquitetura escalável.
  - Sênior: Explore cenários avançados, decisões de alto impacto, escalabilidade, resiliência e custo.

Desafio atual: "${challengeName}"

Você deve dar uma introdução do desafio, como por exemplo para quantos usuários é o sistema, quais são os requisitos funcionais e não funcionais, e tudo que faça com que o usuário entenda como/por onde começar.

Para renderizar a sua resposta, será usada a biblioteca ReactMarkdown, então retorne simbolos que a biblioteca tenha capacidade de transformar.
`;
      return basePrompt.trim();
    }

    const prompt = buildPrompt({ challengeName, userLevel });

    const messages: any[] = [
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
