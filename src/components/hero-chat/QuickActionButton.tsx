"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type QuickActionButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ label, onClick, className }) => {
  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={onClick}
      className={[
        "h-7 text-xs rounded-lg",
        "bg-white/15 hover:bg-white/25 text-white/90 border border-white/20",
        className ?? "",
      ].join(" ")}
      aria-label={label}
    >
      {label}
    </Button>
  );
};

export default QuickActionButton;