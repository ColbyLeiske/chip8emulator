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

  _instructionsPerSecond;
  _runtimeInterval;

  // Chip8 emulator orchestrator (chip8.js).
  // This is our way to communicate with a screen and peripherals without coupling
  _emulator;

  constructor(rom, { emulator, instructionsPerSecond } = {}) {
    const interpreterMemory = new Uint8Array(this.reservedMemory).fill(0x0);
    const romMemory = new Uint8Array(rom);
    const padding = new Uint8Array(this.memorySize - interpreterMemory.length - romMemory.length).fill(0x0);

    this.memory = [...interpreterMemory, ...romMemory, ...padding];
    this._instructionsPerSecond = instructionsPerSecond;
    this._emulator = emulator;
  }

  start = () => {
    console.log('[CPU]', 'starting');
    this._runtimeInterval = setInterval(this.executeCycle, 1000 / this._instructionsPerSecond);
  }

  executeCycle = () => {
    // instructions are 16 bits. Need to pull twice
    const instruction = ((this.memory[this.pc] << 8) + this.memory[this.pc + 1]);
    console.log(`0x${instruction.toString(16)}`);
    this.pc = this.pc + 2;

    //determine what opcode it is
    if (instruction === 0xe0) {
      this.clearDisplay();
    }
    //execute opcode

    //profit ???
  }

  stop = () => {
    console.log('[CPU]', 'stopping');
    clearInterval(this._runtimeInterval);
  }

  clearDisplay = () => {
    console.log('[CPU]', 'requesting display clear');
    this._emulator.clearDisplay();
  }

  _triggerRender = (changes) => {
    // is this how I do renders? Tell the Chip8 object to force a render?
    this._emulator.applyDrawChanges(changes);
  }
}
