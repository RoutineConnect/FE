"use client";

import { useState } from "react";
import SlideBtn from "@/components/shared/slideBtn";

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
