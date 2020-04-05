let ArknightsIcon = {
  name: 'a-icon',
  template: getArknightsIconTemplate(),
  props: {
    icon: {
      type: String
    },
    size: {
      type: [Number, String]
    },
    color: {
      type: String
    }
  },
  computed: {
    iconClass() {
      let icon = this.icon || '';
      let classList = ['a-icon'];
      if (icon.includes('el-icon')) {
        classList.push(icon);
      } else {
        classList.push('iconfont');
        classList.push('icon-' + icon);
      }
      return classList;
    },
    iconStyle() {
      let { size, color } = this;
      let style = {};
      if (size) {
        let fontSize = size;
        if (typeof size === 'number') {
          fontSize = size + 'px';
        } else {
          if (size.includes('sp')) {
            fontSize = parseInt(size) * 8 + 'px';
          } else {
            fontSize = size;
          }
        }
        style['font-size'] = fontSize;
      }
      if (color) {
        style['color'] = color;
      }
      return style;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};

window.Vue.component(ArknightsIcon.name, ArknightsIcon);

function getArknightsIconTemplate() {
  return /*html*/ `
<i
  v-bind="$attrs"
  :class="iconClass"
  :style="iconStyle"
  @click="handleClick"
/>
  `;
}
