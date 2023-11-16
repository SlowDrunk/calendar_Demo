import { getMonthDays } from "../components/calendarDay";
import { describe, test, expect } from "vitest";

describe("日期选择相关", () => {
  test("当前月份计算", () => {
    const result = getMonthDays(2023, 11);
    expect(result.days).toEqual([
      "29",
      "30",
      "31",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "01",
      "02",
    ]);
  });
});
