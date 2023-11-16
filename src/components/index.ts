import { reactive } from "vue";
import dayjs from "dayjs";
export interface DataV {
  year: number;
  month: number;
  day: number;
  yearIncrease: () => void;
  yearDecrease: () => void;
  setDateMonth: () => void;
}
export const setYear = (data: any): DataV => {
  const reactiveData = reactive(data);
  reactiveData.year = dayjs().year();
  reactiveData.month = dayjs().month() + 1;
  reactiveData.day = dayjs().date();
  reactiveData.yearMonth = dayjs().year() + "";
  return reactiveData;
};

// 选择年份
export const selectYear = (date: any, year: number) => {
  date.month = 0;
  date.year = year;
  date.day = 1;
};
