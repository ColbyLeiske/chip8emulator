import Chip8 from './chip8.js';

const romFolder = './roms/';
const romName = 'ibmlogo.ch8';
const romPath = `${romFolder}${romName}`;
const rom = fetch(romPath);

const screenOptions = {
  canvas: document.getElementById('screen'),
  scale: 10, // maybe add constraint for multiple of 2?
  color: 'rgb(200,0,0)',
  backgroundColor: 'rgb(0,0,0)',
};


const chip8 = new Chip8(rom, { screenOptions });
console.log(chip8);
