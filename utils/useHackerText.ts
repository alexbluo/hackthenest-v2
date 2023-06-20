import { useState } from "react";

const lowercharacterBank = "abcdefhiklmnorstuvwxz";
const uppercharacterBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numBank = "1234567890";

interface AnimateTextOptions {
  finalText?: string;
  duration?: number;
  iterations?: number;
}

type AnimateTextAction = (options?: AnimateTextOptions) => void;

// https://www.youtube.com/watch?v=W5oawMJaXbU
const useHackerText = (initialText: string): [string, AnimateTextAction] => {
  const [text, setText] = useState(initialText);

  const animateText: AnimateTextAction = (
    // might need to add default params twice
    { finalText = initialText, duration = 800, iterations = 2 } = {
      finalText: initialText,
      duration: 800,
      iterations: 2,
    }
  ) => {
    let iteration = 0;

    const interval = setInterval(() => {
      const randomText = finalText
        .split("")
        .map((character, index) => {
          if (
            index < iteration ||
            character === " " ||
            character === "-" ||
            character === "." ||
            character === "," ||
            character === "!" 
          ) {
            return character;
          }

          if (/^\d+$/.test(character)) {
            return numBank[Math.floor(Math.random() * numBank.length)];
          }
          if (character === character.toUpperCase()) {
            return uppercharacterBank[
              Math.floor(Math.random() * uppercharacterBank.length)
            ];
          }
          if (character === character.toLowerCase()) {
            return lowercharacterBank[
              Math.floor(Math.random() * lowercharacterBank.length)
            ];
          }

          return character;
        })
        .join("");

      setText(randomText);

      if (iteration >= finalText.length) clearInterval(interval);

      iteration += 1 / iterations;
      console.log(iteration);
    }, duration / finalText.length);
  };

  return [text, animateText];
};

export default useHackerText;
