const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }
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
    return res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      error: "Failed to send email"
    });
  }
};