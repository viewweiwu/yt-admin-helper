const hoverTip = `
\`\`\`html
<yt-dialog
    v-model="dialog"
    title="弹窗名称"
    @confirm="handleConfirm"
>
</yt-dialog>
\`\`\`

**常用属性(props)**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|v-model|弹窗关闭 or 显示。|Boolean|-|false|
|width|弹窗宽度。|Number / String|-|700|
|title|弹窗标题。|String|-|-|
|hasCancel|是否拥有取消按钮。|Boolean|-|true|
|hasConfirm|是否拥有确定按钮。|Boolean|-|true|
|isFormDialog|状态下底部文字会变成 【取消】【保存】。|Boolean|-|false|
|isLoading|loading 状态。|Boolean|-|false|
|height|弹窗高度，基本上不会用到。|Number / String|-|-|

**事件(events)**

|参数|说明|
|-|-|
|close|关闭事件，开始做消失动画。|
|closed|关闭事件，消失动画已经做完了。|
|cancel|取消事件。|
|confirm|确定事件。|

**提示**

- 确定按钮点击后并不会自己关闭弹窗😂。
- 记得做 loading 事件。
- 如果没有确定按钮，那么关闭按钮会自动高亮。
`;

export default {
  hoverTip,
  categories: ['dialog']
};