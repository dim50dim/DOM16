 
//////////FIRST TASK  . Напишите код, который будет выводить alert с надписью Привет! при нажатии на кнопку.
 let btn1 = document.querySelector('.btn1');
  btn1.onclick = () => {
      alert('How is it going!!!');
  };

////////////SECOND TASK   Напишите код, который будет менять текст в инпуте при нажатии на кнопку (изначально в инпуте уже должно быть задан текст).

// let btn2 = document.querySelector('.btn2');
//   let input = document.querySelector('.input-2');
//     let newA = input.getAttribute('value');
//  btn2.onclick = () => {
//     newA.setAttribute('value' , 'move');
//  };

 ///////THIRD TASK Напишите код, который будет выводить alert с содержимым инпута (изначально в инпуте уже должно быть задан текст).
 let btn3 = document.querySelector('.btn3');
 let a = document.querySelector('.input-3');
 let attr = a.getAttribute('value');

 btn3.onclick = function () {

       alert(attr);
 };

 ///////FOUR TASK  . Напишите код, который будет выводить alert  с содержимым инпута, возведенным в квадрат (для этого вам нужно создать инпут, в который пользователь будет вводить число).
 let btn4 = document.querySelector('.btn4');
  let b = document.querySelector('.input-4');
   let attrib = b.getAttribute('value');

   btn4.onclick = () => {
     //  alert(attrib * attrib);
    
   };

//////////// FIFTH TASK   Вам необходимо создать два инпута с заданными значениями и кнопку, при нажатии на которую будет осуществляться обмен содержимым между двумя инпутами (значение первого инпута должно записаться во второй, а значение второго — в первый).
let btn5 = document.querySelector('.btn5');

////////SIXTH TASK  Напишите код, который будет при нажатии на кнопку менять текст в ней.\
 let btn6 = document.querySelector('.btn6');
   

/////////////////////SEVENTH TASK Напишите код, который будет при нажатии на кнопку менять цвет текста в инпуте (изначально в инпуте уже должно быть задан текст).
let btn7 = document.querySelector('.btn7');
 let b2 = document.querySelector('.input-7');


   btn7.onclick = () => {
       b2.style.color = 'red';
   };