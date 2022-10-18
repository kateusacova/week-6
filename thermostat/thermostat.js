class Thermostat {

  constructor() {
    this.initialTemp = 20;
    this.powerSavingMode = true;
  };

  getTemperature() {
    return this.initialTemp;
  };

  up() {
    if ((this.powerSavingMode === true && this.initialTemp < 25) 
    || (this.powerSavingMode === false && this.initialTemp < 32)) {
      this.initialTemp += 1;
    };
  };

  down() {
    if (this.initialTemp > 10) {
      this.initialTemp -= 1;
    };
  };

  setPowerSavingMode(status) {
    this.powerSavingMode = status;
  };

  reset() {
    this.initialTemp = 20;
  };

  getEnergyStatus() {
    if (this.initialTemp < 18) {
      return 'low-usage';
    } else if (this.initialTemp <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };

};

module.exports = Thermostat;