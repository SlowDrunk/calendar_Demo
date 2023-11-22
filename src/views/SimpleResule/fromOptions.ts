import { ref } from "vue"
import { FromItem } from "./common/index"
export enum infoGroup {
    baseInfo = "baseInfo",
    educationInfo = "educationInfo",
    projectInfo = "projectInfo",
}

// 基本信息表单配置
export const baseInfoOption: FromItem[] = ref({
    personInfo: [
        {
            label: "姓名",
            prop: "name",
            infoGroup: infoGroup.baseInfo,
            status: 1,
            component: {
                comName: "el-input",
                props: {
                    placeholder: "请输入姓名",
                },
            },
        },
        {
            label: "手机号码",
            prop: "phone",
            infoGroup: infoGroup.baseInfo,
            status: 1,
            component: {
                comName: "el-input",
                props: {
                    placeholder: "请输入手机号",
                },
            },
        },
        {
            label: "出生日期",
            prop: "birthday",
            infoGroup: infoGroup.baseInfo,
            status: 1,
            component: {
                comName: "el-date-picker",
                props: {
                    placeholder: "出生年月",
                    format: "YYYY-MM-DD",
                    valueFormat: "YYYY-MM-DD",
                },
            },
        },
        {
            label: "电子邮箱",
            prop: "email",
            infoGroup: infoGroup.baseInfo,
            status: 0,
            component: {
                comName: "el-input",
                props: {
                    placeholder: "请输入电子邮箱",
                },
            },
        },
        {
            label: "微信号",
            prop: "wechat",
            infoGroup: infoGroup.baseInfo,
            status: 0,
            component: {
                comName: "el-input",
                props: {
                    placeholder: "请输入微信号",
                },
            },
        },
    ],
    jobHunting: [
        {
            label: "职位名称",
            prop: "roleName",
            infoGroup: infoGroup.baseInfo,
            status: 1,

            component: {
                comName: "el-input",
                props: {
                    placeholder: "请输入职位名称",
                },
            },
        },
        {
            label: "工作地点",
            prop: "workPlace",
            infoGroup: infoGroup.baseInfo,
            status: 1,
            component: {
                comName: "el-input",
                props: {
                    placeholder: "请输入工作地点",
                },
            },
        },
        {
            label: "工作描述",
            prop: "jobExp",
            infoGroup: infoGroup.baseInfo,
            status: 0,
            component: {
                comName: "el-input",
                props: {
                    placeholder: "请输入工作描述",
                },
            },
        },
    ],
})
// 工作经历表单配置
export const JobFormOption: FromItem[] = [
    {
        label: "公司名称",
        prop: "companyName",
        infoGroup: infoGroup.projectInfo,
        component: {
            comName: "el-input",
            placeholder: "请输入公司名称",
        },
    },
    {
        label: "职位名称",
        prop: "roleName",
        infoGroup: infoGroup.projectInfo,
        component: {
            comName: "el-input",
            placeholder: "请输入职位名称",
        },
    },
    {
        label: "所在部门",
        prop: "department",
        infoGroup: infoGroup.projectInfo,
        component: {
            comName: "el-input",
            placeholder: "请输入所在部门",
        },
    },
    {
        label: "所在城市",
        prop: "jobCity",
        infoGroup: infoGroup.projectInfo,
        component: {
            comName: "el-input",
            placeholder: "请输入所在部门",
        },
    },
    {
        label: "开始时间",
        prop: "startTime",
        infoGroup: infoGroup.projectInfo,
        component: {
            comName: "el-date-picker",
            placeholder: "开始时间",
            format: "YYYY-MM",
            valueFormat: "YYYY-MM",
        },
    },
    {
        label: "结束时间",
        prop: "endTime",
        infoGroup: infoGroup.projectInfo,
        component: {
            comName: "el-date-picker",
            placeholder: "开始时间",
            format: "YYYY-MM",
            valueFormat: "YYYY-MM",
        },
    },
]

// 项目经历表单配置
export const educationOption: FromItem[] = [
    {
        label: "学校",
        prop: "schoolName",
        infoGroup: infoGroup.educationInfo,
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
        infoGroup: infoGroup.educationInfo,
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
        infoGroup: infoGroup.educationInfo,
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入专业",
        },
    },
    {
        label: "学历",
        infoGroup: infoGroup.educationInfo,
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
        infoGroup: infoGroup.educationInfo,
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
        infoGroup: infoGroup.educationInfo,
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
        infoGroup: infoGroup.educationInfo,
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
        infoGroup: infoGroup.educationInfo,
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
]
