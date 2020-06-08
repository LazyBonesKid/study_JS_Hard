'use strict';

let leng,
ruDays = 'Понедельник, вторник, среда....',
enDays = 'Sunday, Monday, Tuesday.....';

while (leng !== 'ru' && leng !== 'en') {
    leng = prompt('ru or en');
}

if (leng === 'ru') {
    console.log(ruDays);
} else {
    console.log(enDays);
}

switch(leng) {
    case 'ru':
        console.log(ruDays);
        break;
    case 'en':
        console.log(enDays);
        break;
}

let arrDoble = [   
    ['ru'],
    ['en']
];
arrDoble['ru'] = ruDays;
arrDoble['en'] = enDays;
console.log(arrDoble[leng]);

let arrDobleTwo = [];
arrDobleTwo['ru'] = ['пн', 'вт', 'ср'];
arrDobleTwo['en'] = ['mon', 'tue', 'thu'];
console.log(arrDobleTwo[leng]);

let obj = {
    'ru': ruDays,
    'en': enDays
};

console.log(obj[leng]);

let namePerson;
namePerson = prompt('Введите имя');

namePerson === 'Артем' ? console.log('Директор') : 0;
namePerson === 'Максим' ? console.log('Преподаватель') : 0;
namePerson !==  'Максим' || 'Артем' ? console.log('Студент') : 0;