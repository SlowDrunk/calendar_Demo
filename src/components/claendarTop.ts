export function yearIncrease(data: any, gap = 1) {
  data.year += gap;
}
export function yearDecrease(data: any, gap = 1) {
  data.year -= gap;
}
// 选择年份
export const selectYear = (date: any, year: number) => {
  date.month = 0;
  date.year = year;
  date.day = 1;
};
