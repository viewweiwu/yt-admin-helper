let ArknightsSwitch = {
  name: 'a-switch',
  template: getArknightsSwitchTemplate(),
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleEnter() {
      window.soundList.click.play();
      this.$emit('input', !this.value);
    }
  }
};

window.Vue.component(ArknightsSwitch.name, ArknightsSwitch);

function getArknightsSwitchTemplate() {
  return /*html*/ `
<span
  class="a-switch"
  :class="{ open: value }"
  tabindex="0"
  @keydown.space.prevent="handleEnter"
  @keydown.enter.prevent="handleEnter"
  @click="handleEnter"
>
  <input type="checkbox" tabindex="-1" :value="value" />
  <span class="a-switch-label">
    <span class="label-open">开启</span>
    <span class="label-off">关闭</span>
  </span>
  <span class="a-switch-core"></span>
</span>
  `;
}
