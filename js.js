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
    console.log(event);
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

 //нужно создать квадрат, который:
//3.1. при нажатии на кнопку Esc скрыть данный блок;
//3.2. при нажатии на кнопку m. блок должен отобразиться;
//3.3. усложнение: (блок должен быть зафиксирован, и должен заезжать или выезжать)при наведении на блок должен выехать, при уходе курсора мышки с блока нужно скрывать блок, как при нажатии на кнопку Esc.

document.addEventListener('keydown',f4);
document.addEventListener('mouseover',f4);

function f4(event) {
    console.log(event);
    event.preventDefault();
    if (event.key == 'Escape') {
        document.querySelector('.keyp2').style.left='-350px';
    // document.querySelector('.keyp2').style.display='none'; это относится к заданию 3.2.
    } else if (event.code == "KeyM") {
        document.querySelector('.keyp2').style.left = '50px';
        // document.querySelector('.keyp2').style.display='block'; это относится к заданию 3.2.
    } else if (event.target.className == 'keyp2') {
      document.querySelector('.keyp2').style.left='50px';
    } else if (event.target.className != 'keyp2') {
        document.querySelector('.keyp2').style.left='-350px';
    }

}



