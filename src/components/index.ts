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
    reactiveData.yearMonth = dayjs().year() + "";
    return reactiveData;
};
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
