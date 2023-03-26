import { Dispatch, SetStateAction } from "react";

const lowerLetterBank = "abcdefhiklmnorstuvwxz";
const upperLetterBank = "ABCDEFGIJKLMNOPQRSTUVWXYZ";
const numBank = "1234567890";

// https://www.youtube.com/watch?v=W5oawMJaXbU
const jumboAnimation = (
  stateString: string,
  setStateString: Dispatch<SetStateAction<string>>,
  targetString: string
) => {
  let iteration = 0;

  const interval = setInterval(() => {
    const random = targetString
      .split("")
      .map((letter, index) => {
        if (
          index < iteration ||
          letter === " " ||
          letter === "-" ||
          letter === "."
        ) {
          return letter;
        }

        if (/^\d+$/.test(letter)) {
          return numBank[Math.floor(Math.random() * numBank.length)];
        }

        if (letter === letter.toUpperCase()) {
          return upperLetterBank[
            Math.floor(Math.random() * upperLetterBank.length)
          ].toUpperCase();
        }

        return lowerLetterBank[
          Math.floor(Math.random() * lowerLetterBank.length)
        ];
      })
      .join("");

    setStateString(random);

    if (iteration >= targetString.length) clearInterval(interval);

    iteration += 1;
  }, 50);
};

export default jumboAnimation;
