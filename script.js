"use strict";

/* Есть HTML-форма:
<form name="form1">
  <input type="text" name="input1" />
  <input type="text" name="input2" />
  <button type="submit">Поменять</button>
</form>
По нажатию на кнопку, выполните обмен содержимым между двумя инпутами . При повторном нажатии снова поменять содержимое инпутов. */

/* let form = document.forms.form1;
let input1 = form.elements.input1;
let input2 = form.elements.input2;
let btn = form.elements.btn;

btn.addEventListener('click', function() {
    [input1.value, input2.value] = [input2.value, input1.value];
})
form.addEventListener('submit', function(event) {    
    event.preventDefault();
}); */

/* 2. Есть HTML:
<form name="form1">
<input  type="text" >
<button>Заблокировать</button>
<button>Разблокировать</button>
</form>
При нажатии Заблокировать кнопка блокирует инпут с помощью атрибута disabled, а другая разблокирует. */

/* let form = document.forms.form1;
let input = form.elements.input;
let btnLock = form.elements.lock;
let btnUnlock = form.elements.unlock;

btnLock.addEventListener('click', function() {
    if (!input.getAttribute('disabled')) {
        input.setAttribute('disabled', 'disabled')
    }
});
btnUnlock.addEventListener('click', function() {
    if (input.getAttribute('disabled')) {
        input.removeAttribute('disabled')
    }
});
form.addEventListener('submit', function(event) {    
    event.preventDefault();
}); */

/* 3.  Есть HTML-форма:
<form name="form1">
  <input type="text" name="input1" />
  <a href="test.com">Нажми тут</a>
</form>
Напишите код, который при нажатии на гиперссылку будет заполнять однострочное текстовое поле значением из атрибута href.
! Разметку нельзя.
document.querySelectorAll() использовать нельзя */

/* let form = document.forms.form1;
let input = form.elements.input1;
let link = document.getElementById('link');
console.log(link.getAttribute('href'));
link.addEventListener('click', function(e) {
    e.preventDefault();
    input.value = link.getAttribute('href');
});
form.addEventListener('submit', function(event) {    
    event.preventDefault();
}); */

/* 4. Есть HTML:
<form name="form1">
<textarea ></textarea >
<button>Статистика</button>
</form>
<div>
    Пробелов:10
    Согласных:5
    Гласных:4
</div>
Напишите скрипт, который при нажатии на кнопку будет получать текст из многострочного текстового поля, будет подсчитывать статистику (пример выше)  и результат выводит в div */

/* let form = document.forms.form1;
let textArea = form.elements.textarea;
let btn = form.elements.btn;
let text = document.getElementById('text');
let obj = {
    spaces: 0,
    char1: 0,
    char2: 0
};

let chars1 = ['l', 'r', 'm', 'p', 's'];
let chars2 = ['o', 'e', 'i', 'u'];

btn.addEventListener('click', function() {
    let str = textArea.value.toLowerCase();
    console.log(str);
    for(let i = 0; i < str.length; i++) {
        if (str[i] === ' ') obj.spaces++;
        if (chars1.includes(str[i])) obj.char1++;
        if (chars2.includes(str[i])) obj.char2++;
    }
    text.innerHTML = `
    Пробелов: ${obj.spaces} <br>
    Согласных: ${obj.char1} <br>
    Гласных: ${obj.char2}
    `;
});

form.addEventListener('submit', function(event) {    
    event.preventDefault();
}); */

/* 5. Есть HTML:
<img  src="" class=”hide”>
<form name="form1">
<input  type="text" >
<button>Загрузить изображение</button>
</form>
В input вводим ссылку на изображение.
По нажатию на кнопку подставляем ссылку на изображение в атрибут src тега img. До первого нажатия src=”” строка и картинка скрыта( в стилях для класса должен быть прописан display: none). После первой загрузки картинки,  класс необходимо удалить. */

let img = document.querySelector('.hide');
let form = document.forms.form1;
let input = form.elements.input;
let btn = form.elements.btn;

btn.addEventListener('click', function(event) {
    img.setAttribute('src', input.value);
    img.classList.remove('hide');
    event.preventDefault();
});

