let fields = [
  {
    table: {
      type: 'selection'
    }
  },
  {
    title: '用户账号',
    key: 'userName',
    type: 'input',
    search: {
      order: 1
    },
    dialog: {
      order: 1,
      rule: [
        { required: true, message: '请输入用户账号', trigger: 'blur' },
        {
          pattern: /^[\w]*$/,
          message: '仅允许输入字母数字或下划线',
          trigger: 'blur'
        }
      ]
    }
  },
  {
    title: '用户名称',
    key: 'realName',
    type: 'input',
    search: {
      order: 2
    },
    dialog: {
      order: 2,
      isRequired: true
    }
  },
  {
    title: '用户类型',
    key: 'type',
    type: 'select',
    options: [
      { label: '1', value: 1 }
    ],
    optionsKey: 'userType',
    search: {
      order: 4
    },
    dialog: {
      order: 9
    }
  },
  {
    title: '联系号码',
    key: 'contact',
    type: 'input',
    dialog: {
      order: 7,
      props: {
        maxlength: 11
      },
      rule: [
        { required: true, message: '请输入联系号码', trigger: 'blur' },
        {
          pattern: /^[a-zA-Z0-9]*$/,
          message: '只允许输入字母或者数字',
          trigger: 'blur'
        }
      ]
    }
  },
  {
    title: '岗位',
    key: 'positionId',
    type: 'select',
    options: [],
    optionsKey: 'postType',
    dialog: {
      order: 8
    },
    table: {
      'min-width': 140
    }
  },
  {
    title: '证件号',
    key: 'idCard',
    type: 'input',
    search: {
      order: 3
    },
    dialog: {
      order: 6,
      props: {
        maxlength: 18
      },
      rule: [
        { required: true, message: '请输入证件号', trigger: 'blur' },
        {
          pattern: /^[a-zA-Z0-9]*$/,
          message: '只允许输入字母或者数字',
          trigger: 'blur'
        }
      ]
    }
  },
  {
    title: '所属机构',
    key: 'orgId',
    type: 'org',
    search: {
      order: 5,
      defaultValue: ''
    },
    dialog: {
      order: 3,
      isRequired: true
    },
    table: {
      key: 'orgName',
      'min-width': 120,
      tooltip: true
    }
  },
  {
    title: '在职状态',
    key: 'state',
    type: 'select',
    options: [],
    optionsKey: 'empSts',
    table: {
      isShow: false
    },
    dialog: {
      order: 10
    }
  },
  {
    title: '邮箱地址',
    key: 'email',
    type: 'input',
    table: {
      isShow: false
    },
    dialog: {
      order: 11,
      props: {
        maxlength: 100
      }
    }
  },
  {
    title: '生效时间',
    key: 'effDt',
    type: 'date',
    dialog: {
      order: 10,
      isRequired: true,
      defaultValue: new Date()
    }
  },
  {
    title: '失效时间',
    key: 'endDt'
  },
  {
    title: '操作',
    table: {
      width: 280,
      render: (h, { row }) => {
        // return <yt-ctrl>
        //     <yt-ctrl-item /* auth={this.prefix + 'user-update'} */ onClick={ () => this.handleUpdate(row) }>修改</yt-ctrl-item>
        //     <yt-ctrl-item /* auth={this.prefix + 'user-role'} */ onClick={ () => this.handleRoleEdit(row) }>分配角色</yt-ctrl-item>
        //     <yt-ctrl-item confirm primary={ row.realName + `(重置后密码: ${this.config.default_password})` } tip="重置" onClick={ () => this.handleReset(row) }>重置密码</yt-ctrl-item>
        //     <yt-ctrl-item /* auth={this.prefix + 'user-delete'} */ confirm primary={ row.realName } onClick={ () => this.handleRowDelete(row) }>删除</yt-ctrl-item>
        //     <yt-ctrl-item /* auth={this.prefix + 'user-delete'} */ onClick={ () => this.handleLog(row) }>历史记录</yt-ctrl-item>
        // </yt-ctrl>;
      }
    }
  }
];
let tableData = [
  {
    id: '402881ee70f73ed90170f762c7350041',
    createTime: '2020-03-20 18:00:10',
    updateTime: '2020-03-20 18:00:10',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: 'v5',
    realName: 'v',
    companyName: null,
    type: null,
    passWord: 'e10adc3949ba59abbe56e057f20f883e',
    idCard: 'v',
    orgId: '965000',
    email: '',
    contact: 'v',
    state: null,
    wrongNum: null,
    parentid: null,
    positionId: null,
    positionLevel: null,
    expireDate: null,
    orgName: '浙江临海农村商业银行股份有限公司',
    effDt: '2020-03-20',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965000',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2020-03-20'
  },
  {
    id: '402881ed6f6a0208016f6a24f9a40034',
    createTime: '2020-01-03 14:43:25',
    updateTime: '2020-01-03 14:43:25',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: '9650007',
    realName: '林咸刚',
    companyName: null,
    type: null,
    passWord: 'fcea920f7412b5da7be0cf42b8c93759',
    idCard: null,
    orgId: '965821',
    email: null,
    contact: null,
    state: '2',
    wrongNum: null,
    parentid: null,
    positionId: null,
    positionLevel: null,
    expireDate: null,
    orgName: '凯歌分理处',
    effDt: '2020-01-01',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965821',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2020-01-01'
  },
  {
    id: '402881ed6f6a0208016f6a23026c0027',
    createTime: '2020-01-03 14:41:16',
    updateTime: '2020-01-03 14:41:16',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: '96A0026',
    realName: '陈昕瑀',
    companyName: null,
    type: '02',
    passWord: '96e79218965eb72c92a549dd5a330112',
    idCard: null,
    orgId: '965033',
    email: null,
    contact: null,
    state: '2',
    wrongNum: null,
    parentid: null,
    positionId: null,
    positionLevel: null,
    expireDate: null,
    orgName: '浙江临海农村商业银行股份有限公司城东支行水云塘分理处',
    effDt: '2020-02-29',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965033',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2020-02-29'
  },
  {
    id: '297e234e6f654ab0016f65b1dabf0021',
    createTime: '2020-01-02 17:59:12',
    updateTime: '2020-01-02 18:02:00',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: 'test2020010111',
    realName: 'test2020010111',
    companyName: null,
    type: '02',
    passWord: '96e79218965eb72c92a549dd5a330112',
    idCard: '122121234567890987',
    orgId: '965821',
    email: '111',
    contact: '111',
    state: '2',
    wrongNum: null,
    parentid: null,
    positionId: null,
    positionLevel: null,
    expireDate: null,
    orgName: '凯歌分理处',
    effDt: '2020-01-02',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965821',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2020-01-02'
  },
  {
    id: '297e234e6f64692f016f64b7355f0006',
    createTime: '2020-01-02 13:25:25',
    updateTime: '2020-01-02 16:23:43',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: 'test20200102',
    realName: 'test20200102',
    companyName: null,
    type: '01',
    passWord: '0a5fc839269555e12f60bfbb529443d4',
    idCard: '122121234567890987',
    orgId: '965821',
    email: '111',
    contact: '111',
    state: '2',
    wrongNum: null,
    parentid: null,
    positionId: '3',
    positionLevel: null,
    expireDate: null,
    orgName: '凯歌分理处',
    effDt: '2020-01-10',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965821',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2020-01-10'
  },
  {
    id: '297e234e6f643087016f64487bf9000a',
    createTime: '2020-01-02 11:24:29',
    updateTime: '2020-01-02 11:35:07',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: 'test1234567',
    realName: 'test1234567',
    companyName: null,
    type: '01',
    passWord: '96e79218965eb72c92a549dd5a330112',
    idCard: null,
    orgId: '965821',
    email: null,
    contact: null,
    state: '1',
    wrongNum: null,
    parentid: null,
    positionId: null,
    positionLevel: null,
    expireDate: null,
    orgName: '凯歌分理处',
    effDt: '2020-01-12',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965821',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2020-01-12'
  },
  {
    id: '402881ed6f63d932016f63dc85940002',
    createTime: '2020-01-02 09:26:34',
    updateTime: '2020-01-02 09:26:34',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: '9999999',
    realName: '99',
    companyName: null,
    type: '01',
    passWord: '96e79218965eb72c92a549dd5a330112',
    idCard: null,
    orgId: '965010',
    email: null,
    contact: null,
    state: '1',
    wrongNum: null,
    parentid: null,
    positionId: '1',
    positionLevel: null,
    expireDate: null,
    orgName: '总行营业部',
    effDt: '2020-01-02',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965010',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2020-01-02'
  },
  {
    id: '402881ed6d5bfc80016d5c168de0003c',
    createTime: '2019-09-23 11:07:25',
    updateTime: '2019-09-23 11:46:11',
    createUserName: 'admin',
    updateUserName: '961000G',
    userName: '961000G  ',
    realName: '总行虚拟柜员',
    companyName: null,
    type: '01',
    passWord: '96e79218965eb72c92a549dd5a330112',
    idCard: null,
    orgId: '961000',
    email: null,
    contact: null,
    state: '1',
    wrongNum: null,
    parentid: null,
    positionId: null,
    positionLevel: null,
    expireDate: null,
    orgName: '总行虚拟机构',
    effDt: '2019-09-17',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '961000',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2019-09-17'
  },
  {
    id: '4028812d66f1da6f0166f1f0ddaa00e0',
    createTime: '2018-11-08 14:09:46',
    updateTime: '2018-11-08 14:12:38',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: 'R123456',
    realName: '测试用户',
    companyName: null,
    type: '01',
    passWord: '96e79218965eb72c92a549dd5a330112',
    idCard: null,
    orgId: '965010',
    email: null,
    contact: null,
    state: '1',
    wrongNum: null,
    parentid: null,
    positionId: '1',
    positionLevel: null,
    expireDate: null,
    orgName: '总行营业部',
    effDt: '2018-11-30',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965010',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2018-11-30'
  },
  {
    id: '9650067',
    createTime: '2018-11-08 13:38:04',
    updateTime: '2018-11-08 13:51:40',
    createUserName: 'admin',
    updateUserName: 'admin',
    userName: '9650067',
    realName: '郑宁智',
    companyName: null,
    type: null,
    passWord: '96e79218965eb72c92a549dd5a330112',
    idCard: null,
    orgId: '965010',
    email: null,
    contact: null,
    state: '1',
    wrongNum: null,
    parentid: null,
    positionId: null,
    positionLevel: null,
    expireDate: null,
    orgName: '总行营业部',
    effDt: '2018-01-01',
    endDt: '2099-12-31',
    oldType: null,
    oldOrgId: '965010',
    oldState: null,
    roleId: null,
    oldEndDt: null,
    oldEffDt: '2018-01-01'
  }
];

