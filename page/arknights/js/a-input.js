let ArknightsInput = {
  name: 'a-input',
  template: getArknightsInputTemplate(),
  props: {
    value: {
      type: String,
      default: ''
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
    focus() {
      this.$refs.input.focus();
    },
    handleClick(e) {
      this.$emit('click', e);
      window.soundList.back.play();
    },
    handleFocus() {
      window.soundList.click.play();
    }
  }
};

window.Vue.component(ArknightsInput.name, ArknightsInput);

function getArknightsInputTemplate() {
  return /*html*/ `
  <span class="a-input">
    <input ref="input" v-model="currValue" v-bind="$attrs" @focus="handleFocus" />
  </span>
  `;
}
