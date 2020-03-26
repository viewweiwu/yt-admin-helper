const hoverTip = `
\`\`\`javascript
fields: [
  {
      // 下面三个属性 yt-table、yt-search、yt-dialog-form 共用
      title: '群组名称',
      key: 'groupName',
      options: [
          { label: '选项1', value: 1 }
      ],
      optionsKey: '', // 系统接口的 params key，可以自动填充 options
      // type 属性 yt-search yt-dialog-form 共用
      type: 'select',
      // search 参数表示除了基础三个属性之外，其它的 yt-search 的 fields 需要的参数
      search: {
          key: 'newkey', 此处的 key 优先级更加高
          type: 'checkbox', // 此处 type 优先级比上面高
          width: 200,
          defaultValue: '默认值'
          // ...
      },
      // table 参数表示除了基础三个属性之外，其它的 yt-table 的 fields 需要的参数
      table: {
          type: 'selection',
          // ...
      },
      // dialog 参数表示除了基础三个属性之外，其它的 yt-dialog-form 的 fields 需要的参数
      dialog: {
          // isRequired: true === rule: { required: true, message: '请输入群组名称', trigger: 'change' }
          isRequired: true,
          // ...
      }
  }
]
\`\`\`

`;
export default {
  hoverTip,
  categories: ['fields']
};