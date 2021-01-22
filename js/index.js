document.querySelector('h1').innerText 
  += ' from JavaScript!';

// document - DOM
// window - BOM

// Пошук елементів у DOM-дереві
/*
document.querySelector(); // знайде один елемент
document.querySelectorAll(); // знайде всі елементи, що відповідають селектору

document.getElementById(); // пошук по Id
document.getElementsByClassName(); // пошук по імені класу
document.getElementsByTagName(); // пошук по тегу
*/
const h1 = document.querySelector('h1');
// h1.hidden = true;
// h1.style.color = 'red';
// h1.classList.add('color-red');
// h1.innerHTML = `<i>Hello</i>`;

// Робимо годинник
setInterval(updateClock, 1000);
function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
}

// Таймер зворотнього відліку
/*
const startTime = new Date();
setInterval(updateSelfDestruct);
function updateSelfDestruct() {
    const currTime = new Date();
    const intervalSecs = Math.round((currTime - startTime) / 1000);
    if (intervalSecs > 5) {
        document.querySelector('body').innerHTML = '';
        document.querySelector('body').style.backgroundColor = 'black';
    } else {
        const container = document.querySelector('.self-destruct');
        container.innerText = 'Self-destruct in ' + (5 - intervalSecs);
    }
}
*/
const dontClickButton = document.querySelector('.dont-click');
dontClickButton.addEventListener('click', selfDestruct);
function selfDestruct() {
    document.querySelector('body').innerHTML = '';
    document.querySelector('body').style.backgroundColor = 'black';
}
// Калькулятор
document.querySelector('.calculator .eq').addEventListener('click', calc);
function calc() {
    const display = document.querySelector('.calculator .display');
    display.value = eval(display.value);
}