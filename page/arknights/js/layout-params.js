let LayoutParams = {
  name: 'layout-params',
  template: getLayoutParamsTemplate(),
  data() {
    return {
      visible: false,
      value: '',
      data: [],
      search: '',
      keyword: '',
      exampleData: `{"sex":{"1":"男","2":"女"}}`
    };
  },
  computed: {
    filterList() {
      let keyword = this.keyword;
      let data = this.data;
      if (!keyword.trim()) {
        return data;
      } else {
        return data.filter(item => item.title.includes(keyword) || item.options.some(option => option.label.includes(keyword) || option.value.includes(keyword)));
      }
    }
  },
  methods: {
    init() {
      let params = localStorage.getItem('params');
      if (params) {
        this.value = params;
      }
    },
    show() {
      this.init();
      this.visible = true;
      this.$nextTick(() => {
        this.$refs.params.focus();
      });
    },
    hide() {
      this.visible = false;
      this.$emit('hide', true);
    },
    handleBack() {
      this.$refs.back.handleClick();
    },
    addExampleData() {
      this.value = this.exampleData;
    },
    handleTransfer() {
      try {
        let data = JSON.parse(this.value);
        if (data.obj) {
          data = data.obj;
        }
        let list = [];
        for (let key in data) {
          let options = [];
          for (let op in data[key]) {
            options.push({ value: op, label: data[key][op] });
          }
          list.push({
            title: key,
            options
          });
        }
        this.data = list;
        localStorage.setItem('params', this.value);
      } catch {}
    },
    handleEnter() {
      this.keyword = this.search;
    }
  }
};

window.Vue.component(LayoutParams.name, LayoutParams);

function getLayoutParamsTemplate() {
  return /*html*/ `
<div ref="params" class="layout-params" v-if="visible" @keydown.stop.escape="handleBack" tabindex="0">
  <a-back @click="hide" ref="back"></a-back>
  <div class="layout-params-container">
    <div class="layout-params-side">
      <p class="layout-params-header">
        <span>请在此处添加上参数枚举：</span>
        <span class="btns">
          <a-button @click="value = ''">清空</a-button>
          <a-button @click="addExampleData">填充测试数据</a-button>
        </span>
      </p>
      <textarea v-model="value"></textarea>
    </div>
    <a-button class="layout-params-btn" @click="handleTransfer">
      <a-icon icon="transfer" :size="20"></a-icon>
    </a-button>
    <div class="layout-params-main">
      <div class="layout-params-header">
        <input type="search" v-model="search" @keydown.stop.enter="handleEnter">
        <a-icon icon="search"></a-icon>
      </div>
      <div class="layout-params-tag-pane">
        <div class="layout-params-tag" v-for="item in filterList">
          <h3 class="tag-title">{{ item.title }}</h3>
          <ul class="tag-select">
            <li class="tag-options" v-for="option in item.options" :key="option.value">{{ option.value }}: {{ option.label }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}
