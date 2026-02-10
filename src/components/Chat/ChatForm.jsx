import { ArrowUpOutlined } from "@ant-design/icons";
import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      const userMessage = inputRef.current.value.trim();
      inputRef.current.value = "";

      setChatHistory((history) => [
        ...history,
        { role: "user", text: userMessage },
      ]);

      // Add a "Thinking..." message from the bot
      setTimeout(() => {
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "Thinking..." },
        ]);

        generateBotResponse([
          ...chatHistory,
          { role: "user", text: userMessage },
        ]);
      }, 600);
    }
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        className="message-input"
        required
      />
      <button>
        <ArrowUpOutlined />
      </button>
    </form>
  );
};

export default ChatForm;
