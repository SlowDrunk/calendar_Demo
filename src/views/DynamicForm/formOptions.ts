import type { FromItem } from "./comon/index";
export enum infoGroup {
    baseInfo = "baseInfo",
    educationInfo = "educationInfo",
    projectInfo = "projectInfo",
}
// 基本信息
export const baseOptions: FromItem[] = [
    // 基本信息
    {
        label: "姓名",
        prop: "username",
        status: 1,
        class: "col-span-2",
        infoGroup: "baseInfo",
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入姓名",
        },
    },
    {
        label: "电话",
        prop: "phoneNumber",
        status: 1,
        infoGroup: "baseInfo",
        component: {
            comName: "el-input",
            type: "text",
            clearable: true,
            placeholder: "请输入电话",
        },
    },
    {
        label: "邮箱",
        prop: "email",
        infoGroup: "baseInfo",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入邮箱",
        },
    },
    {
        label: "现居城市",
        prop: "city",
        status: 1,
        infoGroup: "baseInfo",
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入现居城市",
        },
    },
    {
        label: "个人网站",
        prop: "website",
        infoGroup: "baseInfo",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入个人网站",
        },
    },
    {
        label: "微信",
        prop: "wechat",
        status: 0,
        infoGroup: "baseInfo",
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入个人微信",
        },
    },
    {
        label: "年龄或生日",
        prop: "birth",
        infoGroup: "baseInfo",
        status: 0,
        component: {
            comName: "el-date-picker",
            format: "YYYY-MM",
            valueFormat: "YYYY-MM",
        },
    },
    {
        label: "当前状态",
        prop: "currentStatus",
        infoGroup: "baseInfo",
        status: 1,
        component: {
            comName: "el-select",
            multiple: true,
            placeholder: "请选择当前状态",
            options: [
                { label: "离职", value: "离职" },
                { label: "在职", value: "在职" },
                { label: "待入职", value: "待入职" },
                { label: "在校生", value: "在校生" },
                { label: "应届生", value: "应届生" },
            ],
        },
    },
    {
        label: "意向城市",
        prop: "wantCity",
        infoGroup: "baseInfo",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入个人意向城市",
        },
    },
    {
        label: "性别",
        prop: "sex",
        infoGroup: "baseInfo",
        status: 0,
        component: {
            comName: "el-radio-group",
            options: [
                { label: "男", value: "男" },
                { label: "女", value: "女" },
            ],
        },
    },
    {
        label: "身高",
        prop: "height",
        infoGroup: "baseInfo",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "如：160cm",
        },
    },
    {
        label: "民族",
        prop: "nation",
        infoGroup: "baseInfo",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "如：汉族",
        },
    },
    {
        label: "籍贯",
        prop: "location",
        infoGroup: "baseInfo",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入籍贯",
        },
    },
    {
        label: "婚姻状况",
        prop: "marrayed",
        infoGroup: "baseInfo",
        status: 0,
        component: {
            comName: "el-radio-group",
            options: [
                { label: "已婚", value: "已婚" },
                { label: "未婚", value: "未婚" },
            ],
        },
    },
    {
        label: "政治面貌",
        prop: "politicalStatus",
        infoGroup: "baseInfo",
        status: 0,
        component: {
            comName: "el-select",
            placeholder: "请选择政治面貌",
            options: [
                { label: "党员", value: "党员" },
                { label: "预备党员", value: "预备党员" },
                { label: "群众", value: "群众" },
            ],
        },
    },
    // 教育信息
    {
        label: "学校",
        prop: "schoolName",
        infoGroup: "educationInfo",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入",
        },
    },
    {
        label: "学校tag",
        prop: "schoolTag",
        status: 0,
        infoGroup: "educationInfo",
        component: {
            comName: "el-checkbox-group",
            options: [
                { label: "985", value: "985" },
                { label: "211", value: "211" },
                { label: "双一流", value: "双一流" },
                { label: "海外QS前100", value: "海外QS前100" },
            ],
        },
    },
    {
        label: "专业",
        prop: "profession",
        infoGroup: "educationInfo",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入专业",
        },
    },
    {
        label: "学历",
        infoGroup: "educationInfo",
        prop: "level",
        status: 1,
        component: {
            comName: "el-select",
            placeholder: "请输入学历信息",
            options: [
                { label: "中专", value: "中专" },
                { label: "高中", value: "高中" },
                { label: "大专", value: "大专" },
                { label: "本科", value: "本科" },
                { label: "硕士", value: "硕士" },
                { label: "博士", value: "博士" },
                { label: "MBA", value: "MBA" },
            ],
        },
    },
    {
        label: "学制",
        infoGroup: "educationInfo",
        prop: "educationSystem",
        status: 1,
        component: {
            comName: "el-select",
            placeholder: "请输入学历",
            options: [
                { label: "全日制", value: "全日制" },
                { label: "非全日制", value: "非全日制" },
                { label: "交流/交换", value: "交流/交换" },
            ],
        },
    },
    {
        label: "学院",
        prop: "college",
        infoGroup: "educationInfo",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入学院",
        },
    },
    {
        label: "所在城市",
        prop: "schoolCity",
        infoGroup: "educationInfo",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入学校所在城市",
        },
    },
    {
        label: "就读时间",
        prop: "ecducationTimeRange",
        infoGroup: "educationInfo",
        status: 1,
        // class: "col-span-2",
        component: {
            comName: "el-date-picker",
            type: "datetimerange",
            startPlaceholder: "开始日期",
            endPlaceholder: "结束日期",
            format: "YYYY-MM",
            valueFormat: "YYYY-MM",
            rangeSeparator: "至",
        },
    },
    // 项目信息
    {
        label: "项目名称",
        prop: "projectName",
        infoGroup: infoGroup.projectInfo,
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "输入项目名称",
        },
    },
    {
        label: "担任角色",
        prop: "role",
        infoGroup: infoGroup.projectInfo,
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "输入担任角色",
        },
    },
    {
        label: "所在城市",
        prop: "projectCity",
        infoGroup: infoGroup.projectInfo,
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "输入所在城市",
        },
    },
    {
        label: "起止时间",
        prop: "projectTime",
        infoGroup: infoGroup.projectInfo,
        status: 1,
        component: {
            comName: "el-date-picker",
            type: "datetimerange",
            startPlaceholder: "开始日期",
            endPlaceholder: "结束日期",
            format: "YYYY-MM",
            valueFormat: "YYYY-MM",
            rangeSeparator: "至",
        },
    },
];
// 根据表单配置生成初始对象
export function createFormData(OptionsInfo: FromItem[]) {
    const formData = {};
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
