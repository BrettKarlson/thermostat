

const thermostat = new Thermostat;
const updateTemp = () => {
  document.querySelector('#temperature').innerText = thermostat.temp;
}

document.addEventListener("DOMContentLoaded", () => { 
  updateTemp();
});

document.querySelector("#temperature-up").addEventListener('click', () => {
  thermostat.up();
  updateTemp();
});

document.querySelector("#temperature-down").addEventListener('click', () => {
  thermostat.down();
  updateTemp();
});

document.querySelector("#temperature-reset").addEventListener('click', () => {
  thermostat.resetTemp();
  updateTemp();
});

document.querySelector("#powersaving-on").addEventListener('click', () => {
  thermostat.switchPowerSavingModeOn();
  document.querySelector("#power-saving-status").innerText = 'on';
  updateTemp();
});


document.querySelector("#powersaving-off").addEventListener('click', () => {
  thermostat.switchPowerSavingModeOff();
  document.querySelector("#power-saving-status").innerText = 'off';
  updateTemp();
});