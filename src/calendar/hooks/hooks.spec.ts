import { describe, test, expect } from "vitest";
import { dateData, useDate } from "./index.ts";

describe("calendar_hooks测试", () => {
    test("年份增长", () => {
        const { increaseYear } = useDate();
        increaseYear(1);
        expect(dateData.year).toBe(2024);
    });
    test("年份减少", () => {
        const { decreaseYear } = useDate();
        decreaseYear(1);
        expect(dateData.year).toBe(2023);
    });
    test("设置具体某一天", () => {
        const { setDay } = useDate();
        const result = setDay(18, 20, "YYYY/MM/DD");
        expect(result).toBe("2023/11/18");
    });
    test("设置月份", () => {
        const { setMonth } = useDate();
        setMonth(11);
        expect(dateData.month).toBe(11);
    });
    test("设置年份", () => {
        const { inssureYear } = useDate();
        inssureYear(2012);
        expect(dateData.year).toBe(2012);
    });
});
