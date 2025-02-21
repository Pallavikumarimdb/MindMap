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
    console.log("Generated text:", generatedText);
    return new Response(
      new ReadableStream({
        start(controller) {
          const encoder = new TextEncoder();
          const words = generatedText.split(" ");

          //@ts-ignore\
          function sendWord(index) {
            if (index < words.length) {
              controller.enqueue(encoder.encode(words[index] + " "));
              setTimeout(() => sendWord(index + 1), 300); // Simulate streaming delay
            } else {
              controller.close();
            }
          }

          sendWord(0);
        },
      }),
      {
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json({ error: "Error processing request." }, { status: 500 });
  }
}


// import { NextRequest, NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// // No need to import ReadableStream as it is available globally in the Web Streams API

// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "");

// export const runtime = "edge";

// export async function POST(req: NextRequest) {
//   if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
//     return NextResponse.json(
//       { error: "Missing GEMINI_API_KEY – ensure it is in your .env file." },
//       { status: 400 }
//     );
//   }

//   try {
//     const { prompt } = await req.json();
//     if (!prompt || prompt.trim() === "") {
//       return NextResponse.json({ error: "Prompt cannot be empty." }, { status: 400 });
//     }

//     const fullPrompt = `You are an AI writing assistant that continues existing text based on context from prior text. Give more weight/priority to the later characters than the beginning ones. Limit your response to no more than 200 characters, but make sure to construct complete sentences. Here's the text to continue:\n\n${prompt}`;

//     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
//     const result = await model.generateContentStream({
//       contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
//       generationConfig: { maxOutputTokens: 200, temperature: 0.1 },
//     });

//     console.log("Generated text:", result);

//     // Create a ReadableStream to stream the response
//     const stream = new ReadableStream({
//       //@ts-ignore
//       async start(controller) {
//         const encoder = new TextEncoder();
//         for await (const chunk of result.stream) {
//           const text = chunk.text();
//           controller.enqueue(encoder.encode(text));
//         }
//         controller.close();
//       },
//     });

//     // Return the stream as the response
//     return new Response(stream, {
//       headers: {
//         "Content-Type": "text/plain; charset=utf-8",
//         "Transfer-Encoding": "chunked",
//       },
//     });
//   } catch (error) {
//     console.error("Error calling Gemini API:", error);
//     return NextResponse.json({ error: "Error processing request." }, { status: 500 });
//   }
// }
