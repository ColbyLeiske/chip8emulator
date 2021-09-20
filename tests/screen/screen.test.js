import Screen from 'src/screen/screen.js';

describe('Screen', () => {
  let canvas;
  beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.id = 'screen';
  });

  it('should set the canvas size on instantiation', () => {
    new Screen({ canvas, width: 64, height: 32 });
    expect(canvas.width).toBe(64);
    expect(canvas.height).toBe(32);
  });

  describe('_getCoordinateFromIndex', () => {
    const testCases =
      // width, height, index, expected [x,y]
      [
        [64, 32, 0, [0, 0]],
        [64, 32, 64, [0, 1]],
        [64, 32, 32, [32, 0]],
      ];
    test.each(testCases)(
      ('given width: %d, height: %d and index: %d should return %p'),
      (width, height, index, expectedCoordinates) => {
        const s = new Screen({ canvas, width, height });
        expect(s._getCoordinateFromIndex(index)).toStrictEqual(expectedCoordinates);
      });
  });
});