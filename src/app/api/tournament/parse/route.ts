// src/app/api/tournament/parse/route.ts
import { NextRequest, NextResponse } from "next/server";
import { parseTournamentText } from "@/lib/parsers/tournament-parser";
import { TournamentParseError } from "@/lib/errors/parse-error";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, options = {} } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid text content" },
        { status: 400 }
      );
    }

    const result = await parseTournamentText(text, options);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Tournament parsing error:", error);

    if (error instanceof TournamentParseError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: error.message,
            code: error.code,
            context: error.context,
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Internal server error",
          code: "INTERNAL_ERROR",
        },
      },
      { status: 500 }
    );
  }
}
