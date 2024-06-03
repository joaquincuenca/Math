function calculateSum() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById('result').textContent = 'The sum is: ' + sum;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    }
}

function calculateDifference() {
    var num3 = parseFloat(document.getElementById('number3').value);
    var num4 = parseFloat(document.getElementById('number4').value);
    if (!isNaN(num3) && !isNaN(num4)) {
        var difference = num3 - num4;
        document.getElementById('result1').textContent = 'The difference is: ' + difference;
    } else {
        document.getElementById('result1').textContent = 'Please enter valid numbers';
    }
}

function calculateDivision() {
    var num5 = parseFloat(document.getElementById('number5').value);
    var num6 = parseFloat(document.getElementById('number6').value);
    if (!isNaN(num5) && !isNaN(num6) && num6 !== 0) {
        var division = num5 / num6;
        document.getElementById('result2').textContent = 'The result is: ' + division;
    } else {
        document.getElementById('result2').textContent = 'Please enter valid numbers and divisor should not be zero';
    }
}

function calculateMultiplication() {
    var num7 = parseFloat(document.getElementById('number7').value);
    var num8 = parseFloat(document.getElementById('number8').value);
    if (!isNaN(num7) && !isNaN(num8)) {
        var multiplication = num7 * num8;
        document.getElementById('result3').textContent = 'The result is: ' + multiplication;
    } else {
        document.getElementById('result3').textContent = 'Please enter valid numbers';
    }
}
