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
    options: [],
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
        //     <yt-ctrl-item /* auth={this.prefix + 'user-update'} */ type="text" onClick={ () => this.handleUpdate(row) }>修改</yt-ctrl-item>
        //     <yt-ctrl-item /* auth={this.prefix + 'user-role'} */ type="text" onClick={ () => this.handleRoleEdit(row) }>分配角色</yt-ctrl-item>
        //     <yt-ctrl-item confirm primary={ row.realName + `(重置后密码: ${this.config.default_password})` } tip="重置" type="text" onClick={ () => this.handleReset(row) }>重置密码</yt-ctrl-item>
        //     <yt-ctrl-item /* auth={this.prefix + 'user-delete'} */ confirm primary={ row.realName } type="text" onClick={ () => this.handleRowDelete(row) }>删除</yt-ctrl-item>
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

let Main = {
  data() {
    return {
      msg: 'hello',
      fields,
      tableData
    };
  },
  filters: {
    placeholder (field) {
      let select = ['select', 'org', 'cascader', 'date', 'daterange', 'datetimerange'].includes(field.type) ? '选择' : '输入';
      return `请${select}${field.title}`;
    }
  },
  computed: {
    searchFileds () {
      return this.fields.filter(item => item.search);
    }
  }
};
new window.Vue(Main).$mount('#app');

const prefix = 'http://122.112.221.198:8081/tlmp';
const ajax = axios.create({
  timeout: 15000 // 请求超时时间
});
const transformURL = (config) => {
  config.url = prefix + config.url;
  return config;
};
const transformPost = (config) => {
  if (config.data && config.data.transform) {
      delete config.data.transform;
      config.transformRequest = [
          function (data) {
              let ret = '';
              for (const it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
              }
              return ret;
          }
      ];
  }
  return config;
};
const addToken = (config) => {
    // whiteList 不加入 token
    const whiteList = [
        '/j_spring_security_check'
    ];
    if (whiteList.some(url => config.url.includes(url))) {
        return config;
    }
    // 添加token
    const token = 'Yatop eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ5YXRvcCIsInVzZXJOYW1lIjoidmlld3dlaXd1IiwicmVhbE5hbWUiOiJ3dyIsInRpbWVzdGFtcCI6MTU4NTA0MTM0NTUyMiwibG9jYXRpb24iOiJNVGd6TGpFeU9TNHhOVE11TmpjPSIsIm9yZ0NvZGUiOiI3Nzc3Nzc3NzciLCJvcmdOYW1lIjoiKirpk7booYwifQ.Qsa40A0MNjmFw64-BE28DBeSHRkUteZMIMj0TMrs4tS7sPPWNj-OCNdHwvKf9C_icIEY6oV3QjACZ1--F06jYw';
    if (token && !config.headers.Authorization) {
        config.headers.Authorization = `${token}`;
    }

    return config;
};
// 请求拦截处理
ajax.interceptors.request.use(config => {
    transformPost(config);
    transformURL(config);
    addToken(config);
    return config;
}, error => Promise.reject(error));

ajax.get('/sysUser/listByPage');

