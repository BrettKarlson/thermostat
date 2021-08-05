'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMP = 10;
    this.temp = 20;
    this.powerSavingMode = true;
  }
  getCurrentTemp() {
    return this.temp;
  }
  up() {
    this.temp += 1
  }
  down() {
    if (this.isMinimumTemp()) {
      return;
    }
    this.temp -= 1
  }
  isMinimumTemp() {
    return this.temp === this.MINIMUM_TEMP;
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }
};
