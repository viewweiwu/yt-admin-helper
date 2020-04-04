let ArknightsRadio = {
  name: 'a-radio',
  template: getArknightsRadioTemplate(),
  props: {
    value: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    }
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

window.Vue.component(ArknightsRadio.name, ArknightsRadio);

function getArknightsRadioTemplate() {
  return /*html*/ `
<span class="a-radio" tabindex="0">
  <label v-for="option in options" :key="option.value" :class="{ active: value === option.value }">
    <input v-model="option" type="radio" :value="option.value" v-model="currValue" />
    <span class="a-radio-label">{{ option.label }}<slot :option="option"></slot></span>
  </label>
</span>
  `;
}
