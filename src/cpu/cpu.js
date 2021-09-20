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

  // callstack
  stack = new Uint16Array(0x10);

  // stack pointer - 8 bit
  stackPointer = 0x0;

  // delay timer WIP

  // sound timer WIP

  constructor(rom) {
    // this is where fonts will go
    const interpreterMemory = new Uint8Array(this.reservedMemory).fill(0x0);

    // read from the rom
    const romMemory = new Uint8Array(rom);

    //chip-8 roms can modify themselves (not roms) so we pad incase
    const padding = new Uint8Array(this.memorySize - interpreterMemory.length - romMemory.length).fill(0x0);

    this.memory = [...interpreterMemory, ...romMemory, ...padding];
  }
}
