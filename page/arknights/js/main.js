let Main = {
  data() {
    return {};
  },
  mounted() {
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
        case 'params':
          this.$refs.params.show();
          break;
      }
    },
    showSide() {
      this.$refs.side.show();
    }
  }
};

window.app = new window.Vue(Main).$mount('#app');
