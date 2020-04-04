let LayoutForm = {
  name: 'layout-form',
  template: getLayoutFormTemplate(),
  data() {
    return {
      visible: false,
      active: 0,
      type: 'normal',
      form: this.getForm(),
      tabs: [
        { label: '基础配置', icon: 'pen' },
        { label: '表格扩展', icon: 'table' },
        { label: '查询扩展', icon: 'filter' },
        { label: '弹窗扩展', icon: 'card' }
      ]
    };
  },
  methods: {
    getForm() {
      return {
        title: '',
        key: '',
        type: '',
        options: [],
        optionsKey: '',
        hasTableExtend: true,
        table: {
          title: '',
          type: '',
          key: ''
        },
        hasSearchExtend: false,
        search: {
          title: '',
          type: '',
          key: ''
        },
        hasDialogExtend: false,
        dialog: {
          title: '',
          type: '',
          key: ''
        }
      };
    },
    add() {
      return new Promise((resolve) => {
        this.resolve = resolve;
        this.form = this.getForm();
        this.visible = true;
        this.mode === 'add';
        this.$nextTick(() => {
          this.$refs.title.focus();
        });
      });
    },
    update(field) {
      return new Promise((resolve) => {
        this.resolve = resolve;
        this.form = window.util.copy(field);
        this.visible = true;
        this.mode === 'update';
        this.$nextTick(() => {
          this.$refs.title.focus();
        });
      });
    },
    handleScroll(e) {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let offsetHeight = e.target.offsetHeight / 2 - 1;
        let scrollTop = e.target.scrollTop;
        let active = Math.floor(scrollTop / offsetHeight);
        console.log(active, offsetHeight, scrollTop);

        this.active = active;
      }, 100);
    },
    handleKeydow(e) {
      if (e.key === 'Enter' && e.ctrlKey) {
        this.handleConfirm();
      }
    },
    scrollMain(i) {
      let $main = this.$refs.main;
      this.active = i;
      $main.scrollBy({
        top: ($main.offsetHeight / 2) * i - $main.scrollTop,
        behavior: 'smooth'
      });
    },
    handleConfirm() {
      this.visible = false;
      this.resolve(this.form);
    }
  }
};

window.Vue.component(LayoutForm.name, LayoutForm);

function getLayoutFormTemplate() {
  return /*html*/ `
<div class="layout-form" v-if="visible" @keydown="handleKeydow">
  <div class="layout-form-header">
    <button class="btn-back"><</button>
    <div class="header-title">
      <a-icon icon="pen"></a-icon>
      <span class="gap">新增一列</span>
    </div>
  </div>
  <div class="layout-form-container">
    <div class="layout-form-tab">
      <div
        v-for="(tab, i) in tabs"
        :key="tab.label"
        class="btn tab-item"
        :class="{ active: i === active }"
        @click="scrollMain(i)"
      >
        <a-icon :icon="tab.icon"></a-icon>
        <span class="gap">{{ tab.label }}</span>
      </div>
    </div>
    <div ref="main" class="layout-form-main" @scroll="handleScroll">
      <div class="form-wrap">
        <h3 class="form-title">基础配置</h3>
        <div class="form-item">
          <label class="item-label">title</label>
          <input class="item-content" placeholder="请输入 title" v-model="form.title" ref="title" />
          <span class="item-tip">标题</span>
        </div>
        <div class="form-item">
          <label class="item-label">key</label>
          <input class="item-content" placeholder="请输入 key" v-model="form.key" />
          <span class="item-tip">key</span>
        </div>
        <div class="form-item">
          <label class="item-label">type</label>
          <input class="item-content" placeholder="请选择 type" v-model="form.type" />
          <span class="item-tip">标签的类型，这个属性不会应用到 table 上</span>
        </div>
        <div class="form-item">
          <label class="item-label">options</label>
          <input class="item-content" placeholder="请选择类型" v-model="form.options" />
          <span class="item-tip">此选项在表格、查询、弹窗三者都有用，在表格会跟 value 匹配展示 label，在查询和弹窗则展示下拉。</span>
        </div>
        <div class="form-item">
          <label class="item-label">optionsKey</label>
          <input class="item-content" placeholder="请选择需要的类型" v-model="form.optionsKey" />
          <span class="item-tip">可以从 systemParams 取 key 值</span>
        </div>
      </div>
      <div class="form-wrap">
        <h3 class="form-title">表格扩展 table</h3>
        <div class="form-item">
          <label class="item-label">show</label>
          <span class="item-content">
            <a-switch v-model="form.hasTableExtend"></a-switch>
          </span>
          <span class="item-tip">是否在表格表格展示这一列？</span>
        </div>
        <div class="form-item">
          <label class="item-label">title</label>
          <input class="item-content" placeholder="请输入 title" v-model="form.table.title" />
          <span class="item-tip">标题</span>
        </div>
        <div class="form-item">
          <label class="item-label">key</label>
          <input class="item-content" placeholder="请输入 key" v-model="form.table.key" />
          <span class="item-tip">key</span>
        </div>
        <div class="form-item">
          <label class="item-label">type</label>
          <input class="item-content" placeholder="请选择 type" v-model="form.table.type" />
          <span class="item-tip">标签的类型，这个属性不会应用到 table 上</span>
        </div>
      </div>
      <div class="form-wrap">
        <h3 class="form-title">查询扩展 search</h3>
        <div class="form-item">
          <label class="item-label">show</label>
          <span class="item-content">
            <a-switch v-model="form.hasSearchExtend"></a-switch>
          </span>
          <span class="item-tip">是否需要在顶部开启搜索？</span>
        </div>
        <div class="form-item">
          <label class="item-label">title</label>
          <input class="item-content" placeholder="请输入 title" v-model="form.search.title" />
          <span class="item-tip">标题，不填写继承基础配置。</span>
        </div>
        <div class="form-item">
          <label class="item-label">key</label>
          <input class="item-content" placeholder="请输入 key" v-model="form.search.key" />
          <span class="item-tip">key，不填写继承基础配置。</span>
        </div>
        <div class="form-item">
          <label class="item-label">type</label>
          <input class="item-content" placeholder="请选择 type" v-model="form.search.type" />
          <span class="item-tip">类型，不填写继承基础配置。</span>
        </div>
      </div>
      <div class="form-wrap">
        <h3 class="form-title">弹窗扩展 dialog</h3>
        <div class="form-item">
          <label class="item-label">show</label>
          <span class="item-content">
            <a-switch v-model="form.hasDialogExtend"></a-switch>
          </span>
          <span class="item-tip">是否需要在顶部开启搜索？</span>
        </div>
        <div class="form-item">
          <label class="item-label">title</label>
          <input class="item-content" placeholder="请输入 title" v-model="form.dialog.title" />
          <span class="item-tip">标题，不填写继承基础配置。</span>
        </div>
        <div class="form-item">
          <label class="item-label">key</label>
          <input class="item-content" placeholder="请输入 key" v-model="form.dialog.key" />
          <span class="item-tip">key，不填写继承基础配置。</span>
        </div>
        <div class="form-item">
          <label class="item-label">type</label>
          <input class="item-content" placeholder="请选择 type" v-model="form.dialog.type" />
          <span class="item-tip">类型，不填写继承基础配置。</span>
        </div>
      </div>
      <div class="form-wrap">
      </div>
    </div>
  </div>
  <div class="layout-form-footer">
    <button class="btn active" @click="handleConfirm">
      <a-icon icon="done"></a-icon>
      <span class="gap">完成配置</span>
    </button>
  </div>
</div>
  `;
}
