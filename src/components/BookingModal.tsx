"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BOOKING_URL } from "@/config/booking";
import { Skeleton } from "@/components/ui/skeleton";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const BookingModal: React.FC<Props> = ({ open, onOpenChange }) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!open) setLoaded(false);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[98vw] w-[98vw] h-[92vh] p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Book a Stay</DialogTitle>
          <DialogDescription>Secure your reservation at Serenity Beach.</DialogDescription>
        </DialogHeader>

        <div className="flex h-full w-full flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b bg-white/90 backdrop-blur">
            <div className="flex items-center gap-2">
              <img
                src="https://serenityabaco.com/wp-content/uploads/2022/05/SERENITY-LOGO-SM.png"
                alt=""
                aria-hidden="true"
                className="h-6 w-auto"
                loading="lazy"
              />
              <span className="text-sm font-medium">Book a Stay</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="outline"
                className="hidden sm:inline-flex"
                title="Open booking in a new tab"
              >
                <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close booking"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative flex-1 bg-white">
            {!loaded && (
              <div className="absolute inset-0 p-4">
                <div className="h-full w-full rounded-lg border">
                  <div className="h-10 bg-gray-50 border-b px-4 flex items-center gap-2">
                    <Skeleton className="h-6 w-40" />
                  </div>
                  <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Skeleton className="h-40 rounded" />
                    <Skeleton className="h-40 rounded" />
                    <Skeleton className="h-40 rounded" />
                  </div>
                </div>
              </div>
            )}
            <iframe
              title="Serenity Beach Booking"
              src={BOOKING_URL}
              className="h-full w-full"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setLoaded(true)}
              // Sandbox allows forms, scripts, and same-origin to let booking run; popups open a new tab if needed
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>

          <div className="px-3 py-2 border-t bg-white/90 text-xs text-gray-600">
            If the booking experience doesn’t load here, use “Open in new tab”.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;