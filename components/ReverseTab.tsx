"use client";
import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Divider,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

const reverseFunction = (word: string): string => {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
};

const ReverseTab: React.FC = () => {
  const [reverseResult, setReverseResult] = useState("");

  const handleReverseClick = () => {
    const inputValue = (
      document.getElementById("reverse-input") as HTMLInputElement
    ).value;
    const result = reverseFunction(inputValue);
    setReverseResult(result);
  };

  return (
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
        <span
          id="reverse-result"
          className="max-h-7 py-7 rounded-lg bg-purple-700 flex justify-center items-center text-lg"
        >
          {reverseResult}
        </span>
        <div className="flex w-full flex-wrap justify-center md:flex-nowrap gap-4 my-5">
          <Button color="primary" variant="ghost" onClick={handleReverseClick}>
            Confirm
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ReverseTab;
