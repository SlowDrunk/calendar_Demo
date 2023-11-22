// 生成年份范围
export const yearOptions = (year: number) => {
    const yearArray = []
    for (let i = year - 6; i <= year + 5; i++) {
        yearArray.push(i)
    }
    return yearArray
}
// 格式化月份
export const formatMonth = (month: number) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[month - 1]
}