import { myDate } from "./index"
import dayjs from "dayjs"
import { describe, test, expect, beforeEach } from "vitest"

describe("myDate", () => {
    let dateInstance: myDate

    beforeEach(() => {
        dateInstance = new myDate()
    })

    test("getYear", () => {
        const year = dateInstance.getYear()
        expect(year).toBe(dayjs().year())
    })

    test("getMonth", () => {
        const month = dateInstance.getMonth()
        expect(month).toBe(dayjs().month() + 1)
    })

    test("getDay", () => {
        const day = dateInstance.getDay()
        expect(day).toBe(dayjs().date())
    })

    test("setYear", () => {
        dateInstance.setYear(2023)
        expect(dateInstance.getYear()).toBe(2023)
    })

    test("setMonth", () => {
        dateInstance.setMonth(12)
        expect(dateInstance.getMonth()).toBe(12)
    })

    test("setDay", () => {
        dateInstance.setDay(30)
        expect(dateInstance.getDay()).toBe(30)
    })

    test("addYear", () => {
        const currentYear = dateInstance.getYear()
        dateInstance.addYear()
        expect(dateInstance.getYear()).toBe(currentYear + 1)
    })

    test("addMonth", () => {
        const currentMonth = dateInstance.getMonth()
        dateInstance.addMonth()
        expect(dateInstance.getMonth()).toBe((currentMonth % 12) + 1)
    })

    test("subtractYear", () => {
        const currentYear = dateInstance.getYear()
        dateInstance.subtractYear()
        expect(dateInstance.getYear()).toBe(currentYear - 1)
    })

    test("subtractMonth", () => {
        const currentMonth = dateInstance.getMonth()
        dateInstance.subtractMonth()
        expect(dateInstance.getMonth()).toBe(((currentMonth + 10) % 12) + 1)
    })

    test("checkYear", () => {
        dateInstance.checkYear()
        expect(dateInstance.showType).toBe("year")
    })

    test("checkMonth", () => {
        dateInstance.checkMonth()
        expect(dateInstance.showType).toBe("month")
    })
})
