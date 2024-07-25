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

const vowelsFunction = (word: string): number => {
  const vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowelsList.includes(word[i])) {
      counter++;
    }
  }
  return counter;
};

const VowelsTab: React.FC = () => {
  const [vowelResult, setVowelResult] = useState(0);

  const handleVowelClick = () => {
    const inputValue = (
      document.getElementById("vowels-input") as HTMLInputElement
    ).value;
    const result = vowelsFunction(inputValue);
    setVowelResult(result);
  };

  return (
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
        <span
          id="vowels-result"
          className="max-h-7 py-7 rounded-lg bg-purple-700 flex justify-center items-center text-lg"
        >
          {vowelResult}
        </span>
        <div className="flex w-full flex-wrap justify-center md:flex-nowrap gap-4 my-5">
          <Button color="primary" variant="ghost" onClick={handleVowelClick}>
            Confirm
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default VowelsTab;
