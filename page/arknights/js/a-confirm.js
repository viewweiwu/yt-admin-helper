let ArknightsConfirm = {
  name: 'a-confirm',
  template: getArknightsConfirmTemplate(),
  data() {
    return {
      info: '即将返回登录界面，是否继续？',
      visible: false
    };
  },
  methods: {
    open(info) {
      return new Promise((resolve, reject) => {
        window.soundList.popup.play();
        this.info = info;
        this.visible = true;
        this.resolve = resolve;
        this.reject = reject;
        this.$nextTick(() => {
          this.$refs.check.focus();
        });
      });
    },
    handleCancel() {
      this.visible = false;
      window.soundList.back.play();
      this.reject();
    },
    handleCheck() {
      this.visible = false;
      window.soundList.confirm.play();
      this.resolve();
    }
  }
};

window.Vue.component(ArknightsConfirm.name, ArknightsConfirm);

window.$confirm = (info) => {
  return window.app.$refs.confirm.open(info);
};

function getArknightsConfirmTemplate() {
  return /*html*/ `
<div class="a-confirm" ref="confirm" @keydown.escape="handleCancel" v-if="visible">
  <div class="a-confirm-content">
    <div class="a-confirm-body">
      <span>{{ info }}</span>
    </div>
    <div class="a-confirm-footer">
      <button class="a-confirm-cancel" @click="handleCancel">
        <a-icon icon="close"></a-icon>
      </button>
      <button class="a-confirm-check" ref="check" @click="handleCheck">
        <a-icon icon="check"></a-icon>
      </button>
    </div>
  </div>
</div>
  `;
}
