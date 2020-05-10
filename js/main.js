'use strict';
//Задание 1

let task1 = document.getElementById('task1__p');
let task1Text = task1.innerHTML;
document.getElementById('task1__btn').addEventListener('click', () => {
  task1.innerHTML = '';
  task1.innerHTML = task1Text.replace(/'/g,"\"");
});

//Задание 2

let task2 = document.getElementById('task2__p');
let task2Text = task2.innerHTML;
document.getElementById('task2__btn').addEventListener('click', () => {
  task2.innerHTML = '';
  task2Text = task2Text.replace(/\s'/g," \"");
  task2Text = task2Text.replace(/'<br>/g,"\"<br>");
  task2.innerHTML = task2Text;
});

//Задание 3

let form = document.forms[0];

form.addEventListener('submit', () => {
  event.preventDefault();

  form.name.nextSibling.classList.remove('visible');
  form.name.classList.remove('red');
  if (form.name.value.match(/[а-яёa-z ]/gi) != null) {
    if (form.name.value.match(/[а-яё ]/gi).length != form.name.value.length) {
      form.name.nextSibling.classList.add('visible');
      form.name.classList.add('red');
    } 
  } else {
    form.name.nextSibling.classList.add('visible');
    form.name.classList.add('red');
  }

  
  form.tel.nextSibling.classList.remove('visible');
  form.tel.classList.remove('red');
  if (form.tel.value.length != 15) {
    form.tel.nextSibling.classList.add('visible');
    form.tel.classList.add('red');
  } else if (!/\+7\(\d{3}\)\d{3}-\d{4}/gi.test(form.tel.value)) {
    form.tel.nextSibling.classList.add('visible');
    form.tel.classList.add('red');
  };
 
  form.email.nextSibling.classList.remove('visible');
  form.email.classList.remove('red');
  if (!/\w+@mail.ru|\w+\.\w+@mail.ru|\w+-\w+@mail.ru/.test(form.email.value)) {
    form.email.nextSibling.classList.add('visible');
    form.email.classList.add('red');
  };

});

