/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/service/database";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { title, description, slug, difficulty } = body;

    const newChallenge = await prisma.challenge.create({
      data: {
        title: title,
        description: description,
        slug: slug,
        difficulty: difficulty,
      },
    });

    return NextResponse.json(newChallenge);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
