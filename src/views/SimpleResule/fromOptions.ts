import { ref } from "vue";
import { OptionFrom } from "./common/index";
export enum infoGroup {
    baseInfo = "baseInfo", // 基本信息
    educationExp = "eduExp", // 教育经历
    practiceExp = "praExp", // 工作经历
    projectExp = "proExp", // 项目经历
    researchExp = "researchExp", // 研究经历
    activitiesExp = "activities", // 社团经历
    customizesExp = "customizes", // 自定义
}

// 定义包含 dataKey 和 optionKey 的对象类型
type InfoGroupObject = {
    dataKey: string;
    optionKey: string;
};

// 将对象字面量类型应用到 enum 的每个成员
export const InfoGroupMapping: Record<infoGroup, InfoGroupObject> | any = {
    [infoGroup.baseInfo]: { dataKey: "baseInfo", optionKey: "baseInfoOption" },
    [infoGroup.educationExp]: {
        dataKey: "eduExp",
        optionKey: "eduOption",
    },
    [infoGroup.practiceExp]: { dataKey: "praExp", optionKey: "praFormOption" },
    [infoGroup.projectExp]: {
        dataKey: "proExp",
        optionKey: "projectExperienceOption",
    },
    [infoGroup.researchExp]: {
        dataKey: "researchExp",
        optionKey: "Research Experience",
    },
    [infoGroup.activitiesExp]: {
        dataKey: "activities",
        optionKey: "Activities Experience",
    },
    [infoGroup.customizesExp]: {
        dataKey: "customizes",
        optionKey: "Custom Experiences",
    },
};

export const optionData = ref<OptionFrom | any>({
    baseInfoOption: {
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
    },
    praFormOption: [
        {
            label: "公司名称",
            prop: "companyName",
            infoGroup: infoGroup.practiceExp,
            component: {
                comName: "el-input",
                placeholder: "请输入公司名称",
            },
        },
        {
            label: "职位名称",
            prop: "roleName",
            infoGroup: infoGroup.practiceExp,
            component: {
                comName: "el-input",
                placeholder: "请输入职位名称",
            },
        },
        {
            label: "所在部门",
            prop: "department",
            infoGroup: infoGroup.practiceExp,
            component: {
                comName: "el-input",
                placeholder: "请输入所在部门",
            },
        },
        {
            label: "所在城市",
            prop: "jobCity",
            infoGroup: infoGroup.practiceExp,
            component: {
                comName: "el-input",
                placeholder: "请输入所在部门",
            },
        },
        {
            label: "开始时间",
            prop: "startTime",
            infoGroup: infoGroup.practiceExp,
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
            infoGroup: infoGroup.practiceExp,
            component: {
                comName: "el-date-picker",
                placeholder: "开始时间",
                format: "YYYY-MM",
                valueFormat: "YYYY-MM",
            },
        },
    ],
    eduOption: [
        {
            label: "学校",
            prop: "schoolName",
            infoGroup: infoGroup.educationExp,
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
            infoGroup: infoGroup.educationExp,
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
            infoGroup: infoGroup.educationExp,
            status: 1,
            component: {
                comName: "el-input",
                type: "text",
                placeholder: "请输入专业",
            },
        },
        {
            label: "学历",
            infoGroup: infoGroup.educationExp,
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
            infoGroup: infoGroup.educationExp,
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
            infoGroup: infoGroup.educationExp,
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
            infoGroup: infoGroup.educationExp,
            status: 1,
            component: {
                comName: "el-input",
                type: "text",
                placeholder: "请输入学校所在城市",
            },
        },
        {
            label: "开始时间",
            prop: "startTime",
            infoGroup: infoGroup.projectExp,
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
            infoGroup: infoGroup.projectExp,
            component: {
                comName: "el-date-picker",
                placeholder: "开始时间",
                format: "YYYY-MM",
                valueFormat: "YYYY-MM",
            },
        },
    ],
    proExpOption: [
        {
            label: "项目名称",
            prop: "projectName",
            class: "",
            infoGroup: infoGroup.projectExp,
            component: {
                comName: "el-input",
                placeholder: "请输入项目名称",
            },
        },
        {
            label: "你的角色",
            prop: "roleName",
            infoGroup: infoGroup.projectExp,
            component: {
                comName: "el-input",
                placeholder: "请输入你的角色",
            },
        },
        {
            label: "所在城市",
            prop: "jobCity",
            infoGroup: infoGroup.projectExp,
            component: {
                comName: "el-input",
                placeholder: "请输入所在部门",
            },
        },
        {
            label: "开始时间",
            prop: "startTime",
            infoGroup: infoGroup.projectExp,
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
            infoGroup: infoGroup.projectExp,
            component: {
                comName: "el-date-picker",
                placeholder: "开始时间",
                format: "YYYY-MM",
                valueFormat: "YYYY-MM",
            },
        },
    ],
    researchExpFormOp: [
        {
            label: "研究/经历名称",
            prop: "projectName",
            class: "col-span-6",
            infoGroup: infoGroup.researchExp,
            component: {
                comName: "el-input",
                placeholder: "请输入项目名称",
            },
        },
        {
            label: "你的角色",
            prop: "roleName",
            class: "col-span-6",
            infoGroup: infoGroup.researchExp,
            component: {
                comName: "el-input",
                placeholder: "请输入你的角色",
            },
        },
        {
            label: "所在部门",
            prop: "department",
            infoGroup: infoGroup.researchExp,
            component: {
                comName: "el-input",
                placeholder: "请输入所在部门",
            },
        },
        {
            label: "所在城市",
            prop: "jobCity",
            infoGroup: infoGroup.researchExp,
            component: {
                comName: "el-input",
                placeholder: "请输入所在部门",
            },
        },
        {
            label: "开始时间",
            prop: "startTime",
            infoGroup: infoGroup.researchExp,
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
            infoGroup: infoGroup.researchExp,
            component: {
                comName: "el-date-picker",
                placeholder: "开始时间",
                format: "YYYY-MM",
                valueFormat: "YYYY-MM",
            },
        },
    ],
});
