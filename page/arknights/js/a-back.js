let ArknightsBack = {
  name: 'a-back',
  template: getArknightsBackTemplate(),
  methods: {
    handleClick(e) {
      this.$emit('click', e);
      window.soundList.back.play();
    },
    focus() {
      this.$refs.btn.focus();
    }
  }
};

window.Vue.component(ArknightsBack.name, ArknightsBack);

function getArknightsBackTemplate() {
  return /*html*/ `
  <button ref="btn" class="btn-back" @click="handleClick">
    <a-icon icon="back"></a-icon>
  </button>
  `;
}
