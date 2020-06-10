'use strict';

let arr = ['123', '2666', '4555', '7567', '5435', '1111', '46456'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("4") || arr[i].startsWith("2")){
        console.log(arr[i]);
    }
}

for (let i = 2; i <= 100; i++) { 
    let bool = true;
    for(let j = 2; j < i; j++) {
        if (i % j === 0) {
            bool = false;
            break;
        }
    }
    if (bool == true) {
        console.log(i);
    }
}