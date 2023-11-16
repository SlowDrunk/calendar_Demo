export function yearIncrease(data: any, gap = 1) {
  data.year += gap;
}
export function yearDecrease(data: any, gap = 1) {
  data.year -= gap;
}
// 选择年份
export const checkYear = (date: any) => {
  date.type = "year";
  date.month = 0;
};
// 选择月份
export const checkMonth = (date: any) => {
  date.type = "month";
  date.month = 0;
};
