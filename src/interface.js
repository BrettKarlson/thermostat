

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