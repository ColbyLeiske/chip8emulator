import CPU from './cpu/cpu.js';
import Screen from './screen/screen.js';

export default class Chip8 {
  _screen;
  _cpu;

  // Shared state between CPU and Screen
  _tiles = [this.width * this.height];

  constructor(rom, { screenOptions, cpuOptions }) {
    this._screen = new Screen(screenOptions);
    this._cpu = new CPU(rom, { ...cpuOptions, emulator: this });
  }

  start() {
    this._cpu.start();
    this._screen.clear();
  }

  stop() {
    this._cpu.stop();
  }

  // Called by the CPU in order to force a screen update
  applyDrawChanges() {
    // XOR with _tiles
    // update screen to reflect changes
    // potentially update carryover Vf register? (this should belong to CPU, not chip8)
  }
}