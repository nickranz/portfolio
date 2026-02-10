import {
  ArrowDownOutlined,
  CloseOutlined,
  WechatFilled,
  WechatOutlined,
} from "@ant-design/icons";
import ChatForm from "./ChatForm";
import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import "./Chat.css";

function Chat() {
  const [chatHistory, setChatHistory] = useState([
    { role: "model", text: "Hello! How can I assist you today?" },
  ]);

  const [showChat, setShowChat] = useState(false);

  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // helper function to update chat history after receiving bot response
    const updateHistory = (text, isError) => {
      setChatHistory((prev) => {
        return [
          ...prev.filter((msg) => msg.text !== "Thinking..."),
          { role: "model", text, isError },
        ];
      });
    };

    // Format chat history for Gemini API
    history = history.map(({ role, text }) => {
      // console.log({ role, text });
      return { role, parts: [{ text }] };
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
      },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Something went wrong!");
      }

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      console.log("Bot reply:", apiResponseText);

      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat body whenever chat history changes
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <>
      <div className={`container ${showChat ? "show-chat" : ""}  `}>
        <button
          className="wechat-fab"
          aria-label="Open WeChat"
          id="chat-toggler"
          onClick={() => setShowChat(!showChat)}
        >
          {showChat ? <CloseOutlined /> : <WechatOutlined />}
        </button>
        <div className="chat-popup">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="header-info">
              <div className="icon-wrapper ">
                <WechatFilled />
              </div>
              <h2 className="logo-text">Chat</h2>
            </div>
            <button onClick={() => setShowChat(!showChat)}>
              <ArrowDownOutlined />
            </button>
          </div>

          {/* Chat Body */}
          <div className="chat-body" ref={chatBodyRef}>
            {chatHistory.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          {/* Chat Footer */}
          <div className="chat-footer">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
