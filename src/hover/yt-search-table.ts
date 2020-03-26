const hoverTip = `
\`\`\`html
<yt-search-table
    ref="table"
    :api="api"
    :fields="fields"
>
    <yt-button slot="btn" type="primary" icon="el-icon-plus" @click="handleAdd">新建xxx</yt-button>
    <yt-button slot="btn" icon="el-icon-delete" @click="handleDelete" >删除xxx</yt-button>
    <yt-dialog-form
        ref="edit"
        :isDefaultShow="false"
        :fields="fields"
        :addApi="addApi"
        :updateApi="updateApi"
    />
</yt-search-table>

**常用属性(props)**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|fields|表单项配置，可以悬浮到 fields 上查看详情。|Array|-|[]|
|api|列表 api，配置在 api 目录下的 ajax 函数。组件内部自动调用，自动处理分页与传参。|Promise|-|-|
|searchExtend|yt-search 的扩展。|Object|-|-|
|tableExtend|yt-table 的扩展。|Object|-|-|
|autoload|是否自动加载完做一次请求。|Boolean|-|true|

**插槽(slots)**

|参数|说明|
|-|-|
|btn|插在表格脑袋上。|
|before|插在搜索框前面。|

**方法(methods)**

|参数|说明|参数|
|-|-|-|
|getSelection|获取到当前勾选项。|Function(selection)|
|doLayout|重新排版表格。|Function()|
|refresh|刷新表格数据，第一个参数表示是否回到第一页。|Fuction(refresh: boolean)|
|getForm|获取表单当前值。|-|

**事件(events)**

|参数|说明|参数|
|-|-|-|
|load|数据加载完成。|Function(tableData)|
|options-loaded|选项加载完成。|Function()|

\`\`\`


`;
export default {
  hoverTip,
  categories: ['table']
};