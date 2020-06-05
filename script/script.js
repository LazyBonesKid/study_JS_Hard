let num  = 266219;
let mult = 1;

for (let i = num; Math.trunc(i) > 0; i /= 10) {
    mult *= Math.trunc(i) % 10;
}

console.log('Произведение :', mult);
mult **= 3;
console.log('Степень :', mult);
let ost;

for (ost = mult ; ost > 100; ost/=10) {}

console.log('Первые две цифры числа: ', Math.trunc(ost));

