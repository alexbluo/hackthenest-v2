import { Dispatch, SetStateAction } from "react";

const lowerLetterBank = "abcdefhiklmnorstuvwxz";
const upperLetterBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numBank = "1234567890";

// https://www.youtube.com/watch?v=W5oawMJaXbU
const jumboAnimation = (
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
          letter === "." ||
          letter === ","
        ) {
          return letter;
        }

        let r = letter;
        while (r === letter) {
          if (/^\d+$/.test(letter)) {
            r = numBank[Math.floor(Math.random() * numBank.length)];
          } else if (letter === letter.toUpperCase()) {
            r =
              upperLetterBank[
                Math.floor(Math.random() * upperLetterBank.length)
              ]
          } else if (letter === letter.toLowerCase()) {
            r =
              lowerLetterBank[
                Math.floor(Math.random() * lowerLetterBank.length)
              ];
          }
        }

        return r;
      })
      .join("");

    setStateString(random);

    if (iteration >= targetString.length) clearInterval(interval);

    iteration += 1 / 2;
  }, 800 / targetString.length);
};

export default jumboAnimation;
