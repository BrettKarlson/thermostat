'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMP = 10;
    this.temp = 20;
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MAX_LIMIT_PSM_ON = 25;
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
};
