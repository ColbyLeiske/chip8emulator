import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const romFolder = "./roms/";
const romName = "ibmlogo.ch8";
const romPath = `${romFolder}${romName}`;
const romData = fs.readFileSync(romPath);

const interpreterSpace = 0x200;
const memorySize = 0x1000;

//this is where fonts will go
const interpreterMemory = new Uint8Array(interpreterSpace).fill(0x0);

//read from the rom
const romMemory = new Uint8Array(romData);

const padding = new Uint8Array(memorySize - interpreterMemory.length - romMemory.length).fill(0x0);
const memory = [...interpreterMemory, ...romMemory, ...padding];

console.log(memory.length)

