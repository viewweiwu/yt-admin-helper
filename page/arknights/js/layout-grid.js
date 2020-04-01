let LayoutGrid = {
  name: 'layout-grid',
  template: getLayoutGridTemplate()
};

window.Vue.component(LayoutGrid.name, LayoutGrid);

function getLayoutGridTemplate() {
  return `
<div class="layout-grid" @scroll.prevent>
  <div class="layout-grid-content">
    <div class="layout-grid-line"></div>
    <div class="layout-grid-item" v-for="item in 20">
      <div class="item-symbol"></div>
      <div class="item-content">
        input
      </div>
    </div>
  </div>
</div>
  `;
}
