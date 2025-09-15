import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button"; // adjust if your button path is different

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_hogp44f", // ✅ your Service ID
        "template_9d99tv9", // ✅ your Template ID
        formRef.current,
        "RENnShep0tYuXWPln" // ✅ your Public Key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-12">
          Let’s make something cool together. Drop a message and I’ll get back
          to you soon.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="px-8 py-4 text-lg bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors duration-200"
            >
              Send →
            </Button>
          </div>

          {/* ✅ Success / Error Messages */}
          {status === "success" && (
            <div className="mt-6 p-4 border border-green-300 bg-green-50 rounded-lg text-green-700 text-center shadow-sm">
              <p className="font-semibold text-lg">✨ Message on its way!</p>
              <p className="text-sm text-green-600">
                Thanks for reaching out — I’ll get back to you soon.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 p-4 border border-red-300 bg-red-50 rounded-lg text-red-700 text-center shadow-sm">
              <p className="font-semibold text-lg">
                ⚠️ Oops, something went wrong.
              </p>
              <p className="text-sm text-red-600">
                Please try again later or drop me an email directly.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
