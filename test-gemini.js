import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { GoogleGenAI } from "@google/genai";

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: "Hello, how can you help me?",
    });
    console.log("Success:", response.text);
  } catch (err) {
    console.error("Error:", err);
  }
}
run();
