import { ref } from "vue";
import { JobFormOption, educationOption, infoGroup } from "../fromOptions.ts";
import type { baseInfoType, JobExprices } from "../common";
import { createFormData } from "../utils/index";
// 基本信息
export const baseInfo = ref<baseInfoType>({});
// 工作经历
export const jobExprices = ref<JobExprices[]>([]);
// 教育信息
export const educationInfos = ref([]);

export function useFromInfo() {
    // 添加经历
    const addExprice = (flag: string) => {
        let defaultInfo = {};
        if (flag === infoGroup.educationInfo) {
            defaultInfo = createFormData(educationOption);
            // @ts-ignore
            educationInfos.value.push(defaultInfo);
        } else if (flag === infoGroup.projectInfo) {
            defaultInfo = createFormData(JobFormOption);
            // @ts-ignore
            jobExprices.value.push(defaultInfo);
        }
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
    };
}
