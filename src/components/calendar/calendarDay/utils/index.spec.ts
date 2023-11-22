import { getMonthDays } from "../utils"
import { describe, test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Index from "../index.vue"
import { nextTick } from "vue"
import { myDateInstance as rDate } from "../utils/index"

describe("日期选择相关", () => {
    test("2023年11月的日期计算", () => {
        const result = getMonthDays(2023, 11)
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
        ])
    })

    test("闰年2月的日期计算", () => {
        const result = getMonthDays(2024, 2)
        expect(result.days).toEqual([
            "28",
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
            "01",
            "02",
        ])
    })

    test("非闰年2月的日期计算", () => {
        const result = getMonthDays(2023, 2)
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
            "01",
            "02",
            "03",
            "04",
        ])
    })
})

describe("日期组件相关", () => {
    test("渲染周标题", async () => {
        const wrapper = mount(Index)

        await nextTick()

        const weekTitles = wrapper.findAll(".grid:nth-child(1) .w-10")
        expect(weekTitles.length).toBe(7)
        expect(weekTitles[0].text()).toBe("周日")
    })

    test("渲染每个月的天数", async () => {
        const wrapper = mount(Index)

        await nextTick()

        const monthDays = wrapper.findAll(".grid:nth-child(2) .w-10")
        expect(monthDays.length).toBeGreaterThan(28)
    })

    test("点击day", async () => {
        const wrapper = mount(Index)

        await nextTick()

        const day = wrapper.find(".grid:nth-child(2) .w-10")
        await day.trigger("click")
        expect(wrapper.emitted()).toBeTruthy()
    })
})
