"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import VowelsTab from "./VowelsTab";
import ReverseTab from "./ReverseTab";

const TabsComponent: React.FC = () => {
  const [selected, setSelected] = useState<string>("vowels");

  return (
    <Tabs
      aria-label="Function Tabs"
      selectedKey={selected}
      onSelectionChange={(key: string | React.Key) => setSelected(String(key))}
    >
      <Tab key="vowels" title="Count Vowels">
        <VowelsTab />
      </Tab>
      <Tab key="reverse" title="Reverse Word">
        <ReverseTab />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;
