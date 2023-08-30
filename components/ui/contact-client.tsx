"use client"
import React, { FormEvent } from "react";
import emailjs from "emailjs-com";


export default function ContactClient() {
  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    try {
      // Send user's message using emailjs
      await emailjs.send(
        "service_0xwkh51",
        "template_lscrldk",
        {
          name: target.name.value,
          email: target.email.value,
          message: target.message.value,
        },
        "9u3bvylFqjIva-sQx"
      );

      // Clear form fields manually
      const inputs = document.querySelectorAll("input");
      const textarea = document.querySelector("textarea");

      if (inputs && textarea) {
        inputs.forEach((input) => {
          if (input.type !== "submit") {
            input.value = "";
          }
        });

        textarea.value = "";
      }

      // Send auto-reply using emailjs
      await emailjs.send(
        "service_0xwkh51",
        "template_auto_reply",
        {
          name: target.name.value,
          email: target.email.value,
        },
        "9u3bvylFqjIva-sQx"
      );

      console.log("Form submitted and reset successfully.");
    } catch (error) {
      console.log("Failed to send message...", error);
    }
  };

  return (
    <form className="form rounded-lg bg-[#F4F3EE] p-4 flex flex-col" onSubmit={send}>
      {/* Your form input fields here */}
      <label htmlFor="name" className="text-sm font-semibold text-[#1F1F1F] mx-4">
        Your Name
      </label>
      <input
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#B3AEA8]"
        name="name"
      />
      <label htmlFor="email" className="text-sm font-semibold text-[#1F1F1F] mx-4 mt-4">
        Email
      </label>
      <input
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#B3AEA8]"
        name="email"
      />
      <label htmlFor="message" className="text-sm font-semibold text-[#1F1F1F] mx-4 mt-4">
        Message
      </label>
      <textarea
        rows={4}
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#B3AEA8]"
        name="message"
        placeholder="Be sure to put your email and number so we can get back to you!"
      ></textarea>
      <button
        type="submit"
        className="bg-black hover:bg-[#483A33] rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold "
      >
        Send Message
      </button>
      {/* End of form input fields */}
    </form>
  );
}
