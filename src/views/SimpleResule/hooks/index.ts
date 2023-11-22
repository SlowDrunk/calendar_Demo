import { ref } from "vue";
import { JobFormOption, educationOption, infoGroup } from "../fromOptions.ts";
import type { baseInfoType, JobExprices } from "../common";
import { createFormData } from "../utils/index";
// 基本信息
export const baseInfo = ref<baseInfoType>({});
// 工作经历
export const jobExprices = ref<JobExprices[]>([]);
// 教育信息
export const educationInfos = ref<any>([]);

export function useFromInfo() {
    // 关闭其他选项表单确保只有一个展开项
    const closeOtherForm = (infoArray: any[]) => {
        infoArray.forEach((item: any) => {
            item.showForm = false;
        });
    };
    // 添加经历
    const addExprice = (flag: string) => {
        let defaultInfo: any = {};
        jobExprices.value.forEach((item: any) => {
            item.showForm = false;
        });
        if (flag === infoGroup.educationInfo) {
            closeOtherForm(educationInfos.value);
            defaultInfo = createFormData(educationOption);
            // @ts-ignore
            educationInfos.value.push(defaultInfo);
        } else if (flag === infoGroup.projectInfo) {
            closeOtherForm(jobExprices.value);
            defaultInfo = createFormData(JobFormOption);

            // @ts-ignore
            jobExprices.value.push(defaultInfo);
        }
        defaultInfo.showForm = true;
    };

    // 删除经历
    const deleteExprice = (flag: string, item: any) => {
        if (flag === infoGroup.projectInfo) {
            const index = jobExprices.value.indexOf(item);
            if (index >= 0) {
                jobExprices.value.splice(index, 1);
            }
        } else if (flag === infoGroup.educationInfo) {
            const index = educationInfos.value.indexOf(item);
            if (index >= 0) {
                educationInfos.value.splice(index, 1);
            }
        }
    };

    return {
        deleteExprice,
        addExprice,
        closeOtherForm,
    };
}

export const moduleList = ref([
    {
        name: '个人信息',
        id: 1,
        group: infoGroup.baseInfo
    },
    {
        name: '教育消息',
        id: 2,
        group: infoGroup.educationInfo
    },
    {
        name: '实践经历',
        id: 3,
        group: infoGroup.projectInfo
    },
    {
        name: '项目经历',
        id: 4,
    },
    {
        name: '专业技能',
        id: 5,
    },
    {
        name: '自定义模块',
        id: 6,
    },
    {
        name: '预览设计',
        id: 7,
    },
    {
        name: '完成简历',
        id: 8,
    }
])
