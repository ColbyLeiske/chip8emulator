import CPU from 'src/cpu/cpu.js';

describe('CPU', () => {
  it('should create a 4k size memory', () => {
    const cpu1 = new CPU([]);

    expect(cpu1.memory).toHaveLength(4096);
  });
});
