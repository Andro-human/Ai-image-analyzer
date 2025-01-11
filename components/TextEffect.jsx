"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `How It Works!
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
