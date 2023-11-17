import { reactive } from "vue";
import dayjs from "dayjs";
export interface DataV {
    year: number;
    month: number;
    day: number;
    type: string;
}
export const setYear = (data: any): DataV => {
    const reactiveData = reactive(data);
    reactiveData.year = dayjs().year();
    reactiveData.month = dayjs().month() + 1;
    reactiveData.day = dayjs().date();
    reactiveData.type = "";
    return reactiveData;
};
// 格式化日期
export const formatMonth = (month: number) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return months[month - 1];
};
// 获取当前月份有多少天
export const getMonthDays = (year: number, month: number) => {
    let firstDayOfMonth = dayjs(`${year}-${month}-1`);
    let lastDayOfMonth = dayjs(`${year}-${month + 1}-1`).subtract(1, "day");
    // 开始补全第一天前的日期
    let fontNum = 0;
    while (firstDayOfMonth.day() !== 0) {
        firstDayOfMonth = firstDayOfMonth.subtract(1, "day");
        fontNum++;
    }
    // 开始补全尾部日期
    let endNum = 0;
    while (lastDayOfMonth.day() !== 6) {
        lastDayOfMonth = lastDayOfMonth.add(1, "day");
        endNum++;
    }

    const days = [];
    let tempDate = firstDayOfMonth;
    while (
        tempDate.isBefore(lastDayOfMonth) ||
        tempDate.isSame(lastDayOfMonth)
    ) {
        days.push(dayjs(tempDate).format("DD"));
        tempDate = tempDate.add(1, "day");
    }
    return {
        days,
        fontNum,
        endNum,
    };
};
// 年份范围
export const yearOptions = (year: number) => {
    const yearArray = [];
    for (let i = year - 6; i <= year + 5; i++) {
        yearArray.push(i);
    }
    return yearArray;
};
