let LayoutBg = {
  name: 'layout-bg',
  template: getLayoutBGTemplate(),
  data () {
    return {
      maxSize: 10,
      colors: ['#fff', '#000'],
      points: []
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      let $canvas = this.$refs.canvas;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.getRandom = window.util.getRandom;
      this.getRandomFloor = window.util.getRandomFloor;
      $canvas.width = this.width;
      $canvas.height = this.height;
      this.ctx = $canvas.getContext('2d');
      this.loopDraw();
    },
    createPoint () {
      if (this.points.length < this.maxSize) {
        this.points.push({
          x: this.width,
          y: this.height,
          xa: -this.getRandom(1, 5),
          ya: -this.getRandom(0, 3),
          size: Math.floor(Math.random() * 3) + 2,
          color: this.colors[this.getRandomFloor(0, 1)]
        });
      }
    },
    clearPoint () {
      let { points, width, height } = this;
      for (let i = 0; i < points.length; i++) {
        let point = points[i];
        if (point.x < 0 || point.y < 0 ) {
          points.splice(i, 1);
          i -= 1;
        }
      }
    },
    loopDraw () {
      requestAnimationFrame(() => {
        this.clearPoint();
        this.createPoint();
        this.draw();
        this.loopDraw();
      });
    },
    draw () {
      let { points, ctx, width, height } = this;
      ctx.clearRect(0, 0, width, height);
      points.forEach(point => {
        point.x += point.xa;
        point.y += point.ya;
        ctx.fillStyle = point.color;
        ctx.fillRect(point.x, point.y, point.size, point.size);
      });
    }
  }
};

window.Vue.component(LayoutBg.name, LayoutBg);

function getLayoutBGTemplate() {
  return /*html*/ `
<div ref="bg" class="layout-bg">
  <canvas ref="canvas"></canvas>
</div>
  `;
}
