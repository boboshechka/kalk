let a = ''; //первое число
let b = ''; // второе число после знака
let sign = ''; //знак операции
let finish = false;
let step = 0;

const boxes = document.getElementsByClassName('boxes');
const box__top = document.querySelector('.box-top__content');
const boxBtn = document.querySelector('.box__btn')
const box = document.querySelector('.box')
const mainLeft = document.querySelector('.box__main-left')
const mainRight = document.querySelector('.box__main-right')

for(let i = 0; i < 2 ; i++) {
    boxBtn.addEventListener('click', () => {

        step % 2 === 0 ? lol() : gug()
        console.log('s')
    })
}



function lol() {
    if (box.style.width = 570 + 'px'){
        let w = 330;
        box.style.width = w + 'px';
        mainRight.style.display = 'none';
        mainLeft.style.width = 318.5 + 'px';
        mainLeft.style.marginRight = 0 + 'px';
// можно как то реализовать через css типо :active или просто еще один класс дописать чтобы не было постоянного style. ...
        return;
    }
}
function gug() {
    if (box.style.width = 330 + 'px') {
        let v = 570;
        box.style.width = v + 'px';
        mainRight.style.display = 'flex';
        return;

    }
}

//можно ли сделать функцию или что-то которая выводит символы из boxes и вствляет в массив
const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const symb = ['+-','%','/','*','-','+'];

// for (let i = 0; i < 16; i++) {
//     box__main.innerHTML += "<div class='boxes'></div>";
// }

function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    box__top.textContent = 0;
}

for(let i=0; i < boxes.length ; i++){
    boxes[i].addEventListener('click', event => {

        if(event.target.classList.contains('clear')) clearAll();

        box__top.textContent = '';

        const key = event.target.textContent;

    // нажато число
        if(numbers.includes(key)){
            if (b == '' && sign == '') {
                a += key;
                box__top.textContent = a;
            } else if (a!== '' && b!== '' && finish) {
                b = key;
                finish = false;
                box__top.textContent = b;
            } else {
                b += key;
                box__top.textContent = b;

            }
            console.log(a, b, sign)
            return
        }
    // нажат знак
        if(symb.includes(key)){
            sign = key;
            box__top.textContent = sign;
            console.log (a, b, sign);
            return
        };

    // нажато =
        if (key === '=') {
            if (b === '') b = a;
            switch(sign) {
                case '+':
                    a = (+a) + (+b);
                    break;
                case '-' :
                    a = a - b;
                    break;
                case '*' :
                    a = a * b;
                    break;
                case '/' :
                    a = a / b;
                    break;
            }
            finish = true;
            box__top.textContent = a;
        }
    })
}


