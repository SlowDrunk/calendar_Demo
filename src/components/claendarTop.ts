import dayjs from "dayjs";
export interface DataV {
  year: number;
  month: number;
  day: number;
  yearIncrease: () => void;
  yearDecrease: () => void;
}

export const setYear = (data: DataV) => {
  data.year = dayjs().year();
  data.month = dayjs().month();
  data.day = dayjs().date();
  data.yearIncrease = (gap=1) => {
    data.year = dayjs().add(gap, "year").year();
  };
  data.yearDecrease = (gap=1) => {
    data.year = dayjs().subtract(gap, "year").year();
  };
  return data;
};
