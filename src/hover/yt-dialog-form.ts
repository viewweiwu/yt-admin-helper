const hoverTip = `
\`\`\`html
<yt-dialog-form
    ref="form"
    name="用户"
    :fields="fields"
    :isDefaultShow="false"
    :addApi="addApi"
    :updateApi="updateApi"
    :beforeSubmit="handleBeforeSubmit"
    :formExtend="{ grid: [[12, 12], [12, 12], [12, 12], [12, 12], [12, 12]], contentWidth: '100%' }"
    :dialogExtend="{ width: 800 }"
/>
\`\`\`

**常用属性(props)**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|fields|表单项配置，可以悬浮到 fields 上查看详情。|Array|-|[]|
|addApi|新增 api，配置在 api 目录下的 ajax 函数。调用 add event 时，组件内部自动调用。|Promise|-|-|
|updateApi|修改 api，配置在 api 目录下的 ajax 函数。调用 update event 时，组件内部自动调用。|Promise|-|-|
|beforeSubmit|提交前回调。|Function(params: Object)|-|-|
|formExtend|form 的其它参数扩展，此处详见 yt-form 的配置。|Object|-|-|
|dialogExtend|dialog 的其它参数扩展，此处详见 yt-dialog 的配置。|Object|-|-|
|defaultTitle|此属性会强制覆盖弹窗标题，name 属性失效。|String|-|-|
|name|不同 event 被调用弹窗标题不同，{ add: '新增name', update: '修改name', view: 'name详情' }。|String|-|-|
|hasConfirm|是否有确定按钮。|Boolean|-|true|
|isDefaultShow|是否默认展示 fileds 项目，设置了此属性会优先取 fields 的 dialog 参数。|Boolean|-|-|

**方法(methods)**

|参数|说明|参数|
|-|-|-|
|add|新增方法，Promise 事件，支持 then。|Function(defaultParams: Object, submitCallback: Function)|
|update|修改事件，Promise 事件，支持 then，基本上会需要设置默认值。|Function(defaultParams: Object, submitCallback: Function)|
|view|详情事件，此时表单所有项目会变成 isText，只读状态，并且会隐藏掉确定按钮，需要设置默认值。|Fuction(defaultParams: Object)|
|getForm|获取表单当前值。|-|

**提示**

- add update 不会自动提示，记得 then 之后调用 $success，并且刷新列表 $refs.table.refresh()。
- 底层就是 yt-dialog 跟 yt-form 的封装，各自的属性可以分别在 formExtend 或者 dialogExtend 里面设置。
- 放在 yt-search-table 下面的时候，isDefaultShow 必须要设置 false，否则会显示出所有项目。
- 如果单独使用 isDefaultShow 属性不需要设置 fasle。
`;

export default {
  hoverTip,
  categories: ['dialog', 'form', 'addApi', 'updateApi', 'view', 'add', 'update']
};