const API_URL = "/api/chat";

async function askAI() {
  const prompt = document.getElementById("chat-input").value;
  console.log("This is prompt: " + prompt);
  if (!prompt.trim()) return;
  const messages = document.querySelector(".chatbot-messages");
  // User message
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.innerText = prompt;
  messages.appendChild(userMessage);

  // Smooth scrolling for when User messages gets long
  messages.scrollTo({
  top: messages.scrollHeight,
  behavior: "smooth"
});
  // AI request
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: prompt
    })
  });
  const data = await response.json();

  // SAFETY CHECK
  if (!response.ok || !data.response) {
    const aiMessage = document.createElement("div");
    aiMessage.classList.add("ai-message");
    aiMessage.innerText =
      "Calcifer's light is dim... try again in a bit after Andrew feeds him coal!";
    messages.appendChild(aiMessage);
    return;
  }
  // AI response
  const aiMessage = document.createElement("div");
  aiMessage.classList.add("ai-message");
  aiMessage.innerHTML = marked.parse(data.response);
  messages.appendChild(aiMessage);
  document.getElementById("chat-input").value = "";

  // Smooth scrolling for when Calcifer messages gets long
  messages.scrollTo({
  top: messages.scrollHeight,
  behavior: "smooth"
});
}
// MINIMIZE BUTTON
const minimizeBtn = document.getElementById("minimize-btn");
const chatbot = document.querySelector(".chatbot-container");
chatbot.classList.add("minimized");
minimizeBtn.textContent = "+";
minimizeBtn.addEventListener("click", () => {
  chatbot.classList.toggle("minimized");
  console.log("We clicked");
  if (chatbot.classList.contains("minimized")) {
    minimizeBtn.textContent = "+";
  } else {
    minimizeBtn.textContent = "−";
  }
});
// SEND BUTTON
document
  .getElementById("send-btn")
  .addEventListener("click", askAI);
// ENTER KEY
document
  .getElementById("chat-input")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      askAI();
    }
  });