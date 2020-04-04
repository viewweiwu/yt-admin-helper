let LayoutGrid = {
  name: 'layout-grid',
  template: getLayoutGridTemplate(),
  data() {
    return {
      fields: []
    };
  },
  methods: {
    handleScroll(e) {
      let target = this.$refs.main;
      target.scrollTo({
        left: target.scrollLeft + e.deltaY * 10,
        behavior: 'smooth'
      });
    },
    handleAdd(i) {
      this.$refs.form.add().then((field) => {
        if (i !== undefined) {
          this.fields.splice(i + 1, 0, field);
        } else {
          this.fields.push(field);
        }
        this.$refs.add.focus();
      });
    },
    handleUpdate(field, i) {
      this.$refs.form.update(field).then((field) => {
        this.fields.splice(i, 1, field);
        this.$refs.field[i].focus();
      });
    }
  }
};

window.Vue.component(LayoutGrid.name, LayoutGrid);

function getLayoutGridTemplate() {
  return /*html*/ `
<div class="layout-grid" ref="main" @mousewheel.prevent="handleScroll">
  <layout-form ref="form"></layout-form>
  <div class="layout-grid-content">
    <div class="layout-grid-line"></div>
    <div class="layout-grid-item" v-for="(field, i) in fields" tabIndex="0" ref="field" @keydown.enter="handleUpdate(field, i)">
      <div class="item-symbol"></div>
      <div class="item-content">
        <p>{{ field.title }}</p>
      </div>
    </div>
    <div class="layout-grid-item cursor" @click="handleAdd()" tabIndex="0" ref="add" @keydown.enter="handleAdd()">
      <div class="item-symbol"></div>
      <div class="item-content">
        <a-icon icon="plus"></a-icon>
      </div>
    </div>
  </div>
  <div class="layout-grid-ctrl">
    <div class="ctrl-item" v-for="(field, i) in fields" @click="handleAdd(i)">
      <button class="ctrl-item-btn">
        <a-icon icon="plus"></a-icon>
      </button>
    </div>
  </div>
</div>
  `;
}
