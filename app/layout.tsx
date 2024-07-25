"use client";
import React from "react";
import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import TabsComponent from "@/components/TabsComponent";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <h2 className="text-center text-5xl mt-36">Next UI project</h2>
            <section className="flex flex-col items-center justify-center align-center h-full gap-4 py-8 md:py-10">
              <TabsComponent />
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
