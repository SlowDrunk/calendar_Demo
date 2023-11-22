import { reactive } from "vue"
import dayjs, { Dayjs } from "dayjs"

export class myDate {
    date: Dayjs
    showType: string = "day"

    constructor(newDate: Dayjs = dayjs()) {
        this.date = newDate
    }

    getYear() {
        return this.date.year()
    }
    getMonth() {
        return this.date.month() + 1
    }
    getDay() {
        return this.date.date()
    }
    setYear(year: number) {
        this.date = this.date.year(year)
    }
    setMonth(month: number) {
        this.date = this.date.month(month - 1)
    }
    setDay(day: number) {
        this.date = this.date.date(day)
    }
    addYear(num: number = 1) {
        this.date = this.date.add(num, "year")
    }
    addMonth(num: number = 1) {
        this.date = this.date.add(num, "month")
    }
    subtractYear(num: number = 1) {
        this.date = this.date.subtract(num, "year")
    }
    subtractMonth(num: number = 1) {
        this.date = this.date.subtract(num, "month")
    }
    checkYear() {
        this.showType = "year"
    }
    checkMonth() {
        this.showType = "month"
    }
}

export const myDateInstance = reactive(new myDate())
