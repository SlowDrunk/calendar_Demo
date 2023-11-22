import { ref } from "vue";
const dragIndex = ref(0);
// 开始拖拽
export const dragStart = (index: number) => {
    dragIndex.value = index;
};
// 拖拽逻辑
export const dragMove = (e: any, list: any[], index: number) => {
    e.preventDefault();
    if (dragIndex.value !== index) {
        const source = list[dragIndex.value];
        list.splice(dragIndex.value, 1);
        list.splice(index, 0, source);
        // 排序变化后目标对象索引发生改变
        dragIndex.value = index;
    }
    return list;
};
// dragover
export const dragOver = (e: any) => {
    e.preventDefault();
};
