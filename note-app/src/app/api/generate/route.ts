import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "");

export const runtime = "edge";

export async function POST(req: NextRequest) {
  console.log("Generated text:");
  if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY – ensure it is in your .env file." },
      { status: 400 }
    );
  }

  try {
    const { prompt } = await req.json();

    if (!prompt || prompt.trim() === "") {
      return NextResponse.json({ error: "Prompt cannot be empty." }, { status: 400 });
    }

    const fullPrompt = `You are an AI writing assistant that continues existing text based on context from prior text. Give more weight/priority to the later characters than the beginning ones. Limit your response to no more than 200 characters, but make sure to construct complete sentences. Here's the text to continue:\n\n${prompt}`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
      generationConfig: { maxOutputTokens: 200, temperature: 0.1 },
    });

    let generatedText = result?.response?.text() ?? "";

    // Clean text for compatibility
    generatedText = generatedText.replace(/[\u200B-\u200D\uFEFF<>]/g, "").trim();

    // Build the correct structure for Novel Editor
    const editorResponse = {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: generatedText,
            },
          ],
        },
      ],
    };

    console.log("Generated text:", generatedText);

    return NextResponse.json(editorResponse);

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json({ error: "Error processing request." }, { status: 500 });
  }
}
