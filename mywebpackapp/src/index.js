const firstInput = document.getElementById('firstValue');
const secondInput = document.getElementById('secondValue');
const result = document.getElementById('result');

const checkValidation = (num1, num2) => {
    console.log(num1, num2)
    if(num1 && num2) return true;
    return false;
}

const handleClick = () => {
    const isValid = checkValidation(firstInput.value, secondInput.value);
    console.log(isValid)
    result.innerHTML = isValid ? parseInt(firstInput.value) + parseInt(secondInput.value) : 'Enter valid numbers'
}

