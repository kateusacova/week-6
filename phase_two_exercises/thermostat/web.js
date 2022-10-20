const express = require('express');
const Thermostat = require('./thermostat');
const app = express();
const port = 3000;
const thermostat = new Thermostat;

app.get('/temperature', (req, res) => {
  let result = { temperature: thermostat.getTemperature() };
  res.send(JSON.stringify(result))
});

app.post('/up', (req, res) => {
  thermostat.up();
  res.send()
});

app.post('/down', (req, res) => {
  thermostat.down();
  res.send()
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send()
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);

