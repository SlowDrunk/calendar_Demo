import { setMonth, yearOptions, inssureYear } from "../components/calendarMonth.ts"
import { setYear, formatMonth } from "../components/index.ts"
import { describe, test, expect } from "vitest"
describe("calendarMonth.ts", () => {
    test("设置月份", () => {
        const date = setYear({})
        const result = formatMonth(setMonth(date, 1))
        expect(result).toBe("Jan")
    })
    test("生成对应年份区间", () => {
        const result = yearOptions(2023)
        expect(result).toEqual([2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028])
    })
    test("点击top年份，修改配置", () => {
        const date = setYear({})
        const result = inssureYear(date, 2023)

        expect(result).toBe(2023)
        expect(date.type).toBe("month")
        expect(date.year).toBe(2023)
        expect(date.day).toBe(1)
    })
})
