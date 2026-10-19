import { cn } from "cn";
import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl xl:max-w-7xl px-8", className)}
    >
      {children}
    </div>
  );
}

export default Container;
