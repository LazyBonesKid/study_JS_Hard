'use strict';


let isNumber = function(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}



function randomGame() {
    let randomNumber = Math.floor(Math.random() * (100 - 1)) + 1,
    userNumber = prompt('Угадайте число от 1 до 100'),
    tryCount = 10;

    function game() {
        console.dir(game);
        
        if (userNumber === null) {
            alert('тут игра должна закончиться');
            return;
        }

        if (!isNumber(userNumber)) {
            alert('Вы ввели не число');
            userNumber = prompt('Введите новый вариант');
            return game();
        }

        if (userNumber > randomNumber) {
            tryCount -= 1;
            alert('Загаданное число меньше, осталось попыток ' + tryCount);
            if (tryCount === 0) {
                return userChoiceFail();
            }
            userNumber = prompt('Введите новый вариант');
            return game();
        }
        
        if (userNumber < randomNumber) {
            tryCount -= 1;
            alert('Загаданное число больше, осталось попыток ' + tryCount);
            if (tryCount === 0) {
                return userChoiceFail();
            }
            userNumber = prompt('Введите новый вариант');
            return game();
        }

        if (userNumber == randomNumber) {
            return userChoiceWin();
        }
    }
    game();

    function userChoiceFail(count) {
        let choice = confirm('Попытки закончились, хотите сыграть еще?');
        if(choice) {
            tryCount = 10;
            userNumber = 0;
            randomGame();
        } else {
            return alert('тут игра должна закончиться');;
        }
    }

    function userChoiceWin(count) {
        let choice = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if(choice) {
            tryCount = 10;
            userNumber = 0;
            randomGame();
        } else {
            return alert('тут игра должна закончиться');;
        }
    }

}

randomGame();