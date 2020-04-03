
let LayoutForm = {
  name: 'layout-form',
  template: getLayoutFormTemplate()
};

window.Vue.component(LayoutForm.name, LayoutForm);

function getLayoutFormTemplate() {
  return `
<div class="layout-form">
  <div class="layout-form-header">
    <button class="btn-back"><</button>
    <div class="header-title">
      <a-icon icon="pen"></a-icon>
      <span class="gap">新增</span>
    </div>
  </div>
  <div class="layout-form-container">
    <div class="layout-form-tab">
      <div class="btn tab-item">
        <a-icon icon="pen"></a-icon>
        <span class="gap">基础配置</span>
      </div>
      <div class="btn tab-item">
        <a-icon icon="filter"></a-icon>
        <span class="gap">查询扩展</span>
      </div>
      <div class="btn tab-item">
        <a-icon icon="window"></a-icon>
        <span class="gap">弹窗扩展</span>
      </div>
    </div>
    <div class="layout-form-main">
      <div class="form-item">
        <input placeholder />
      </div>
    </div>
  </div>
</div>
  `;
}
