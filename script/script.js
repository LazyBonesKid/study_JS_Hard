let
    date    = new Date(),

    dayArr      = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    monthArr    = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],

    arrJas  = [1, 21],
    arrJasa = [2, 3, 4, 22, 23, 24];

    function checkA (arr) {
        return arr.some(function (element) {
            return element == date.getHours;
        });
    }
    
function A () {
    if (checkA(arrJas)) {
        document.write('а) ' + 'Cегодня ' + dayArr[date.getDay()] + ', ' + date.getDate() + ' ' + monthArr[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + 
        date.getHours() + ' час ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' cекунды' + '<br/>' + '<br/>');
    } else if (checkA(arrJasa)) {
        document.write('а) ' + 'Cегодня ' + dayArr[date.getDay()] + ', ' + date.getDate() + ' ' + monthArr[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + 
        date.getHours() + ' часа ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' cекунды' + '<br/>' + '<br/>');
    } else {
        document.write('а) ' + 'Cегодня ' + dayArr[date.getDay()] + ', ' + date.getDate() + ' ' + monthArr[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + 
        date.getHours() + ' часов ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' cекунды' + '<br/>' + '<br/>');
    }
}


A();

/////////////////////////////////////////////////////////

function checkB (number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function B () {


    document.write('б) ' + checkB(date.getHours()) + ':' + checkB(date.getMinutes()) + ':' + checkB(date.getSeconds()) + ' ' + 
    checkB(date.getDate()) + '.' + checkB(date.getMonth()+1) + '.' + date.getFullYear() + '<br/>' + '<br/>');

}

B();

/////////////////////////////////////////////////////////
let div = document.createElement('div');
document.body.append(div);

function C () {
    let date = new Date();
    document.querySelector('div').innerHTML = ('c) ' + checkB(date.getHours()) + ':' + checkB(date.getMinutes()) + ':' + checkB(date.getSeconds()) + ' ' + 
    checkB(date.getDate()) + '.' + checkB(date.getMonth()+1) + '.' + date.getFullYear() + '<br/>' + '<br/>');
}

setInterval(C,1000);