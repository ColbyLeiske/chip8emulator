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

//make sure we have full 4096 bytes - clean this up.... so many allocations
const unpaddedMemory = [...interpreterMemory, ...romMemory];
const padding = new Uint8Array(memorySize - unpaddedMemory.length).fill(0x0);
const memory = [...unpaddedMemory, ...padding];

console.log(memory.length)

