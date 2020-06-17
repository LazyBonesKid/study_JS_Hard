let
    
    dayArr      = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    monthArr    = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],

    arrJas  = [1, 21],
    arrJasa = [2, 3, 4, 22, 23, 24];

    

    let divOne = document.createElement('divOne');
    document.body.append(divOne);
    let divTwo = document.createElement('divTwo');
    document.body.append(divTwo);

    function checkA (arr, date) {
        return arr.some(function (element) {
            return element == date.getHours;
        });
    }

    function checkB (number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }
    

function A () {
    let date = new Date();
    if (checkA(arrJas, date)) {
        document.querySelector('divOne').innerHTML = ('а) ' + 'Cегодня ' + dayArr[date.getDay()] + ', ' + date.getDate() + ' ' + monthArr[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + 
        date.getHours() + ' час ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' cекунды' + '<br/>' + '<br/>');
    } else if (checkA(arrJasa, date)) {
        document.querySelector('divOne').innerHTML = ('а) ' + 'Cегодня ' + dayArr[date.getDay()] + ', ' + date.getDate() + ' ' + monthArr[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + 
        date.getHours() + ' часа ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' cекунды' + '<br/>' + '<br/>');
    } else {
        document.querySelector('divOne').innerHTML = ('а) ' + 'Cегодня ' + dayArr[date.getDay()] + ', ' + date.getDate() + ' ' + monthArr[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + 
        date.getHours() + ' часов ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' cекунды' + '<br/>' + '<br/>');
    }
}


function C () {
    let date = new Date();
    document.querySelector('divTwo').innerHTML = ('c) ' + checkB(date.getHours()) + ':' + checkB(date.getMinutes()) + ':' + checkB(date.getSeconds()) + ' ' + 
    checkB(date.getDate()) + '.' + checkB(date.getMonth()+1) + '.' + date.getFullYear() + '<br/>' + '<br/>');
}

setInterval(A,1000);
setInterval(C,1000);