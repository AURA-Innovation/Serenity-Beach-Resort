"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="mx-auto max-w-[1200px] px-4 pb-4">
        <div className="rounded-full bg-white shadow-lg border p-2">
          <Button asChild className="w-full bg-[#007bff] hover:bg-[#0056b3]">
            <a href="#contact">Plan Your Stay</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;