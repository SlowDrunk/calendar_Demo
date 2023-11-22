import { yearOptions } from "./index"
import { describe, test, expect } from "vitest"

describe("年份选择相关", () => {
    test("2023年的年份范围", () => {
        const result = yearOptions(2023)
        expect(result).toEqual([2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028])
    })
})
