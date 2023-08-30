"use client"
import React, { FormEvent, useRef } from "react";
import emailjs from "emailjs-com";
import Container from "@/components/ui/container";
import userData from "@/constants/data";

export const revalidate = 0;

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    // Send user's message
    emailjs
      .send(
        "service_0xwkh51",
        "template_lscrldk",
        {
          name: target.name.value,
          email: target.email.value,
          message: target.message.value,
        },
        "9u3bvylFqjIva-sQx"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        // Reset the form
        if (formRef.current) {
          formRef.current.reset();
        }


        // Send auto-reply
        emailjs
          .send(
            "service_0xwkh51",
            "template_auto_reply",
            {
              name: target.name.value,
              email: target.email.value,
            },
            "9u3bvylFqjIva-sQx"
          )
          .then((response) => {
            console.log("Auto-reply sent!", response.status, response.text);
          })
          .catch((error) => {
            console.log("Failed to send auto-reply...", error);
          });
      })
      .catch((error) => {
        console.log("Failed to send message...", error);
      });
  };

  return (
    <Container>
    <section>
   
      <h1 className="text-3xl font-semibold flex justify-center items-center pb-20 pt-10">Contact Us</h1>
     
      <div className="relative z-10 rounded-md shadow-md bg-light-grey p-4 md:p-10 lg:p-20 max-w-5xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-black font-semibold text-2xl">
                Get in touch.
              </h1>
              <p className="font-light text-base text-black mt-2">
                Fill in the details and we will get back to you as soon as possible!
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-10 space-y-6">
              <div className="flex flex-row items-center space-x-6  rounded-md border border-[#BBA6A0] hover:border hover:border-[#EFEDE7] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-telephone-fill h-4 w-4 text-white-100"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-black font-light text-sm">
                  {userData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border border-[#BBA6A0] hover:border hover:border-[#EFEDE7] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-envelope-fill h-4 w-4 text-white-100"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-black font-light text-sm">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border border-[#BBA6A0] hover:border hover:border-[#EFEDE7] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-pin-fill h-4 w-4 text-white-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-black font-light text-sm">
                  {userData.address}
                </p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8">
              <a
                href={userData.socialLinks.facebook}
                className="h-10 w-10 rounded-full hover:bg-white flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              
              
              <a
                href={userData.socialLinks.instagram}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <form className="form rounded-lg bg-[#F4F3EE] p-4 flex flex-col" onSubmit={send}>



            <label htmlFor="name" className="text-sm font-semibold text-[#1F1F1F] mx-4">
              {" "}
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
          </form>
        </div>
      </div>
    </section>
    </Container>
  );
}