export default class CPU {
  // reserved for interpreter 
  reservedMemory = 0x200;

  // 4k of RAM
  memorySize = 4096;
  memory;

  // 16 general purpose 8-bit registers - Vx where x is 0-F (VF is reserved for interpreter)
  registers = new Uint8Array(0x10);

  // 16 bit register called I - generally used to store memory addresses so rightmost 12bits are used
  indexRegister = 0x0;

  // program counter
  pc = 0x200;

  // callstack
  stack = new Uint16Array(0x10);

  // stack pointer - 8 bit
  stackPointer = 0x0;

  // delay timer WIP

  // sound timer WIP

  instructionsPerSecond;
  runtimeInterval;

  // Chip8 emulator orchestrator (chip8.js).
  // This is our way to communicate with a screen and peripherals without coupling
  _emulator;

  constructor(rom, { emulator, instructionsPerSecond }) {
    const interpreterMemory = new Uint8Array(this.reservedMemory).fill(0x0);
    const romMemory = new Uint8Array(rom);
    const padding = new Uint8Array(this.memorySize - interpreterMemory.length - romMemory.length).fill(0x0);

    this.memory = [...interpreterMemory, ...romMemory, ...padding];
    this.instructionsPerSecond = instructionsPerSecond;
    this._emulator = emulator;
  }

  start() {
    this.runtimeInterval = setInterval(this.executeCycle, 1000 / this.instructionsPerSecond);
  }

  executeCycle() {
    //fetch opcode from PC

    //determine what opcode it is

    //execute opcode

    //profit ???
  }

  stop() {
    clearInterval(this.runtimeInterval);
  }

  _triggerRender(changes) {
    // is this how I do renders? Tell the Chip8 object to force a render?
    this._emulator.applyDrawChanges(changes);
  }
}
