import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
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
    let endNum = 0;
    // 开始补全最后一天后的日期
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
