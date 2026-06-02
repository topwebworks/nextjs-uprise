import React from "react";

export default function AnimatedText({
  text = "Grow your business with a new website.",
}) {
  const words = text.trim().split(/\s+/);
  const charTotal = words.reduce((total, word) => total + Array.from(word).length, 0);
  let charIndex = 0;

  return (
    <>
      <span
        className="wow charsAnimIn words chars splitting"
        aria-hidden="true"
        style={{
          "--word-total": words.length,
          "--char-total": charTotal,
          visibility: "visible",
        }}
      >
        {words.map((word, wi) => (
          <React.Fragment key={`${word}-${wi}`}>
            {wi > 0 ? " " : null}
            <span className="word" data-word={word} style={{ "--word-index": wi }}>
              {Array.from(word).map((ch, ci) => {
                const currentCharIndex = charIndex++;

                return (
                  <span
                    key={`${ch}-${ci}`}
                    className="char"
                    data-char={ch}
                    style={{ "--char-index": currentCharIndex }}
                  >
                    {ch}
                  </span>
                );
              })}
            </span>
          </React.Fragment>
        ))}
      </span>
    </>
  );
}
