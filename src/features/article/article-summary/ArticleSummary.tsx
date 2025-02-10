import React, { ComponentProps } from "react";
import { TextWithHighight } from "../../../lib/text-highlight/TextWithHighight";
import { DateDisplay } from "../../../lib/date/DateDisplay";
import { Content, CreatedDate } from "./ArticleSummary.styles";
import { Article } from "../article.definitions";
import { getSummarizedArticle } from "./ArticleSummary.utils";

type ArticleSummaryProps = Article &
  Pick<ComponentProps<typeof TextWithHighight>, "highlitedWordCi"> & {
    className?: string;
  };

export const ArticleSummary: React.FC<ArticleSummaryProps> = ({
  className,
  highlitedWordCi,
  ...article
}) => {
  const { content, title, createdDate } = getSummarizedArticle(article);
  return (
    <article className={className}>
      <h2>
        <TextWithHighight highlitedWordCi={highlitedWordCi} text={title} />
      </h2>
      <CreatedDate>
        <DateDisplay
          date={new Date(createdDate)}
          render={(formattedDate) => (
            <TextWithHighight
              highlitedWordCi={highlitedWordCi}
              text={formattedDate}
            />
          )}
        />
      </CreatedDate>
      <Content>
        <TextWithHighight highlitedWordCi={highlitedWordCi} text={content} />
      </Content>
    </article>
  );
};
