"use client";

import type { Textarea } from "@/src/type/prop";
import Container from "./Container";
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
    <Container>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={message}
        onChange={changeHandler}
      />
    </Container>
  );
};

export default Textarea;
