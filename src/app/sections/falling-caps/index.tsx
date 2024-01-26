import * as Scrollytelling from "@bsmnt/scrollytelling";

import  "./falling-capsmodule.scss";
import  CapsModel  from "./caps";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";

const splitText = (text: string, wordClass?: string) => {
  const wordsArray = text.split(" ");

  const htmlWords = wordsArray.map((word, i) => {
    const hasLineBreak = word.includes("\n");

    return (
      <span className={wordClass} key={i}>
        {word}
        {i < wordsArray.length  -1 && " "}
        {hasLineBreak && <br />}
      </span>
    );
  });

  return htmlWords;
};


const lines = ["A SPELLBINDING ", " NARRATIVE OF ENIGMATIC WONDERS", "AWAITS..."];

export const FallingCaps = () => {
  const splittedText = useMemo(
    () =>
      lines
        .map((line, lineIdx) => {
          const isLast = lineIdx === lines.length - 1;
          const wordElements = splitText(
            line + "\n",
            isLast ? "highlight" : undefined
          );

          return wordElements;
        })
        .flat(),
    []
  );

  return (
    <Scrollytelling.Root end="bottom bottom" >
      <section className="spacer">
        <div className="pin">
          <div className="canvas-container">
            
              <CapsModel />
          </div>

          <p className="paragraph">
            <Scrollytelling.Stagger
              overlap={0}
              tween={{
                start: 0,
                end: 50,
                fromTo: [
                  {
                    opacity: 0.2,
                  },
                  {
                    opacity: 1,
                    ease: "power2.out",
                  },
                ],
              }}
            >
              {splittedText}
            </Scrollytelling.Stagger>
          </p>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};