window.Vue.component('h-icon', {
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  template: `<i class="iconfont" :class="\`icon-\${icon}\`"></i>`
});

window.Vue.component('h-options', {
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  template: `
    <div class="h-options">
      <p>
        <el-tag v-for="(option, i) in options" :key="option.value" closable @close="options.splice(i, 1)">
          {{ option.label }}
          【{{ option.value }}】
        </el-tag>
      </p>
      <el-button size="small" icon="el-icon-plus">新增选项</el-button>
      <p>
        <el-button size="small" icon="el-icon-plus" @click="pushRandomOptions">随便来几个选项</el-button>
      </p>
    </div>
  `,
  methods: {
    pushRandomOptions () {
      let options = [
        { label: '臭豆腐', value: 1 },
        { label: '腐乳', value: 2 },
        { label: '柠檬', value: 3 }
      ];
      this.options.push(...options);
    }
  }
});

const defaultFiled = {
  title: '',
  key: '',
  type: 'input',
  hasSearch: false,
  hasDialog: false,
  searchTitle: '',
  searchKey: '',
  searchType: '',
  dialogTitle: '',
  dialogKey: '',
  dialogType: ''
};

const copy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const fieldOptions = [
  { value: 'input', label: '输入框' },
  { value: 'select', label: '选择框' },
  { value: 'input-number', label: '数字输入框' },
  { value: 'checkbox-group', label: '选择框' },
  { value: 'radio-group', label: '单选框' },
  { value: 'date', label: '日期' },
  { value: 'daterange', label: '日期组' },
  { value: 'cascader', label: '级联框' },
  { value: 'switch', label: '开关' },
  { value: 'slider', label: '滑块' },
];

