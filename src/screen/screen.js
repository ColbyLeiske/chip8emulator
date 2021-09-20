export default class Screen {
  scale;
  color;
  width;
  height;

  _canvas;
  _ctx;

  constructor({
    canvas,
    scale = 1,
    color = 'rgb(255,255,255)',
    backgroundColor = 'rgb(0,0,0)',
    width = 64,
    height = 32,
  }) {
    if (!canvas) throw new Error('Cannot instantiate Screen without canvas in options!');
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');

    this.scale = scale;
    this.color = color;
    this.width = width;
    this.height = height;

    this._resizeCanvas(this.width * this.scale, this.height * this.scale);
    this._fillBackground(backgroundColor);
  }

  _resizeCanvas(width, height) {
    this._canvas.width = width;
    this._canvas.height = height;
  }

  _fillBackground(color) {
    this._ctx.fillStyle = color;
    this._ctx.fillRect(0, 0, this.width * this.scale, this.height * this.scale);
  }

  clear(color = 'rgb(0,0,0)') {
    this._fillBackground(color);
  }

  draw(tiles) {
    this.clear();
    this._ctx.fillStyle = this.color;
    tiles.forEach((shouldDisplay, i) => {
      if (!shouldDisplay) return;
      const x = i % this.width;
      const y = Math.floor((i - (i % this.width)) / this.width);
      this._ctx.fillRect(x * this.scale, y * this.scale, 1 * this.scale, 1 * this.scale);
    });
  }
}
