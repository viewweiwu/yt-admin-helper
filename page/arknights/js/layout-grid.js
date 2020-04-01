let LayoutGrid = {
  name: 'layout-grid',
  template: getLayoutGridTemplate()
};

window.Vue.component(LayoutGrid.name, LayoutGrid);

function getLayoutGridTemplate() {
  return `
<div class="layout-grid" @scroll.prevent>
<div class="layout-grid-content">
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
  <div class="layout-grid-item">grid</div>
</div>
</div>
  `;
}
