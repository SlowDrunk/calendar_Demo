<script lang="ts" setup>
// 富文本Tools Icon
import BoldIcon from "@/components/bold-icon.vue";
import ItalicIcon from "@/components/italic-icon.vue";
import BulletListIcon from "@/components/bulletList-icon.vue";
import OrderListIcon from "@/components/orderList-icon.vue";
import SinkListItemIcon from "@/components/sinkListItem-icon.vue";
import LiftListItemIcon from "@/components/liftListItem-icon.vue";
import ClearMarksIcon from "@/components/clearMarks-icon.vue";
import RedoIcon from "@/components/redo-icon.vue";
import UndoIcon from "@/components/undo-icon.vue";
const Props = defineProps({
    name: {
        type: String,
        default: "default",
    },
});
const nameToComponent: any = {
    default: BoldIcon,
    Bold: BoldIcon,
    Italic: ItalicIcon,
    BulletList: BulletListIcon,
    OrderList: OrderListIcon,
    SinkListItem: SinkListItemIcon,
    LiftListItem: LiftListItemIcon,
    ClearMarks: ClearMarksIcon,
    Redo: RedoIcon,
    Undo: UndoIcon,
};
</script>

<template>
    <component :is="nameToComponent[Props.name]"></component>
</template>

<style lang="less" scoped></style>
