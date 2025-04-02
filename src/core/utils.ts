import { DateTime } from "luxon";

export const formatToDateTime = (date: any) => {
  return DateTime.fromFormat(
    date + " 00:00:00",
    "yyyy-MM-dd HH:mm:ss"
  ).toJSDate();
};
