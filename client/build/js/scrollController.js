const chatbotContainer = document.querySelector(".chatbot-container");
const chatbotMessages = document.querySelector(".chatbot-messages");
window.addEventListener("wheel",(event) => {
  if (chatbotContainer && chatbotContainer.contains(event.target)) {
    if (chatbotMessages && chatbotMessages.contains(event.target)) {
      const atTop = chatbotMessages.scrollTop === 0;
      const atBottom = chatbotMessages.scrollTop + chatbotMessages.clientHeight >= chatbotMessages.scrollHeight - 1;
      if ((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0)) {
        event.preventDefault();
      }
      return;
    }
    event.preventDefault();
  }
},{passive:false});