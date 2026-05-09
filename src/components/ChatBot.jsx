// src/components/ChatBot.jsx

import { useState, useEffect, useRef } from "react";
import "../styles/chatbot.css";
import { FaWhatsapp } from "react-icons/fa";
import { FiMessageSquare, FiArrowUp, FiX } from "react-icons/fi";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello 👋 How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when chat opens (desktop only to avoid mobile keyboard jump)
  useEffect(() => {
    if (open && window.innerWidth > 480) {
      inputRef.current?.focus();
    }
  }, [open]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (window.innerWidth <= 480) {
      document.body.style.overflow = open ? "hidden" : "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const knowledge = {
    about:
      "We are a creative digital agency helping businesses grow with modern technology solutions.",
    services:
      "We provide Web Development, UI/UX Design, Branding, SEO and Digital Marketing.",
    ai: "We provide AI Automation solutions for businesses.",
    automation:
      "Our AI Automation services help businesses automate workflows and improve productivity.",
    calling:
      "We provide AI Calling systems for customer support and lead generation.",
    software:
      "We develop custom software solutions for startups and businesses.",
    chatbot:
      "We create smart chatbot solutions for websites and businesses.",
    seo: "We provide SEO services to improve your website ranking and online visibility.",
    website:
      "We create modern, responsive and high-performance websites for businesses.",
    contact: "Contact us at info@seyontech.com",
    pricing:
      "Pricing depends on your project requirements. Contact us for a custom quote.",
    location: "We are located in Chennai, India.",
    industries:
      "We work with healthcare, education, ecommerce and startups.",
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const lowerInput = input.toLowerCase();

    let botReply = "Sorry, I don't understand. Try asking about our services, pricing, or contact details 😊";

    if (
      lowerInput.includes("hi") ||
      lowerInput.includes("hello") ||
      lowerInput.includes("hey")
    ) {
      botReply = "Hello 👋 How can I help you today?";
    } else if (lowerInput.includes("thank")) {
      botReply = "You're welcome 😊";
    } else {
      for (const key in knowledge) {
        if (lowerInput.includes(key)) {
          botReply = knowledge[key];
          break;
        }
      }
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      { text: botReply, sender: "bot" },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <div
          className="chat-toggle"
          onClick={() => setOpen(true)}
          role="button"
          aria-label="Open chat"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        >
          <FiMessageSquare />
          <span className="chat-badge" aria-label="1 new message">1</span>
        </div>
      )}

      {/* WhatsApp Button — hidden when chat is open */}
      {!open && (
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-toggle"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      )}

      {/* Chat Window */}
      {open && (
        <div className="chatbot" role="dialog" aria-label="Chat support">
          {/* Header */}
          <div className="chat-header">
            <h3>Chat Support</h3>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <FiX />
            </button>
          </div>

          {/* Chat Body */}
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user" ? "user-message" : "bot-message"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="chat-footer">
            <input
              ref={inputRef}
              type="text"
              placeholder="Write a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              aria-label="Type your message"
            />
            <button onClick={sendMessage} aria-label="Send message">
              <FiArrowUp />
            </button>
          </div>
        </div>
      )}
    </>
  );
}