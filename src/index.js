import Chip8 from './chip8.js';

const screenOptions = {
  canvas: document.getElementById('screen'),
  scale: 15, // maybe add constraint for multiple of 2?
  color: 'rgb(200,0,0)',
  backgroundColor: 'rgb(0,0,0)',
};

const cpuOptions = {
  instructionsPerSecond: 1,
};

const setupBindings = chip8 => {
  document.getElementById('stopBtn').onclick = () => chip8.stop();
  document.getElementById('stopBtn').disabled = false;
};

const romFolder = './roms/';
const romName = 'ibmlogo.ch8';
const romPath = `${romFolder}${romName}`;
fetch(romPath)
  .then(resp => resp.arrayBuffer())
  .then(rom => {
    const chip8 = new Chip8(rom, { screenOptions, cpuOptions });
    setupBindings(chip8);
    chip8.start();
    console.log(chip8);
  });
