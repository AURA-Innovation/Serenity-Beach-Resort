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
import { X, AlertTriangle } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const BookingModal: React.FC<Props> = ({ open, onOpenChange }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [blocked, setBlocked] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    // Reset state on close
    if (!open) {
      setLoaded(false);
      setBlocked(false);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // If the iframe doesn't load within a short window, assume it's blocked by X-Frame-Options / CSP.
    timerRef.current = window.setTimeout(() => {
      if (!loaded) setBlocked(true);
    }, 3000);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleLoaded = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setBlocked(false);
    setLoaded(true);
  };

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
            {!loaded && !blocked && (
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

            {blocked && !loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <AlertTriangle className="h-10 w-10 text-amber-600" />
                <div>
                  <h3 className="text-base font-medium">Booking site can’t load here</h3>
                  <p className="mt-1 text-sm text-gray-600 max-w-sm">
                    Some booking providers block embedding inside other sites. Please open the
                    booking page in a new tab to continue.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
                    <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                      Open in new tab
                    </a>
                  </Button>
                  <Button variant="outline" onClick={() => onOpenChange(false)}>
                    Close
                  </Button>
                </div>
              </div>
            )}

            <iframe
              title="Serenity Beach Booking"
              src={BOOKING_URL}
              className={`h-full w-full ${blocked && !loaded ? "hidden" : ""}`}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={handleLoaded}
              onError={() => setBlocked(true)}
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