import { setMonth } from "../components/calendarMonth.ts"
import { setYear } from "../components/index.ts"
import { describe, test, expect } from "vitest"

describe("calendarMonth.ts", () => {
    test("设置月份", () => {
        const date = setYear({})
        setMonth(date, 1)
        expect(date.month).toBe(1)
    })
})
