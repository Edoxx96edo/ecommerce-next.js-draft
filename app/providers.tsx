"use client";

import ThemeProvider from "./theme-providers";
import { Toaster } from "@/components/ui/toast";
import { ClerkProvider } from "@clerk/nextjs";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClerkProvider>
        <Toaster>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Toaster>
      </ClerkProvider>
    </>
  );
}

export default Providers;
