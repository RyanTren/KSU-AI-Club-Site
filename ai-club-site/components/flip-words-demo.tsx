import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["President", "Vice President", "Treasurer", "Media Manager"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-1">
      <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Meet the passionate{" "}
        <FlipWords className="text-ksu-gold" words={words} />{" "}<br />
        driving the KSU AI Club forward!
      </div>
    </div>
  );
}
