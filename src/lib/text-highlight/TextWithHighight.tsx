import React from "react";

type TextWithHighightProps = {
  text: string;
  highlitedWordCi: string; // Ci for case insensitive
};

export const TextWithHighight: React.FC<TextWithHighightProps> = ({
  text,
  highlitedWordCi,
}) => {
  let constructedArticleLength = 0;
  const segments = text.split(RegExp(highlitedWordCi, "gi"));
  return (
    <>
      {segments.length > 1
        ? segments.reduce((acc, seg, index) => {
            if (index === segments.length - 1) {
              constructedArticleLength += seg.length;
              return (
                <>
                  {acc}
                  {seg}
                </>
              );
            }

            // This is to handle case insensitivity (to not replate 'This' with 'this' for ex)
            constructedArticleLength += seg.length;
            const originalHightlitedWord = text.slice(
              constructedArticleLength,
              constructedArticleLength + highlitedWordCi.length
            );
            constructedArticleLength += originalHightlitedWord.length;
            return (
              <>
                {acc}
                {seg}
                <span style={{ backgroundColor: "yellow" }}>
                  {originalHightlitedWord}
                </span>
              </>
            );
          }, <></>)
        : text}
    </>
  );
};
