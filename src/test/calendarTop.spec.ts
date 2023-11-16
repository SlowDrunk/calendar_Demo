import { setYear } from "./../components/index";
import { yearIncrease, yearDecrease } from "./../components/claendarTop";
import { describe, test, expect } from "vitest";
describe("日历头部相关", () => {
    test("年份增长", () => {
        let date = setYear({});
        yearIncrease(date);
        expect(date.year).toBe(2024);
    });
    test("年份减少", () => {
        let date = setYear({});
        yearDecrease(date);
        expect(date.year).toBe(2022);
    });
});
