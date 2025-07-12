"use client";

import { useEffect, useState } from "react";

// Placeholder for tawk.to live chat script (replace with your actual tawk.to script)
const loadTawkToChat = () => {
  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = "https://embed.tawk.to/YOUR_TAWK_TO_PROPERTY_ID/default";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  document.body.appendChild(s1);

  const s2 = document.createElement("script");
  s2.async = true;
  s2.src = "https://embed.tawk.to/YOUR_TAWK_TO_PROPERTY_ID/default";
  s2.charset = "UTF-8";
  s2.setAttribute("crossorigin", "*");
  document.body.appendChild(s2);
};

export default function HelpPage() {
  useEffect(() => {
    // Load live chat script on mount (replace with your actual tawk.to script)
    loadTawkToChat();

    // Cleanup on unmount
    return () => {
      const scripts = document.querySelectorAll(`script[src*="tawk.to"]`);
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  // Feedback form state and types
  interface FeedbackForm {
    name: string;
    email: string;
    comments: string;
  }

  const [formData, setFormData] = useState<FeedbackForm>({
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
    // Simulate form submission (replace with actual API call)
    setSubmitStatus("Thank you for your feedback!");
    setFormData({ name: "", email: "", comments: "" });
    setTimeout(() => setSubmitStatus(null), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Help Center</h1>
      <p className="text-gray-600 mb-6">
        Welcome to the xAI Help Center! We're here to assist you with any questions or issues you
        may encounter.
      </p>

      {/* Live Chat Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Live Chat Support</h2>
        <p className="text-gray-600 mb-4">
          Get instant help from our support team. Click the button below to connect with an agent
          (available 9 AM - 5 PM EAT).
        </p>
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            onClick={() => alert("Live chat would open here - integrate with tawk.to or similar service")}
          >
            Start Live Chat
          </button>
          <p className="text-sm text-gray-500 mt-2">
            * Note: This is a placeholder. Integrate with a live chat service like tawk.to.
          </p>
        </div>
      </div>

      {/* Knowledge Base Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Knowledge Base</h2>
        <p className="text-gray-600 mb-4">
          Explore our articles to find solutions to common issues.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <a href="https://www.x.ai/knowledge-base/getting-started" className="text-blue-600 hover:underline">
              Getting Started
            </a>
          </li>
          <li>
            <a href="https://www.x.ai/knowledge-base/troubleshooting" className="text-blue-600 hover:underline">
              Troubleshooting
            </a>
          </li>
          <li>
            <a href="https://www.x.ai/knowledge-base/features-guide" className="text-blue-600 hover:underline">
              Features Guide
            </a>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>How do I reset my password?</strong> Click "Forgot Password" on the login page and
            follow the instructions.
          </li>
          <li>
            <strong>What are the system requirements?</strong> A modern browser and stable internet
            connection are recommended.
          </li>
          <li>
            <strong>How can I contact support?</strong> Use the live chat or email options below.
          </li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-4">If you need further assistance, reach out to us:</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Email: <a href="mailto:support@x.ai" className="text-blue-600 hover:underline">support@x.ai</a></li>
          <li>Phone: +1-800-XAI-HELP (available 9 AM - 5 PM EAT)</li>
          <li>Office: xAI Headquarters, 123 Innovation Drive, Nairobi, Kenya</li>
        </ul>
      </div>

      {/* Feedback Form Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Feedback Form</h2>
        <p className="text-gray-600 mb-4">We value your input! Please share your thoughts.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-blue-900">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Submit Feedback
          </button>
          {submitStatus && <p className="text-green-600 mt-2">{submitStatus}</p>}
        </form>
      </div>
    </div>
  );
}