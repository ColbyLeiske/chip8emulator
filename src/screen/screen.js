export default class Screen {
  scale = 1;
  width = 64;
  height = 32;
  color = 'rgb(255,255,255)';

  _canvas;
  _ctx;
  _tiles = [this.width * this.height];

  constructor({ canvas, scale, color, backgroundColor }) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');

    this.scale = scale;
    this.color = color;

    this._canvas.width = this.width * this.scale;
    this._canvas.height = this.height * this.scale;

    //setup background
    this._ctx.fillStyle = backgroundColor;
    this._ctx.fillRect(0, 0, this.width * this.scale, this.height * this.scale);
  }

  draw() {
    this._ctx.fillStyle = 'rgb(200, 0, 0)';
    this._ctx.fillRect(0, 0, 64 * this.scale, 64 * this.scale);
  }
}
