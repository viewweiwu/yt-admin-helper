let LayoutParams = {
  name: 'layout-params',
  template: getLayoutParamsTemplate(),
  data() {
    return {
      visible: false,
      value: '',
      data: []
    };
  },
  methods: {
    init () {
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
    handleBack () {
      this.$refs.back.handleClick();
    },
    handleTransfer () {
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
      <textarea v-model="value"></textarea>
    </div>
    <a-button class="layout-params-btn" @click="handleTransfer">
      <a-icon icon="transfer" :size="20"></a-icon>
    </a-button>
    <div class="layout-params-main">
      <div class="layout-params-tag" v-for="item in data">
        <h3 class="tag-title">{{ item.title }}</h3>
        <ul class="tag-select">
          <li class="tag-options" v-for="option in item.options" :key="option.value">{{ option.value }}: {{ option.label }}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `;
}
