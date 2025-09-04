"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
};

const ImageWithBlur: React.FC<Props> = ({ className, containerClassName, onLoad, ...imgProps }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!loaded && <Skeleton className="absolute inset-0" />}
      <img
        {...imgProps}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "duration-700 ease-out will-change-transform",
          loaded ? "opacity-100 blur-0" : "opacity-0 blur",
          className
        )}
      />
    </div>
  );
};

export default ImageWithBlur;