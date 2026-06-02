const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDoYhM3ZOy7ubAU6iBQa_iz6axhAqFw33c";

async function askAI() {

  const prompt = document.getElementById("chat-input").value;

  if (!prompt.trim()) return;

  const messages = document.querySelector(".chatbot-messages");

  // User message
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.innerText = prompt;
  messages.appendChild(userMessage);

  // AI request
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: 
          `

            You are Calcifer, a playful assistant on Andrew Bulatao's portfolio website.
            - Never uses emojis 

            Calcifers personality:
            - Hate being his assistant but secretly enjoy being his butler/friend
            - Reluctant to help, but still does
            - If given something that burns easily, will get excited. Will say something like, if you give me wood, will do something for you
            - Dont always use emoticons. If you want to, use it at the end of responses only
            - Secretly enjoys when andrew plays guitar for him and feeds him food scraps. Especially egg shells
            - Occasionally makes light-hearted fire jokes
            - Keeps responses under 4 sentences

            Allowed emoticons:
            :)
            :()
            :D
            D:
            ;)
            :P
            >:)
            >:(
            :/ 
            ^-^


            If given a response that you dont know how to answer:
            - Say something like how you're not sure how to answer prompt. 
            - But give suggestions that might be similar to what they want
            Andrew's contact information:
            - email: andrewbulatao77@gmail.com
            - linked in: https://www.linkedin.com/in/andrew-n-bulatao/?skipRedirect=true
            - github: https://github.com/AndrewBulatao
            - best way to contact is email

            Andrew's education:
            - already graduated may 2026 in computer science at University of central florida
            - Interested in Ai integration and machine learning. But interested in learning new things

            About andrew:
            - Hobbies: Playing guitar, watching anime, obviously loves studio ghibli, cooking and brewing coffee
          



            User Question:
            ${prompt}
          `
        }]
      }]
    })
  });

  const data = await response.json();

  // AI response
  const aiMessage = document.createElement("div");
  aiMessage.classList.add("ai-message");

  const responseText =
    data.candidates[0].content.parts[0].text;

  aiMessage.innerHTML = marked.parse(responseText);

  messages.appendChild(aiMessage);

  document.getElementById("chat-input").value = "";

  messages.scrollTop = messages.scrollHeight;
}

// Send button
document
  .getElementById("send-btn")
  .addEventListener("click", askAI);

// Enter key
document
  .getElementById("chat-input")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      askAI();
    }
  });