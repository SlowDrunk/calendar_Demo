import { InfoGroupMapping, optionData } from "./../fromOptions";
import { FromItem } from "../common/index";

// 根据表单配置生成初始对象
export function createFormData(OptionsInfo: FromItem[]) {
    const formData = { showForm: true };
    OptionsInfo.forEach((item) => {
        // @ts-ignore
        const { prop, component } = item;
        let defaultValue;
        // 根据组件类型设置默认值
        switch (component.comName) {
            case "el-input":
                defaultValue = "";
                break;
            case "el-checkbox-group":
                defaultValue = [];
                break;
            case "el-select":
                defaultValue = [];
                break;
            case "el-date-picker":
                defaultValue = null;
                break;
            // 可根据需要添加其他组件类型的处理逻辑
            default:
                defaultValue = null;
                break;
        }
        // 使用 ref 创建响应式对象
        // @ts-ignore
        formData[prop] = defaultValue;
    });
    return formData;
}
// 获取表单配置
export function getFormOptions(flag: string) {
    const optionKey = InfoGroupMapping[flag].optionKey;
    return optionData.value[optionKey];
}
