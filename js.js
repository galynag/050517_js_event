/**
 * Created by UpscaleAcademy on 05.05.2017.
 */
// function f1(event) {
//     console.log(event);
//     this.innerHTML=event.offsetX;
// }
// function f2() {
//     alert('222222');
// }
//
// document.querySelector('.test').addEventListener('mousemove',f1);

//задание создать поле, в нем квадрат, который будет двигаться за стрелкой мыши при движении мыши

document.querySelector('.test').addEventListener('mousemove',f2);

var xy = document.querySelector('.xy');

function f2(event) {

    xy.style.left = event.offsetX+'px';
    console.log(xy.style.left);
    xy.style.top = event.offsetY+'px';
}


//задание создать поле и в нем маленький квадрат.
 //   при нажатии на кнопку вверх, - квадратик двигается вверж и т.д. для всех направляющих кнопок.
   // !важно, квадратик не может выйти за границы поля.
document.addEventListener('keydown',f3);
console.log(event);

var arrows = document.querySelector('.arrows');
var x=0, y=0;

function f3(event) {
    event.preventDefault();
    console.log(x,y);
        if (event.key == 'ArrowRight'&& x<389 ) {
            x += 3;
            console.log(x,y);
            arrows.style.left = x + 'px';
        } else if (event.key == 'ArrowLeft' && x>0 ) {
            x -= 3;
            console.log(x,y);
            arrows.style.left = x + 'px';
        } else if (event.key == 'ArrowUp' && y>0) {
        y -= 3;
        console.log(x,y);
        arrows.style.top = y + 'px';
        } else if (event.key == 'ArrowDown' && y<389) {
        y += 3;
        console.log(x,y);
        arrows.style.top = y + 'px';
        }

 }