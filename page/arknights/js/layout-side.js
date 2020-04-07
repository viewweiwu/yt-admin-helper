let LayoutSide = {
  name: 'layout-side',
  template: getLayoutSideTemplate(),
  data() {
    return {
      visible: true
    };
  },
  methods: {
    handleSelect(type) {
      this.hide();
      window.soundList.confirm.play();
      this.$emit('select', type);
    },
    hide() {
      this.visible = false;
    },
    show() {
      this.$refs.fight.focus();
      this.visible = true;
    }
  }
};

window.Vue.component(LayoutSide.name, LayoutSide);

function getLayoutSideTemplate() {
  return /*html*/ `
<div class="layout-side" :class="{ hide: !visible }">
  <div class="layout-side-content">
    <div class="layout-side-time">2019/05/03 12:22</div>
    <div class="layout-side-row">
      <div ref="fight" class="layout-side-item item-main" @click="handleSelect('fight')" tabindex="0" @keydown.self.enter="handleSelect('fight')">
        <p class="item-title">作战</p>
        <a-icon icon="fight" />
      </div>
    </div>
    <div class="layout-side-row row-sub">
      <div class="layout-side-item" tabindex="0">
        <p class="item-title">编队</p>
        <a-icon icon="fight" />
      </div>
      <div ref="preview" class="layout-side-item" @click="handleSelect('preview')" tabindex="0" @keydown.self.enter="handleSelect('preview')">
        <p class="item-title">预览</p>
        <a-icon icon="task" />
      </div>
      <div class="layout-side-black-gap"></div>
    </div>
    <div class="layout-side-row row-primary">
      <div class="layout-side-item item-blue item-title-end"  @click="handleSelect('params')" tabindex="0" @keydown.self.enter="handleSelect('params')">
        <p class="item-title">参数设置</p>
        <a-icon icon="setting" />
      </div>
      <div class="layout-side-item item-blue item-multi">
        <p class="item-name">招募</p>
        <div class="item-multi-content">
          <div class="item-multi-item" tabindex="0">
            <p class="item-multi-title">干员中心</p>
            <a-icon icon="material" />
          </div>
          <div class="item-multi-item" tabindex="0">
            <p class="item-multi-title">干员寻访</p>
            <a-icon icon="material" />
          </div>
        </div>
      </div>
    </div>
    <div class="layout-side-row row-end">
      <div class="layout-side-item" tabindex="0">
        <p class="item-title">生成代码</p>
        <a-icon icon="code" />
      </div>
      <div class="layout-side-item" tabindex="0">
        <p class="item-title">基建</p>
        <a-icon icon="task" />
      </div>
      <div class="layout-side-item item-end" tabindex="0">
        <p class="item-title">仓库</p>
        <a-icon icon="material" />
      </div>
    </div>
  </div>  
</div>
  `;
}
