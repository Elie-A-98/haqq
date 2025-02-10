import { getFormattedDate } from "../../../lib/date/date.utils";
import { getTruncatedText } from "../../../lib/text-highlight/text.utils";
import { Article } from "../article.definitions";

const CONTENT_MAX_LENGTH = 400;

export const getSummarizedArticle = (article: Article) => ({
    content: getTruncatedText(article.content, CONTENT_MAX_LENGTH),
    createdDate: getFormattedDate(new Date(article.createdDate)),
    title: article.title,
} as Article);
