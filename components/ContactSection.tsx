"use client";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }

    const email = "your.email@example.com";
    const subject = encodeURIComponent("Contact Form Message");
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setMessage("");
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20 text-white flex flex-col max-[940px]:items-center max-[940px]:justify-center max-[940px]:text-center">
      <h3 className="text-5xl font-bold mb-10 max-[940px]:text-[40px]">Do you have any questions?</h3>

      <div className="bg-white/5 backdrop-blur-sm border border-cyan-400 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all duration-300 p-6 w-full max-w-xl">
        <textarea
          className="w-full h-40 p-4 rounded-lg bg-white/10 border border-cyan-300 text-white resize-none outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition duration-300"
        >
          Send
        </button>
      </div>

      <div className="mt-12">
        <p className="text-xl mb-4">Or follow us on social media:</p>
        <div className="flex gap-6 max-[940px]:justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white text-2xl transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white text-2xl transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white text-2xl transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
