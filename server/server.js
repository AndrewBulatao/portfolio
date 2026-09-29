const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const { Resend } = require("resend");

dotenv.config({
  path: path.join(__dirname, "..", ".env")
});

const resend = new Resend(process.env.RESEND_API_KEY);
const app = express();

app.use(cors());
app.use(express.json());

console.log("API key loaded:", !!process.env.GEMINI_API_KEY);

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@andrewbulatao.dev>",
      to: "abulatao7023@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        error: "Failed to send email"
      });
    }

    res.json({
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      error: "Failed to send email"
    });
  }
});

app.post("/api/chat", async (req, res) => {
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
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});