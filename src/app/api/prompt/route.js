import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      title,
      prompt,
      additionalPrompt,
      theme,
      duration,
      resolution,
      language,
      subtitles,
      premiumOptions,
    } = body;

    // OpenAI ChatGPT API endpoint
    const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = process.env.OPENAI_API_KEY;
    if (!API_KEY) {
      return NextResponse.json({ error: "Missing OpenAI API Key" }, { status: 500 });
    }

    // Construct the messages payload for ChatGPT
    const systemMessage =
      "You are an AI scriptwriter for anime videos. Generate a creative script for a short anime video. " +
      "Ensure the script maintains a consistent theme throughout the video. " +
      "If premium features include voiceover, include instructions for a realistic human voice with natural intonation.";
    const userMessage = `Title: ${title}
Theme: ${theme}
Duration: ${duration} seconds
Resolution: ${resolution}
Language: ${language}
Subtitles: ${subtitles ? "Yes" : "No"}
Premium Features: ${JSON.stringify(premiumOptions)}

Prompt: ${prompt}

Additional Details: ${additionalPrompt}`;

    const chatResponse = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4-turbo",
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: userMessage },
        ],
        max_tokens: 500,
      },
      {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const videoScript =
      chatResponse.data.choices[0]?.message?.content || "Failed to generate script.";

    // Simulated video URL (since ChatGPT only generates text)
    const videoUrl = "https://dummyvideo.com/generatedvideo.mp4";

    // Extra instructions for consistency and voiceover style
    let extraInstructions = "Ensure the video script remains consistent in its theme.";
    let voiceoverStyle = null;
    if (premiumOptions.voiceover) {
      extraInstructions += " For voiceover, use a realistic human tone with natural intonation.";
      voiceoverStyle = "realistic";
    }

    return NextResponse.json(
      {
        script: videoScript,
        videoUrl,
        extraInstructions,
        persistTheme: true,
        voiceoverStyle,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating video:", error.response?.data || error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
