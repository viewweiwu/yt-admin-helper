let LayoutFormSelect = {
  name: 'layout-form-select',
  template: getLayoutFormSelectTemplate(),
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: [
        { label: '普通类型', value: 'normal' },
        { label: '选额框', value: 'checkbox' },
        { label: '操作框', value: 'ctrl' }
      ]
    };
  },
  computed: {
    currValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    handleEnter() {
      this.$emit('input', !this.value);
    },
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};

window.Vue.component(LayoutFormSelect.name, LayoutFormSelect);

function getLayoutFormSelectTemplate() {
  return /*html*/ `
  <a-radio class="layout-form-select" :options="options" v-model="currValue">
    <template slot-scope="scope">
      <span>{{ scope.option.value }}</span>
    </template>
  </a-radio>
  `;
}
