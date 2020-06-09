'use strict';

let nextD = ' 12312312312312312312312312312312312312312312312312 ';

let hiFromGordonRamz = function(next) {
    if(typeof next == 'number') {
        return('Принимаются только строки!!!!');
    }

    next = next.trim();

    if (next.length > 30) {                 
        next = next.slice(0, 30).split('');
        for(let i = 30; i<33; i++) {
            next[i] = '.';
        }
    }
    
    next = next.join('');

    return next;
};

console.log(hiFromGordonRamz(nextD));