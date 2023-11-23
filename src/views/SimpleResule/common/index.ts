
import { infoGroup } from "../fromOptions";
import Vue from "vue";
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

// 表单选项
export type FromItem =
    | FormItemProps
    | {
          label: string;
          prop: string;
          status?: number;
          class?: string;
          infoGroup: string;
          component: ComponentType;
      };

export type baseInfoType = {
    roleName?: string;
    name?: string;
    phoneNumber?: string;
    birth?: string;
    jobCity?: string;
    email?: string;
    wechat?: string;
};

// 教育经历
export interface EducationInfo {
    showFrom: boolean;
    educationLevel: string;
    typeOfEducational: string;
    city: string;
    schoolName: string;
    collegeName: string;
    major: string;
    startDate: string;
    endDate: string;
    experience: string;
    schoolTag: string[];
}
// 项目经历
export type ProjectInfo = {
    showFrom: boolean;
    city: string;
    name: string;
    startMonth: string;
    endMonth: string;
    role: string;
    content: string;
    desc: string;
};
// 实践经历
export type PracticeInfo = {
    showFrom: boolean;
    city: string;
    company: string;
    job: string;
    ext: string;
    department: string;
    desc: string;
    startMonth: string;
    endMonth: string;
};
// 研究经历
export type ResearchInfo = {
    showFrom: boolean;
    city: string;
    name: string;
    startMonth: string;
    endMonth: string;
    role: string;
    desc: string;
};
// 荣誉信息
export type HonorInfo = {
    honor: string;
    thesis: string;
    patent: string;
};
// 活动及自定义
export type ActivityInfo = {
    showFrom: boolean;
    name: string;
    department: string;
    role: string;
    city: string;
    startMonth: string;
    endMonth: string;
    desc: string;
};
export type OtherInfo = {
    skill: string[];
    cert: string[];
    hobbies: string[];
    language: string[];
};
export interface CustomizeInfo extends ActivityInfo {}
// 大的简历对象
export type ResumeData = {
    id: number;
    accoundId: number;
    resumeId: number;
    saveTime: string;
    eduExp: EducationInfo[];
    proExp: ProjectInfo[];
    researchExp: ResearchInfo[];
    praExp: PracticeInfo[];
    activities: ActivityInfo[];
    customizes: CustomizeInfo[];
    others: OtherInfo;
};
type baseInfoOptionType = {
    personInfo: FromItem[];
    jobHunting: FromItem[];
};
export type OptionFrom = {
    baseInfoOption: baseInfoOptionType;
    praFormOption: FromItem[];
    eduOption: FromItem[];
    proExpOption: FromItem[];
    researchExpFormOp: FromItem[];
};
type ShowOption = {
    components: Vue.Component;
    modelValue?: any; // 你可以根据实际情况设置更具体的类型
    props?: Record<string, any>; // 你可以根据实际情况设置更具体的类型
};

export interface ShowOptionMap {
    [infoGroup.baseInfo]: ShowOption;
    [infoGroup.projectInfo]: ShowOption;
    [infoGroup.educationInfo]: ShowOption;
    [infoGroup.jobExprices]: ShowOption;
}
