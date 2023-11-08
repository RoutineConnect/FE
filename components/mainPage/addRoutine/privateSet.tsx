"use client";

import SlideBtn from "@/components/shared/slideBtn";
import { useState } from "react";

export default function PrivateSet() {
  const [privateSet, setPrivateSet] = useState(false);
  const PrivateHandler = () => {
    setPrivateSet(!privateSet);
  };

  return (
    <div>
      <SlideBtn value={privateSet} onClick={PrivateHandler} />
    </div>
  );
}