const getFiledOption = () => {
  return fieldOptions.map(option => {
    return {
      value: option.value,
      text: option.label + ' ' + option.value
    };
  });
};

window.Vue.component('h-form', {
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      formList: [
        {
          title: '标题(title)',
          key: 'title',
          type: 'input',
          props: {
            placeholder: '你也许需要一个标题'
          }
        },
        {
          title: 'key',
          key: 'key',
          type: 'input',
          props: {
            placeholder: '请输入 key'
          }
        },
        {
          title: '类型(type)',
          key: 'type',
          type: 'select',
          options: getFiledOption(),
          props: {
            placeholder: '请选择类型'
          }
        },
        {
          title: '选项(options)',
          key: 'options',
          type: 'input',
          props: {
            type: 'textarea',
            placeholder: 'label,value\nlabel2,value2'
          }
        },
        {
          title: '',
          key: 'hasSearch',
          type: 'checkbox',
          text: '是否需要查询'
        },
        {
          render: (h) => {
            return h('div', { class: 'form-dividder' }, '要补充查询信息吗？');
          },
          isShow: (form) => {
            return form.hasSearch;
          }
        },
        {
          title: '查询标题',
          key: 'searchTitle',
          type: 'input',
          props: {
            placeholder: '跟随父级'
          },
          isShow: (form) => {
            return form.hasSearch;
          }
        },
        {
          title: '查询 key',
          key: 'searchKey',
          type: 'input',
          props: {
            placeholder: '跟随父级'
          },
          isShow: (form) => {
            return form.hasSearch;
          }
        },
        {
          title: '查询类型',
          key: 'searchType',
          type: 'select',
          options: getFiledOption(),
          props: {
            placeholder: '跟随父级'
          },
          isShow: (form) => {
            return form.hasSearch;
          }
        },
        {
          title: '',
          key: 'hasDialog',
          type: 'checkbox',
          text: '是否需要弹窗'
        },
        {
          render: (h) => {
            return h('div', { class: 'form-dividder' }, '要补充弹窗信息吗？');
          },
          isShow: (form) => {
            return form.hasDialog;
          }
        },
        {
          title: '标题',
          key: 'dialogTitle',
          type: 'input',
          props: {
            placeholder: '跟随父级'
          },
          isShow: (form) => {
            return form.hasDialog;
          }
        },
        {
          title: 'key',
          key: 'dialogKey',
          type: 'input',
          props: {
            placeholder: '跟随父级'
          },
          isShow: (form) => {
            return form.hasDialog;
          }
        },
        {
          title: '类型',
          key: 'dialogType',
          type: 'select',
          options: getFiledOption(),
          props: {
            placeholder: '跟随父级'
          },
          isShow: (form) => {
            return form.hasDialog;
          }
        }
      ]
    };
  },
  template: `<iview-form ref="form" lib="element" :label-width="120" :formList="formList" @submit="handleSubmit" />`,
  methods: {
    handleSubmit (form) {
      let submitForm = {};
      if (form.title) {
        submitForm.title = form.title;
      }
      if (form.key) {
        submitForm.key = form.key;
      }
      if (form.type) {
        submitForm.type = form.type;
      }
      if (form.hasSearch) {
        submitForm.search = {};
        submitForm.search.title = form.title;
      }
      submitForm.options = form.options.split('\n').map(item => {
        let option = item.split(',');
        return {
          label: (option[0] || '').trim(),
          value: (option[1] || '').trim()
        };
      });
      this.fields[this.index].pop = false;
      this.$refs.form.reset();
      this.fields.splice(this.index, 0, submitForm);
      this.$nextTick(() => {
        this.fields[this.index].pop = true;
      });
    }
  }
});

