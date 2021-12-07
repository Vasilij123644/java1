let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.button');
let buttonClear = document.querySelector('.button-clear');
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let nol = document.querySelector('text');

button.onclick = function () {
    if (inputIn.value <= 0 || inputIn.value == '')
    {
        alert("Введите число! (только положительные числа)");
    }
    else
    {
        console.log('Работает!');
        let weight = inputIn.value;
        let weight1 = Math.pow(weight, 2);
        let weight2 = weight1 * 6;
        let weight3 = Math.pow(weight, 3);
        console.log(weight1);
        console.log(weight2);
        console.log(weight3);
        out1.innerHTML = weight1;
        out2.innerHTML = weight2;
        out3.innerHTML = weight3;
    }
}
buttonClear.onclick = function () {
    inputIn.value = '';
    out1.innerHTML = '';
    out2.innerHTML = '';
    out3.innerHTML = '';
}