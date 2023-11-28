"use client";

import { useState } from "react";
import SlideBtn from "@/components/shared/slideBtn";

interface IPrivateSet {
  privateSet: boolean;
  privateHandler: () => void;
}

export default function PrivateSet({ privateSet, privateHandler }: IPrivateSet) {
  return (
    <div>
      <SlideBtn value={privateSet} onClick={privateHandler} />
    </div>
  );
}
