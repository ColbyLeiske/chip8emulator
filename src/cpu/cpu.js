export default class CPU {
	static _cpu = null;

	memory = [];

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

	constructor(memorySize, romData) {
		const interpreterSpace = 0x200;

		// this is where fonts will go
		const interpreterMemory = new Uint8Array(interpreterSpace).fill(0x0);

		// read from the rom
		const romMemory = new Uint8Array(romData);
		const padding = new Uint8Array(memorySize - interpreterMemory.length - romMemory.length).fill(0x0);

		this.memory = [...interpreterMemory, ...romMemory, ...padding];
	}

	static getCPU(memorySize, romData) {
		if (!this._cpu) {
			this._cpu = new CPU(memorySize, romData);
		}

		return this._cpu;
	}
}