window.Vue.component('h-confirm', {
  props: {
    title: String
  },
  data () {
    return {
      visible: false
    };
  },
  template: `
  <el-popover
    placement="top"
    width="160"
    v-model="visible">
    <p class="confirm-title"><i class="el-icon-info" style="color: red;"></i> {{ title }}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false">别</el-button>
      <el-button type="danger" size="mini" @click="handleConfirm">是的</el-button>
    </div>
    <slot slot="reference"></slot>
  </el-popover>
  `,
  methods: {
    handleConfirm () {
      this.visible = false;
      this.$emit('confirm');
    }
  }
});

let Main = {
  data() {
    return {
      msg: 'hello',
      fields,
      tableData
    };
  },
  filters: {},
  computed: {
    searchFields () {
      return this.fields.filter(item => item.search).map(item => {
        let field = {
          ...item,
          ...item.search
        };
        if (field.type === 'org') {
          field.type = 'cascader';
        }
        return field;
      });
    }
  },
  mounted () {
  },
  methods: {
    handleDelete (i) {
      this.fields.splice(i, 1);
    },
    getPlaceholder (field) {
      let select = ['select', 'org', 'cascader', 'date', 'daterange', 'datetimerange'].includes(field.type) ? '选择' : '输入';
      return `请${select}${field.title}`;
    }
  }
};
new window.Vue(Main).$mount('#app');
