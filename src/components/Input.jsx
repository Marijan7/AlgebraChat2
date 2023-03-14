import React, { useState } from "react";
import { push } from "firebase/database";
import { chatRef } from "../firebase";
import { UserAuth } from "../context/Auth";

const Input = () => {
      const { user } = UserAuth();
      const [input, setInput] = useState("");

      const handleSubmit = () => {
            setInput("");
            if (input !== "") {
                  push(chatRef, {
                        message: input,
                        sender: user.displayName,
                        time: Date.now(),
                        photoURL: user.photoURL,
                  });
            }
      };

      const handleChange = (e) => {
            setInput(e.target.value);
      };
      const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                  handleSubmit();
            }
      };
      return (
            <div className="flex w-full relative items-center">
                  <input
                        type="text"
                        onChange={handleChange}
                        onKeyPress={handleKeyDown}
                        value={input}
                        placeholder="Type something..."
                        className=" outline-none w-full border-none p-3  cursor-text box-border h-[50px]"
                  />
                  <button
                        onClick={handleSubmit}
                        className="absolute right-3 bg-green-400 p-1 text-white rounded-md w-40 hover:bg-green-700 "
                  >
                        Send
                  </button>

                  <label htmlFor="InputFile" className="cursor-pointer" />
            </div>
      );
};

export default Input;
