import { format } from "date-fns";

export const DATE_FORMAT = 'MMM dd, yyy';

export const getFormattedDate = (date: Date) => format(date, DATE_FORMAT)