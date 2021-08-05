'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMP = 10;
    this.DEFAULT_TEMP = 20;
    this.temp = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MAX_LIMIT_PSM_ON = 25;
    this.LOW_ENERGY_UPPER_LIMIT = 18;
    this.MEDIUM_ENERGY_UPPER_LIMIT = 25;
  }
  getCurrentTemp() {
    return this.temp;
  }
  up() {
    if (this.isMaximumTemp()) {
      return;
    }
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
  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
  isMaximumTemp() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temp === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temp === this.MAX_LIMIT_PSM_ON;
  }
  resetTemp() {
    this.temp = this.DEFAULT_TEMP;
  }
  energyUsage() {
    if (this.temp <= this.LOW_ENERGY_UPPER_LIMIT) {
      return 'low-usage';
    }
    if (this.temp <= this.MEDIUM_ENERGY_UPPER_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
};
