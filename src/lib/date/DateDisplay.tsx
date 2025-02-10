import React, { JSX } from "react";
import { getFormattedDate } from "./date.utils";

type DateDisplayProps = {
  date: Date;
  render?: (formattedDate: string) => JSX.Element;
};

export const DateDisplay: React.FC<DateDisplayProps> = ({ date, render }) => {
  const formattedDate = getFormattedDate(date);
  return render ? render(formattedDate) : <>{formattedDate}</>;
};
