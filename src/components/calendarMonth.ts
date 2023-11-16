export const setMonth = (date: any, i: number) => {
  date.month = i;
  date.day = 1;
  return i;
};
export const yearOptions = (year: number) => {
  const yearArray = [];
  for (let i = year - 6; i <= year + 5; i++) {
    yearArray.push(i);
  }
  return yearArray;
};
export const inssureYear = (date: any, year: number) => {
  date.type = "month";
  date.year = year;
  date.day = 1;
  return year;
};
