function convertTemperature() {
    var degreesInput = document.getElementById('degrees');
    var typeSelect = document.getElementById('type');
    var solutionInput = document.getElementById('solution');

    var degrees = parseFloat(degreesInput.value);
    var selectedType = typeSelect.value;

    if (!isNaN(degrees) && selectedType !== 'Choose...') {
        if (selectedType === 'CK') {
            // Convert Celsius to Kelvin
            var result = degrees + 273.15;
            solutionInput.value = result.toFixed(2) + ' K';
        } else if (selectedType === 'CF') {
            // Convert Celsius to Fahrenheit
            var result = (degrees * 9 / 5) + 32;
            solutionInput.value = result.toFixed(2) + ' °F';
        } else if (selectedType === 'FK') {
            // Convert Fahrenheit to Kelvin
            var result = (degrees - 32) * 5 / 9 + 273.15;
            solutionInput.value = result.toFixed(2) + ' K';
        } else if (selectedType === 'FC') {
            // Convert Fahrenheit to Celsius
            var result = (degrees - 32) * 5 / 9;
            solutionInput.value = result.toFixed(2) + ' °C';
        } else if (selectedType === 'KF') {
            // Convert Kelvin to Fahrenheit
            var result = (degrees - 273.15) * 9 / 5 + 32;
            solutionInput.value = result.toFixed(2) + ' °F';
        } else if (selectedType === 'KC') {
            // Convert Kelvin to Celsius
            var result = degrees - 273.15;
            solutionInput.value = result.toFixed(2) + ' °C';
        }
    } else {
        solutionInput.value = 'Please enter a valid temperature and select a type.';
    }
}

function clearInputFields() {
    var degreesInput = document.getElementById('degrees');
    var solutionInput = document.getElementById('solution');

    degreesInput.value = '';
    solutionInput.value = '';
}