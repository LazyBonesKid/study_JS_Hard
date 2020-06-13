'use strict';

let Data = new Date().getDay();

let arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', ];

for(let i = 1; i < arr.length; i++) {
    if (i == Data){
        document.write(`<p><i>${arr[i]}</i></p>`);
    } else if (arr[i] == 'Суббота') {
        document.writeln(`<p><b>${arr[i]}</b></p>`);
    } else {
        document.write(`<p>${arr[i]}</p>`);
    }
    if (i == 6) {
        if(Data == 0) {
            document.write(`<p><i>${arr[0]}</i></p>`);
        } else {
            document.writeln(`<p><b>${arr[0]}</b></p>`);
        }
    } 
}
