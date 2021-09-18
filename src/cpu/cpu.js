export default class CPU {
	static _cpu = null;
	memory = [];

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
