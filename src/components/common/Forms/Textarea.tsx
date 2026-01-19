"use client";

import type { Textarea } from "@/src/type/prop";
import { useState, useEffect } from "react";

const Textarea = ({ id, label, placeholder }: Textarea) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedMsg = localStorage.getItem("saved-message");
    if (savedMsg) {
      setMessage(savedMsg);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saved-message", message);
  }, [message]);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={message}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Textarea;
