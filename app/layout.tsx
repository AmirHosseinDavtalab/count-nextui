"use client";
import React from "react";
import { Card, Input, Button, Divider, Tabs, Tab, CardBody, CardHeader } from "@nextui-org/react";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";

function vowelsFunction(word) {
  const vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowelsList.includes(word[i])) {
      counter++;
    }
  }
  return counter;
}

function reverseFunction(word) {
  let newWord = '';
  for(let i = word.length - 1; i >= 0; i--){
      newWord += word[i];
  }
  return newWord;
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [vowelResult, setVowelResult] = React.useState(0);
  const [reverseResult, setReverseResult] = React.useState("");
  const [selected, setSelected] = React.useState("vowels");

  const handleVowelClick = () => {
    const inputValue = document.getElementById("vowels-input").value;
    const result = vowelsFunction(inputValue);
    setVowelResult(result);
  };

  const handleReverseClick = () => {
    const inputValue = document.getElementById("reverse-input").value;
    const result = reverseFunction(inputValue);
    setReverseResult(result);
  };

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
              <Tabs 
                aria-label="Function Tabs" 
                selectedKey={selected}
                onSelectionChange={setSelected}
              >
                <Tab key="vowels" title="Count Vowels">
                  <Card className="min-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-md">Counting Vowels</p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-5">
                        <Input type="text" label="Word" id="vowels-input" />
                      </div>
                      <span id="vowels-result" className="max-h-7 py-7 rounded-lg bg-purple-700 flex justify-center items-center text-lg">{vowelResult}</span>
                      <div className="flex w-full flex-wrap justify-center md:flex-nowrap gap-4 my-5">
                        <Button
                          color="primary"
                          variant="ghost"
                          onClick={handleVowelClick}
                        >
                          Confirm
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="reverse" title="Reverse Word">
                  <Card className="min-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-md">Reverse Word</p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-5">
                        <Input type="text" label="Word" id="reverse-input" />
                      </div>
                      <span id="reverse-result" className="max-h-7 py-7 rounded-lg bg-purple-700 flex justify-center items-center text-lg">{reverseResult}</span>
                      <div className="flex w-full flex-wrap justify-center md:flex-nowrap gap-4 my-5">
                        <Button
                          color="primary"
                          variant="ghost"
                          onClick={handleReverseClick}
                        >
                          Confirm
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
