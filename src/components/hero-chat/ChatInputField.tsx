"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ChatInputFieldProps = {
  id?: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  className?: string;
};

const ChatInputField: React.FC<ChatInputFieldProps> = ({
  id = "chat-input",
  label,
  placeholder = "Type your question…",
  value,
  onChange,
  inputRef,
  className,
}) => {
  return (
    <div className={["w-full", className ?? ""].join(" ")}>
      <Label htmlFor={id} className="text-white/90 mb-1 block text-sm">
        {label}
      </Label>
      <Input
        id={id}
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className="bg-white/95 focus:bg-white text-gray-900 placeholder:text-gray-500"
      />
    </div>
  );
};

export default ChatInputField;