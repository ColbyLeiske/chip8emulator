import Screen from 'src/screen/screen.js';

describe('Screen', () => {
  let canvas;
  beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.id = 'screen';
  });

  it('should set the canvas size on instantiation', () => {
    new Screen({canvas, width: 64, height: 32});
    expect(canvas.width).toBe(64);
    expect(canvas.height).toBe(32);
  });
});