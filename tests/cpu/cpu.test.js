import CPU from '../../src/cpu/cpu';

describe('CPU', () => {
	it('should return the same instance after instantiation', () => {
		const cpu1 = CPU.getCPU(0x1000, []);
		const cpu2 = CPU.getCPU();

		expect(cpu1).toBe(cpu2);
	});
});