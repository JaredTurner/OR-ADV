// calculators.js
function calculateBatteryCapacity() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const ampHours = parseFloat(document.getElementById('ampHours').value);
    const result = voltage * ampHours;
    document.getElementById('result1').textContent = `Total Watt-hours: ${result} Wh`;
}

function calculateSolarWattage() {
    const solarVoltage = parseFloat(document.getElementById('solarVoltage').value);
    const solarCurrent = parseFloat(document.getElementById('solarCurrent').value);
    const result = solarVoltage * solarCurrent;
    document.getElementById('result2').textContent = `Total Wattage: ${result} W`;
}