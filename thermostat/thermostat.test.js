const Thermostat = require("./thermostat");

describe('Thermostat', () => {
  it('should return the initial temp', () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('should return changed temp', () => {
    const thermostat = new Thermostat;
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('cannot get lower than 10', () => {
    const thermostat = new Thermostat;
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    };
    expect(thermostat.getTemperature()).toBe(10);
    expect(thermostat.getEnergyStatus()).toBe('low-usage');
  });

  it('cannot get higher when 25 by default', () => {
    const thermostat = new Thermostat;
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('cannot get higher when 32 if saving mode is off', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toBe(32);
    expect(thermostat.getEnergyStatus()).toBe('high-usage');
  });

  it('resets temp to 20', () => {
    const thermostat = new Thermostat;
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
    expect(thermostat.getEnergyStatus()).toBe('medium-usage');
  });
});