let LayoutSide = {
  name: 'layout-side',
  template: getLayoutSideTemplate(),
};

window.Vue.component(LayoutSide.name, LayoutSide);

function getLayoutSideTemplate() {
  return /*html*/ `
<div class="layout-side">
  <div class="layout-side-content">
    <div class="layout-side-time">2019/05/03 12:22</div>
    <div class="layout-side-row">
      <div class="layout-side-item item-main">
        <p class="item-title">作战</p>
        <a-icon icon="fight" />
      </div>
    </div>
    <div class="layout-side-row row-sub">
      <div class="layout-side-item">
        <p class="item-title">编队</p>
        <a-icon icon="fight" />
      </div>
      <div class="layout-side-item">
        <p class="item-title">干员</p>
        <a-icon icon="task" />
      </div>
      <div class="layout-side-black-gap"></div>
    </div>
    <div class="layout-side-row row-primary">
      <div class="layout-side-item item-blue item-title-end">
        <p class="item-title">采购中心</p>
        <a-icon icon="material" />
      </div>
      <div class="layout-side-item item-blue item-multi">
        <p class="item-name">招募</p>
        <div class="item-multi-content">
          <div class="item-multi-item">
            <p class="item-multi-title">公开招募</p>
            <a-icon icon="material" />
          </div>
          <div class="item-multi-item">
            <p class="item-multi-title">干员寻访</p>
            <a-icon icon="material" />
          </div>
        </div>
      </div>
    </div>
    <div class="layout-side-row row-end">
      <div class="layout-side-item">
        <p class="item-title">任务</p>
        <a-icon icon="task" />
      </div>
      <div class="layout-side-item">
        <p class="item-title">基建</p>
        <a-icon icon="task" />
      </div>
      <div class="layout-side-item item-end">
        <p class="item-title">仓库</p>
        <a-icon icon="material" />
      </div>
    </div>
  </div>  
</div>
  `;
}
