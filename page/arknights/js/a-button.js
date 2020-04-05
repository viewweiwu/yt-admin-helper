let ArknightsButton = {
  name: 'a-button',
  template: getArknightsButtonTemplate(),
  methods: {
    handleClick(e) {
      this.$emit('click', e);
      window.soundList.click.play();
    }
  }
};

window.Vue.component(ArknightsButton.name, ArknightsButton);

function getArknightsButtonTemplate() {
  return /*html*/ `
<button class="btn" @click="handleClick"><slot></slot></button>
  `;
}
