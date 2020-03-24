const hoverTip = `
\`\`\`html
render: (h, { row }) => {
    return <yt-ctrl>
      <yt-ctrl-item onClick={ () => this.handleUpdate(row) }>修改</yt-ctrl-item>
      <yt-ctrl-item confirm primary={ row.name } onClick={ () => this.handleDeleteRow(row) }>删除</yt-ctrl-item>
      <yt-ctrl-item confirm primary={ row.name } tip="重置" onClick={ () => this.handleReset(row)}>重置</yt-ctrl-item>
    <yt-ctrl>
}
\`\`\`

**常用属性(props)**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|auth|匹配放在 vuex 上的 authList 拥有的权限，没有相应权限将不会展示。|String|-|-|
|confirm|是否点击会有询问框。|Boolean|-|false|
|primary|询问框的的高亮内容。|String|-|-|
|tip|询问框的的高亮内容的前面两个字。|String|-|'删除'|

**使用提示**

- 用于 table render jsx 时候使用。
- 必须 yt-ctrl yt-ctrl-item 一起使用。
- 当按钮 yt-ctrl-item 数量多于 4 个时候，第四个按钮会变成更多，剩下的会变成下拉选项。
- confirm primary 基本上配套使用，做删除时经常在一起，如果加上 tip 会更加自由。

`


export default {
  hoverTip,
  categories: ['ctrl', 'item']
}