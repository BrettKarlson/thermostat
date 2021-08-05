'use strict';

describe ('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('increases the temp with up()', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('decreases the temp with down()', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('has a minimum of 10 degrees', () => {
    for(let i = 1; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  });

  it('has power saving mode on by default', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when PSM is on', () => {
    it('has a maximum temp of 25 degrees', () => {
      for(let i = 1; i < 6; i++) {
        thermostat.up();        
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });
  describe('when PSM is off', () => {
    it('has a maximum temp of 32 degrees', () => {
      thermostat.switchPowerSavingModeOff();
      for(let i = 1; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });

  it('can be reset to the default temp', () => {
    thermostat.up();
    thermostat.up();
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });
  
  describe('energy usage levels', () => {
    describe('when the temp is below 18', () => {
      it('is considered low-usage', () => {
        for(let i =1; i < 4; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temp is between 18 and 25', () => {
      it('is considered medium-usage', () => {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temp is higher than 25', () => {
      it('is considered high-usage', () => {
        thermostat.powerSavingMode = false;
        for(let i = 1; i < 7; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
