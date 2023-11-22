import { infoGroup } from "./../../DynamicForm/formOptions";
import type {
    FormItemProps,
    InputProps,
    DatePickType,
    InputNumberProps,
    TimePickerDefaultProps,
    SelectOptionProxy,
} from "element-plus";

// 定义组件通用类型
type ComponentsCommon = {
    comName: string;
    prop: string;
    type?: string;
    options?: SelectOptionProxy;
};

// 使用交叉类型合并类型
type Extended<T> = T & ComponentsCommon;

// 合并后的组件类型
export type ComponentType =
    | ComponentsCommon
    | Extended<InputProps>
    | Extended<DatePickType>
    | Extended<InputNumberProps>
    | Extended<TimePickerDefaultProps>
    | Record<string, any>; // 放宽限制

// 表单项通用类型
type FromItemCommon = {
    label: string;
    prop: string;
    status?: number;
    class?: string;
    infoGroup: string;
    component: ComponentType;
};

// 表单选项
export type FromItem = FromItemCommon | FormItemProps;

enum FormPosition {
    left = "left",
    right = "right",
    top = "top",
    bottom = "bottom",
}
// 表单
type FormConfig = {
    labelWidth?: string;
    formItems?: FromItem[];
    inline?: boolean;
    labelPosition?: FormPosition;
    labelSuffix?: string;
    hideRequireAsterisk?: boolean;
    requireAsteriskPosition?: FormPosition;
    showMessage?: boolean;
    inlineMessage?: boolean;
    statusIcon?: boolean;
    validateOnRuleChange?: boolean;
    size?: "" | "large" | "default" | "small";
    disable?: boolean;
    scrollToError?: boolean;
    scrollIntoViewOptions?: object | boolean;
};

export type baseInfoType = {
    roleName: string;
    name: string;
    phoneNumber: string;
    birth: string;
    jobCity: string;
    email: string;
    wechat: string;
};

export type JobExprices = {
    companyName: string;
    roleName: string;
    jobCity: string;
    startTime: string;
    endTime: string;
    jobDesc?: string;
    showForm: boolean;
};

export type EducationExprices = {
    schoolName: "";
    schoolTag: string[];
    profession: string;
    level: string;
    educationSystem: string;
    college: string;
    schoolCity: string;
    startTime: string;
    endTime: string;
    showForm: boolean;
};

export interface ShowOptionMap {
    [infoGroup.baseInfo]: ShowOption;
    [infoGroup.projectInfo]: ShowOption;
    [infoGroup.educationInfo]: ShowOption;
}
