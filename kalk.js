// событие клика чтобы выводила символы в box__top
let a = ''; //первое число
let b = ''; // второе число после знака
let sign = ''; //знак операции
let finish = false;

const boxes = document.getElementsByClassName('boxes');
const box__top = document.querySelector('.box-top__content');


//можно ли сделать функцию или что-то которая выводит символы из boxes и вствляет в массив
const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const symb = ['+-','%','/','*','-','+','='];

// for (let i = 0; i < 16; i++) {
//     box__main.innerHTML += "<div class='boxes'></div>";
// }

function clearAll(){
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    box__top.textContent = 0;
}
// document.querySelector('.clear').addEventListener('click', clearAll)

document.querySelector('.boxes').addEventListener('click', event => {

    if(event.target.classList.contains('clear')) clearAll();

    box__top.textContent = '';

    const key = event.target.textContent;
    console.log(key);

    if(numbers.includes(key)){
        a += key;
        console.log (a, b, sign);
    }

})