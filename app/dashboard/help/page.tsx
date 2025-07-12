"use client";

import { useEffect, useState } from "react";

export default function HelpPage() {
  useEffect(() => {
    // No external script for now; using internal chat logic
  }, []);

  // Inquiry form state and types
  interface InquiryForm {
    name: string;
    email: string;
    comments: string;
  }

  const [formData, setFormData] = useState<InquiryForm>({
    name: "",
    email: "",
    comments: "",
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("Thank you for your inquiry!");
    setFormData({ name: "", email: "", comments: "" });
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  // Chat state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [userInput, setUserInput] = useState("");

  const handleChatOpen = () => {
    setIsChatOpen(true);
    setMessages([{ sender: "bot", text: "Hello! How can I assist you with the Police System today?" }]);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [...messages, { sender: "user", text: userInput }];
      setMessages(newMessages);

      // Auto-reply logic
      const lowerInput = userInput.toLowerCase();
      let botReply = "";

      if (lowerInput.includes("case") || lowerInput.includes("cases")) {
        botReply = "For case-related queries, use the 'Add Case' feature in the Cases dashboard.";
      } else if (lowerInput.includes("charge") || lowerInput.includes("charges")) {
        botReply = "Charges information is managed under the Case Management section. Contact a supervisor for updates.";
      } else if (lowerInput.includes("suspect") || lowerInput.includes("suspects")) {
        botReply = "To access suspect data, verify your permissions or contact support if issues persist.";
      } else if (lowerInput.includes("victim") || lowerInput.includes("victims")) {
        botReply = "Victim details are logged in the Cases dashboard under relevant case files.";
      } else if (lowerInput.includes("facility") || lowerInput.includes("facilities")) {
        botReply = "Facility management is available in the Officer Resources section.";
      } else {
        botReply = "I'm sorry, I can only assist with police system topics like cases, charges, suspects, victims, or facilities. Please contact support for other inquiries.";
      }

      setTimeout(() => {
        setMessages([...newMessages, { sender: "bot", text: botReply }]);
      }, 500); // Simulate delay for bot response

      setUserInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4" style={{ color: "#003087" }}>
      <h1 className="text-2xl font-semibold mb-4" style={{ color: "#003087" }}>Police System Help Center</h1>
      <p className="mb-4" style={{ color: "#003087" }}>Get assistance with case management, officer tools, and system support.</p>

      {/* Layout with other content on the left and Inquiry Form on the right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column with Other Sections */}
        <div className="space-y-4">
          {/* Live Chat Section */}
          <div className="bg-white border border-blue-300 rounded p-3">
            <h2 className="text-lg font-medium mb-2" style={{ color: "#003087" }}>Live Chat Support</h2>
            <p className="mb-2" style={{ color: "#003087" }}>Get immediate help for cases or technical issues.</p>
            <button
              className="px-3 py-1 rounded"
              style={{ backgroundColor: "#003087", color: "white", transition: "background-color 0.3s" }}
              onClick={handleChatOpen}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#002766")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#003087")}
            >
              Start Live Chat
            </button>
          </div>

          {/* Knowledge Base Section */}
          <div className="bg-white border border-blue-300 rounded p-3">
            <h2 className="text-lg font-medium mb-2" style={{ color: "#003087" }}>Knowledge Base</h2>
            <p className="mb-2" style={{ color: "#003087" }}>Resources for managing cases, officer duties, and system use.</p>
            <ul className="list-disc list-inside" style={{ color: "#003087" }}>
              <li>
                <a href="https://www.unodc.org/e4j/en/crime-prevention-criminal-justice/module-4/key-issues/1--case-management.html" className="hover:underline" style={{ color: "#003087" }}>
                  Case Management
                </a>
              </li>
              <li>
                <a href="https://www.policeone.com/police-products/officer-safety/articles/" className="hover:underline" style={{ color: "#003087" }}>
                  Officer Resources
                </a>
              </li>
             
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="bg-white border border-blue-300 rounded p-3">
            <h2 className="text-lg font-medium mb-2" style={{ color: "#003087" }}>Frequently Asked Questions</h2>
            <ul className="list-disc list-inside" style={{ color: "#003087" }}>
              <li>
                <strong style={{ color: "#003087" }}>How do I log a new case?</strong> Use "Add Case" in the Cases dashboard.
              </li>
              <li>
                <strong style={{ color: "#003087" }}>Can’t access suspect data?</strong> Verify permissions or contact support.
              </li>
              <li>
                <strong style={{ color: "#003087" }}>How to update officer details?</strong> Edit via Officer Management.
              </li>
            </ul>
          </div>
        </div>

        {/* Inquiry Form Section (Right) */}
        <div className="bg-white border border-blue-300 rounded p-3">
          <h2 className="text-lg font-medium mb-2" style={{ color: "#003087" }}>Inquiry Form</h2>
          <p className="mb-2" style={{ color: "#003087" }}>Submit your questions or requests about the system.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm" style={{ color: "#003087" }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-blue-300 rounded p-2"
                style={{ color: "#003087" }}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm" style={{ color: "#003087" }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-blue-300 rounded p-2"
                style={{ color: "#003087" }}
                required
              />
            </div>
            <div>
              <label htmlFor="comments" className="block text-sm" style={{ color: "#003087" }}>
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-blue-300 rounded p-2"
                style={{ color: "#003087" }}
                rows={3}
                required
              />
            </div>
            <button
              type="submit"
              className="px-3 py-1 rounded"
              style={{ backgroundColor: "#003087", color: "white", transition: "background-color 0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#002766")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#003087")}
            >
              Submit Inquiry
            </button>
            {submitStatus && <p className="mt-2" style={{ color: "#003087" }}>{submitStatus}</p>}
          </form>
        </div>
      </div>

      {/* Chat Interface */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-96 h-96 flex flex-col relative" style={{ borderColor: "#63b3ed", borderWidth: "2px" }}>
            <span
              className="absolute top-2 right-2 cursor-pointer"
              style={{ color: "#003087", fontSize: "1.5rem", lineHeight: "1" }}
              onClick={() => setIsChatOpen(false)}
            >
              ×
            </span>
            <h3 className="text-lg font-medium mb-2" style={{ color: "#003087" }}>Live Chat</h3>
            <div className="flex-1 overflow-y-auto mb-2" style={{ color: "#003087" }}>
              {messages.map((message, index) => (
                <div key={index} className={`my-1 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                  <span className="p-2 rounded" style={{ backgroundColor: message.sender === "user" ? "#e6f0fa" : "#f0f0f0", color: "#003087" }}>
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 p-2 rounded-l" style={{ borderColor: "#63b3ed", borderWidth: "1px", color: "#003087" }}
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-1 rounded-r"
                style={{ backgroundColor: "#003087", color: "white", transition: "background-color 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#002766")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#003087")}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}