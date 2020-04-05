let Main = {
  data() {
    return {};
  },
  methods: {
    handleSideSelect(type) {
      switch (type) {
        case 'fight':
          this.$refs.grid.show();
          break;
        case 'preview':
          this.$refs.preview.show();
          break;
      }
    },
    showSide() {
      this.$refs.side.show();
    }
  }
};

window.app = new window.Vue(Main).$mount('#app');
