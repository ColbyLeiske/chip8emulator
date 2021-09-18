import fs from 'fs';
import dotenv from 'dotenv';
import CPU from './cpu/cpu.js';

dotenv.config();

const romFolder = './roms/';
const romName = 'ibmlogo.ch8';
const romPath = `${romFolder}${romName}`;
const romData = fs.readFileSync(romPath);

const cpu = CPU.getCPU(0x1000, romData);

console.log(cpu);
