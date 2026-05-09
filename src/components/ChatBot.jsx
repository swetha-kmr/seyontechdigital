// src/components/ChatBot.jsx

import { useState } from "react";
import "../styles/chatbot.css";
import { FaWhatsapp } from "react-icons/fa";

import {
  FiMessageSquare,
  FiArrowUp,
  FiX,
} from "react-icons/fi";

export default function ChatBot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hello 👋 How can I help you today?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    const knowledge = {

      about:
        "We are a creative digital agency helping businesses grow with modern technology solutions.",

      services:
        "We provide Web Development, UI/UX Design, Branding, SEO and Digital Marketing.",

      ai:
        "We provide AI Automation solutions for businesses.",

      automation:
        "Our AI Automation services help businesses automate workflows and improve productivity.",

      calling:
        "We provide AI Calling systems for customer support and lead generation.",

      software:
        "We develop custom software solutions for startups and businesses.",

      chatbot:
        "We create smart chatbot solutions for websites and businesses.",

      seo:
        "We provide SEO services to improve your website ranking and online visibility.",

      website:
        "We create modern, responsive and high-performance websites for businesses.",

      contact:
        "Contact us at info@seyontech.com",

      pricing:
        "Pricing depends on your project requirements. Contact us for a custom quote.",

      location:
        "We are located in Chennai, India.",

      industries:
        "We work with healthcare, education, ecommerce and startups.",

    };

    const lowerInput = input.toLowerCase();

    let botReply =
      "Sorry, I don't understand.";

    // Greeting

    if (
      lowerInput.includes("hi") ||
      lowerInput.includes("hello") ||
      lowerInput.includes("hey")
    ) {

      botReply =
        "Hello 👋";

    }

    // Thanks

    else if (
      lowerInput.includes("thank")
    ) {

      botReply =
        "You're welcome 😊";

    }

    // Dynamic Knowledge

    else {

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
      {
        text: botReply,
        sender: "bot",
      },
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
        >

          <FiMessageSquare />

          <span className="chat-badge">
            1
          </span>

        </div>

      )}
      {/* WhatsApp Button */}

    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-toggle"
    >

      <FaWhatsapp />

    </a>
      

      {/* Chat Window */}

      {open && (

        <div className="chatbot">

          {/* Header */}

          <div className="chat-header">

            <h3>
              Chat Support
            </h3>

            <button
              onClick={() => setOpen(false)}
            >
              <FiX />
            </button>

          </div>

          {/* Chat Body */}

          <div className="chat-body">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }
              >
                {msg.text}
              </div>

            ))}

          </div>

          {/* Footer */}

          <div className="chat-footer">

            <input
              type="text"
              placeholder="Write a message..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                sendMessage()
              }
            />

            <button
              onClick={sendMessage}
            >
              <FiArrowUp />
            </button>

          </div>

        </div>

      )}

    </>
  );
}