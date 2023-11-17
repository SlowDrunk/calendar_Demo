import { describe, test, expect } from "vitest";
import { reactive } from "vue";
import { setYear, formatMonth, getMonthDays, yearOptions } from "./index";

describe("utils_测试", () => {
    test("setYear", () => {
        const date = setYear({});
        expect(date).toEqual(reactive(date));
    });
    test("formatMonth", () => {
        const date = formatMonth(10);
        expect(date).toEqual("Oct");
    });
    test("getMonthDays", () => {
        const data = getMonthDays(2023, 11);
        expect(data).toEqual({
            fontNum: 3,
            endNum: 2,
            days: [
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
            ],
        });
    });
    test("yearOptions", () => {
        const data = yearOptions(2021);
        expect(data).toEqual([
            2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
            2026,
        ]);
    });
});
