import type { ResumeData, baseInfoType } from "../common/index";
import { infoGroup, optionData, InfoGroupMapping } from "./../fromOptions";
import { ref } from "vue";
import { createFormData } from "../utils/index";
export const baseInfo = ref<baseInfoType>({});
export const resumeData = ref<ResumeData | any>({
    id: 0,
    resumeId: 0,
    accoundId: 0,
    saveTime: "",
    eduExp: [],
    proExp: [],
    researchExp: [],
    praExp: [],
    activities: [],
    customizes: [],
    others: {
        skill: [],
        cert: [],
        hobbies: [],
        language: [],
    },
});
export function useFromInfo() {
    // 关闭其他选项表单确保只有一个展开项
    const closeOtherForm = (infoArray: any[]) => {
        infoArray.forEach((item: any) => {
            item.showForm = false;
        });
    };
    // 新增经历
    const addExpriceItem = (flag: string) => {
        const optionKey = InfoGroupMapping[flag].optionKey;
        const valueKey = InfoGroupMapping[flag].dataKey;
        closeOtherForm(resumeData.value[valueKey]);
        let defaultObj: any = {};
        defaultObj = createFormData(optionData.value[optionKey]);
        resumeData.value[valueKey].push(defaultObj);
    };
    // 删除经历
    const deleteExpriceItem = (flag: string, item: any) => {
        const valueKey = InfoGroupMapping[flag].dataKey;
        const index = resumeData.value[valueKey].indexOf(item);
        if (index >= 0) {
            resumeData.value[valueKey].splice(index, 1);
        }
    };
    return {
        addExpriceItem,
        closeOtherForm,
        deleteExpriceItem,
    };
}

export const moduleList = ref([
    {
        name: "个人信息",
        id: 1,
        group: infoGroup.baseInfo,
    },
    {
        name: "教育消息",
        id: 2,
        group: infoGroup.educationInfo,
    },
    {
        name: "实践经历",
        id: 3,
        group: infoGroup.jobExprices,
    },
    {
        name: "项目经历",
        id: 4,
        group: infoGroup.projectInfo,
    },
    {
        name: "专业技能",
        id: 5,
    },
    {
        name: "自定义模块",
        id: 6,
    },
    {
        name: "预览设计",
        id: 7,
    },
    {
        name: "完成简历",
        id: 8,
    },
]);
