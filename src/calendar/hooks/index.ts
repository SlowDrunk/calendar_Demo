import { reactive, computed } from "vue";
import { setYear, getMonthDays } from "../utiles/index";
import { yearOptions } from "../utiles/";
import dayjs from "dayjs";
export interface DataV {
    year: number;
    month: number;
    day: number;
    type: string;
}
// 全局状态下的日期对象
export const dateData = reactive<DataV>(setYear({}));
// 创建日期组件的hooks
export function useDate() {
    // 年份增长
    const increaseYear = (gap = 1) => {
        dateData.year += gap;
    };
    // 年份减少
    const decreaseYear = (gap = 1) => {
        dateData.year -= gap;
    };
    // 设置月份
    const setMonth = (month: number) => {
        dateData.month = month;
        dateData.day = 1;
        dateData.type = "";
        return month;
    };
    // xxxx年x月有多少天
    const monthDays = computed(() => {
        return getMonthDays(dateData.year, dateData.month).days;
    });
    const currentMonthSection = computed(() => {
        const startIndex = getMonthDays(dateData.year, dateData.month).fontNum;
        const endIndex =
            monthDays.value.length -
            getMonthDays(dateData.year, dateData.month).endNum;
        return [startIndex, endIndex];
    });
    // 设置具体某一天
    const setDay = (day: number, index: number, formatStr: string) => {
        if (index < currentMonthSection.value[0]) {
            dateData.month -= 1;
        } else if (index >= currentMonthSection.value[1]) {
            dateData.month += 1;
        }
        dateData.day = day;
        const result = dayjs(
            `${dateData.year}-${dateData.month}-${dateData.day}`
        ).format(formatStr);
        return result;
    };
    // 年份渲染范围
    const yearSelectOps = computed(() => {
        return yearOptions(dateData.year);
    });
    // 确认年份的选择
    const inssureYear = (year: number) => {
        dateData.type = "month";
        dateData.year = year;
        dateData.day = 1;
        return year;
    };
    return {
        setDay,
        setYear,
        setMonth,
        increaseYear,
        decreaseYear,
        inssureYear,
        monthDays,
        currentMonthSection,
        yearSelectOps,
    };
}
