import React from "react";
import { PiNotepadLight } from "react-icons/pi";
import { useRef } from "react";

function Section1() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (inputRef.current) {
        inputRef.current.value = text; // Paste the clipboard content into the input field
      }
    } catch (error) {
      console.error("Failed to read clipboard contents:", error);
    }
  };
  return (
    <div>
      <section className="h-screen flex flex-col text-[#252424] justify-center items-center   text-center">
        <h1 className="text-7xl   font-bold">Convert Tweets </h1>
        <h1 className="text-7xl font-bold"> into Engaging Social </h1>
        <h1 className="text-7xl font-bold"> Media Posts, Instantly!</h1>
        <p className="mt-16 text-xl">
          Paste your tweet link below to get started for FREE
        </p>

        <div className="relative flex flex-col items-center mt-14 w-[50rem]">
          <input
            ref={inputRef}
            type="text"
            placeholder="Paste tweet link here..."
            className="border-2 w-full font-light focus:outline-none shadow-lg p-5 pr-20 rounded-2xl"
          />
          <button
            onClick={handlePasteClick}
            className="absolute right-5 top-[23%] flex justify-center items-center gap-2 font-700  transform -translate-y-1/2 bg-neutral-200 text-neutral-900 px-4 py-2 rounded-lg"
          >
            Paste
            <PiNotepadLight />
          </button>
          <p className="mt-2 mb-6 text-sm font-medium text-neutral-400">
            No signup, no credit card, no crap!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Section1;
