import { parse, format } from "date-fns";

export function convertDate(inputDate) {
  if (inputDate == "") return inputDate;
  const parsedDate = parse(inputDate, "yyyy-MM", new Date());
  const formattedDate = format(parsedDate, "MMM yyyy");
  return formattedDate;
}