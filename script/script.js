'use strict';

let Data = new Date().getDay();

let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for(let i = 0; i < arr.length; i++) {
    
    if (i == Data){
        document.write(`<p><i>${arr[i]}</i></p>`);
    } else if (arr[i] == 'Суббота' || arr[i] == 'Воскресенье') {
        document.writeln(`<p><b>${arr[i]}</b></p>`);
    } else {
        document.write(`<p>${arr[i]}</p>`);
    }

}

