import CPU from './cpu/cpu.js';
import Screen from './screen/screen.js';

export default class Chip8 {
  _screen;
  _cpu;

  constructor(rom, { screenOptions }) {
    this._screen = new Screen(screenOptions);
    this._cpu = new CPU(rom);
  }

  start() {
    // kick off CPU cycles and screen
    
  }
}