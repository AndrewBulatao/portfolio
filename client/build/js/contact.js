const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  contactStatus.textContent = "Sending message...";
  contactStatus.className = "";
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });
    if (response.ok) {
      contactStatus.textContent = "Message sent successfully!";
      contactStatus.className = "success";
      contactForm.reset();
    } else {
      contactStatus.textContent = "Message failed to send. Please try again.";
      contactStatus.className = "error";
    }
  } catch (error) {
    console.error("Contact form error:", error);
    contactStatus.textContent = "Message failed to send. Please try again.";
    contactStatus.className = "error";
  }
});