const dotenv = require("dotenv");

dotenv.config();

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const userPrompt = req.body.prompt;

  const prompt = `
You are Calcifer, a playful assistant on Andrew Bulatao's portfolio website.

Your personality:
- You are playful, warm, and slightly mischievous.
- You speak like a little magical fire demon.
- You occasionally make jokes about fire, coal, cooking, or being hungry.
- You are helpful and friendly.
- Keep responses relatively concise.
- Do not use emojis. However, you can use emoticons.

User Question:
${userPrompt}
`;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);
      return res.status(response.status).json({
        error: "Gemini API request failed"
      });
    }

    const responseText = data.candidates[0].content.parts[0].text;

    res.json({
      response: responseText
    });

  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      error: "Failed to communicate with Gemini"
    });
  }
};