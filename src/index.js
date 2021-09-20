import CPU from './cpu/cpu.js';
import Screen from './screen/screen.js';

const romFolder = './roms/';
const romName = 'ibmlogo.ch8';
const romPath = `${romFolder}${romName}`;
const romData = fetch(romPath);

const cpu = new CPU(0x1000, romData);

const screenConfig = {
  canvas: document.getElementById('screen'),
  scale: 5,
  color: 'rgb(200,0,0)',
};
const screen = new Screen(screenConfig);
screen.draw();

console.log(cpu);
