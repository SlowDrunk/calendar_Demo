import { setMonth } from "../components/calendarMonth.ts";
import { setYear, formatMonth } from "../components/index.ts";
import { describe, test, expect } from "vitest";
describe("calendarMonth.ts", () => {
  test("设置月份", () => {
    const date = setYear({});
    const result = formatMonth(setMonth(date, 1));
    expect(result).toBe("Jan");
  });
});
