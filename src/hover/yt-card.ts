const hoverTip = `
\`\`\`html
<yt-card header="卡片标题">
    <span>这里是卡片内容。</span>
</yt-card>
\`\`\`

**常用属性(props)**

|参数|说明|类型|可选值|默认值|
|---|:---|---|---|---|
|header|内容标题。|String|-|-|
|shadow|阴影。|String|always / hover / never|always|
|padding|内边距。|Number, String]|-|16|
|size|normal。|String]|normal / small|normal|


**插槽(slots)**

\`\`\`html
<yt-card header="卡片标题">
    <yt-button slot="right" type="text" size="mini">插在右边的按钮</yt-button>
</yt-card>
\`\`\`

|参数|说明|
|-|:-|
|after|插在头部标题后面，紧跟着文字。|
|right|插在头部右侧，跟文字分离。|
`;

export default {
  hoverTip,
  categories: ['card']
};