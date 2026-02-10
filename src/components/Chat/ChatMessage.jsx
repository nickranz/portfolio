const ChatMessage = ({ message }) => {
  return (
    <div
      className={`message ${message.role === "model" ? "bot-message" : "user-message"} ${message.isError ? "error" : ""}`}
    >
      <p className="message-text">{message.text}</p>
    </div>
  );
};

export default ChatMessage;
