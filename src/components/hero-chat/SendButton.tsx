"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

type SendButtonProps = {
  disabled?: boolean;
  onClick: () => void;
  className?: string;
};

const SendButton: React.FC<SendButtonProps> = ({ disabled, onClick, className }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={["bg-[#007bff] hover:bg-[#0056b3] text-white", className ?? ""].join(" ")}
      aria-label="Send message"
    >
      <Send className="h-4 w-4 mr-2" />
      Send
    </Button>
  );
};

export default SendButton;