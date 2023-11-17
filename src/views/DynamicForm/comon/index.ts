// 下拉框配置
type SelectOption = {
    value: string | number | boolean | object;
    label: string | number;
    disabled?: boolean;
};
// 组件用
type Components = {
    comName: string;
    type?: string;
    maxlength?: string;
    minlength?: string;
    clearable?: boolean;
    formatter?: Function;
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    controls?: boolean;
    placeholder?: string;
    readonly?: boolean;
    trueLable?: string;
    checked?: boolean;
    options?: SelectOption[];
    format?: string;
    valueFormat?: string;
};
// 表单选项
export type FromItem = {
    label: string;
    prop: string;
    component: Components;
};
