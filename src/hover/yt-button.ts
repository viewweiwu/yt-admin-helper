const hoverTip = `
\`\`\`html
<yt-button>按钮名字</yt-button>
\`\`\`

**常用属性(props)**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|icon|目前仅方便支持 element 官网的图标。|String|-|-|
|auth|匹配放在 vuex 上的 authList 拥有的权限，没有相应权限将不会展示。|String|-|-|
|loading|按钮会变成不可点击，并且前面出现加载图标。|Boolean|-|false|
|disabled|按钮会变成不可点击。|Boolean|-|false|

另外支持 el-button 的所有属性。
`;

export default {
  hoverTip,
  categories: ['button', 'auth']
};