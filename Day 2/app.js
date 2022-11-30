function Add(){
    const number1 = document.getElementById('num1').value;
    const number2 = document.getElementById('num2').value;
    document.getElementById('answer').innerText = Number(number1) + Number(number2);

}

function Subtract(){
    const number1 = document.getElementById('num1').value
    const number2 = document.getElementById('num2').value
    document.getElementById('answer').innerText = Number(number1) - Number(number2)

}

function Multiply(){
    const number1 = document.getElementById('num1').value
    const number2 = document.getElementById('num2').value
    document.getElementById('answer').innerText = Number(number1) * Number(number2)

}

function Divide(){
    const number1 = document.getElementById('num1').value
    const number2 = document.getElementById('num2').value
    document.getElementById('answer').innerText = Number(number1) / Number(number2)

}