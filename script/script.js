'use strict';

const

    // ЛЕВЫЙ БЛОК
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('[class="income-title"]'),
    buttonPlusIncome = document.getElementsByTagName('button')[0],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    expensesTitle = document.querySelector('[class="expenses-title"]'),
    expensesAmount = document.querySelector('.expenses-amount'),
    buttonPlusExpenses = document.getElementsByTagName('button')[1],
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    checkbox = document.querySelector('#deposit-check'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodNumber = document.querySelector('.period-amount');
// DIV
let
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items');
// placeholder
const
    placeholderNumber = document.querySelectorAll('[placeholder="Сумма"]'),
    placeholderText = document.querySelectorAll('[placeholder="Наименование"]');


// ПРАВЫЙ БЛОК 
const
    budgetMonthValue = document.getElementsByClassName('result-total')[0],
    budgetDayValue = document.getElementsByClassName('result-total')[1],
    expensesMonthValue = document.getElementsByClassName('result-total')[2],
    additionalIncomeValue = document.getElementsByClassName('result-total')[3],
    additionalExpensesValue = document.getElementsByClassName('result-total')[4],
    incomePeriodValue = document.getElementsByClassName('result-total')[5],
    targerMonthValue = document.getElementsByClassName('result-total')[6],
    start = document.getElementById('start');


//////////
const depositCheck = document.getElementById('deposit-check');
//////////





const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}



const isString = function (n) {
    const re = /[!@#$%^&*()_+-=}{]|[0-9]|[A-z]/g;
    return re.test(n) || n === null || !n.trim()
}


class AppData {
    constructor() {
        this.income = {};
        this.expenses = {};
        this.addIncome = [];
        this.addExpenses = [];
        this.deposit = false;
        this.incomeMonth = 0;
        this.budget = 0;
        this.percentDeposit = 0;
        this.percentMoney = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
    }

    start() {
        this.budget = +salaryAmount.value;
        this.getExpInc();
        this.getExpIncMonth();
        this.getAddExpInc ();
        this.getBudget();

        this.showRezult();
        this.blockingInputs();
        this.reset();
    };

    showRezult() {
        document.querySelector('.period-select').addEventListener('input', () => {
            incomePeriodValue.value = this.calcPeriod();
        });
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targerMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();
    };


    getAddExpInc () {
        const get = (docEl , arr) => {
            let string;
            if (docEl == additionalExpensesItem) {
                string = additionalExpensesItem.value.split(','); 
            } else if (docEl[0] == additionalIncomeItem[0]) {
                string = [docEl[0].value, docEl[1].value]; 
            }

            for (let i = 0; i < string.length; i++) {
                string[i] = string[i].trim();
                if (string[i] !== '') {
                    arr.push(string[i]);
                }
            }

        };

        get(additionalExpensesItem, this.addExpenses);
        get(additionalIncomeItem, this.addIncome);
        
    };

    addBlock () {
        const inputBlock = (block, button) => {
            const cloneBlock = block[0].cloneNode(true);
            cloneBlock.querySelectorAll('input')[0].value = '';
            cloneBlock.querySelectorAll('input')[1].value = '';
            

            cloneBlock.querySelectorAll('input')[0].addEventListener('input', () => {
                if (isString(cloneBlock.querySelectorAll('input')[0].value)) {
                    cloneBlock.querySelectorAll('input')[0].value = cloneBlock.querySelectorAll('input')[0].value.slice(0, -1);
                }
            });

            cloneBlock.querySelectorAll('input')[1].addEventListener('input', () => {
                if (!isNumber(cloneBlock.querySelectorAll('input')[1].value)) {
                    cloneBlock.querySelectorAll('input')[1].value = cloneBlock.querySelectorAll('input')[1].value.slice(0, -1);
                }
            });

            const startStr = block[0].className.split('-');
            block[0].parentNode.insertBefore(cloneBlock, button);
            block = document.querySelectorAll(`.${startStr[0]}-items`);

            if (block.length === 3) {
                button.style.display = 'none';
            }
        };       

        if(event.path[0].className.split(' ')[1] == 'income_add') {
            inputBlock(incomeItems, buttonPlusIncome);
            incomeItems = document.querySelectorAll('.income-items');
        }

        if(event.path[0].className.split(' ')[1] == 'expenses_add') {
            inputBlock(expensesItems,buttonPlusExpenses);
            expensesItems = document.querySelectorAll('.expenses-items');
        }
};


    getExpInc() {
        const count = item => {
            const startStr = item.className.split('-')[0];
            const itemTitle = item.querySelector(`.${startStr}-title`).value;
            const itemAmount = item.querySelector(`.${startStr}-amount`).value;
            if (itemTitle !== '' && itemAmount !== '') {
                this[startStr][itemTitle] = itemAmount;
            }
        };

        incomeItems.forEach(count);
        expensesItems.forEach(count);
    };

    getExpIncMonth() {
        const get = (arr, item) => {
            for (let key in arr) {
                item += +arr[key];
            }
            return item;
        }

        this.expensesMonth = get(this.expenses, this.expensesMonth);
        this.incomeMonth = get(this.income, this.incomeMonth);
    };

    getBudget() {

        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    };

    getTargetMonth() {

        if (this.budgetDay > 0) {
            return 'Цель будет достигнута через: ' + Math.ceil(targetAmount.value / this.budgetMonth) + ' месяца';
        } else {
            return 'Цель не будет достигнута';
        }
    };

    getStatusIncome() {
        if (this.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
            return ('У вас средний уровень дохода');
        } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (this.budgetDay < 0) {
            return ('Что то пошло не так');
        }
    };

    getInfoDeposit() {
        if (this.deposit) {
            do {
                this.percentDeposit = prompt('Какой годовой процент?', 10);
            } while (!isNumber(this.percentDeposit));
            do {
                this.moneyDeposit = prompt('какая сумма заложена?', 10000);
            } while (!isNumber(this.moneyDeposit));
        }
    };

    blockingInputs() {
        const
            inputs = document.querySelectorAll('[type="text"]');
        let
            leftInputsCount = inputs.length - 7,
            count = 0;

        inputs.forEach((item) => {
            if (count !== leftInputsCount) {
                count++;
                item.setAttribute('readonly', 0);
            } else {
                return;
            }
        });
    };

    reset() {
        start.style.display = 'none';
        const cancel = document.getElementById('cancel');
        cancel.style.display = 'block';
        cancel.textContent = 'Сбросить';
        cancel.addEventListener('click', () => {
            const inputs = document.querySelectorAll('[type="text"]');

            inputs.forEach((item) => {
                item.value = '';
                item.removeAttribute('readonly', 0);
            });

            periodSelect.value = '1';
            periodNumber.textContent = '1';

            const
                incomeItemsCopy = document.querySelectorAll('.income-items'),
                expensesItemsCopy = document.querySelectorAll('.expenses-items');

            for (let i = 0; i < incomeItemsCopy.length - 1; i++) {
                incomeItemsCopy[i].parentNode.removeChild(incomeItemsCopy[i]);

            }
            incomeItems = document.querySelectorAll('.income-items');

            for (let i = 0; i < expensesItemsCopy.length - 1; i++) {
                expensesItemsCopy[i].parentNode.removeChild(expensesItemsCopy[i]);
            }
            expensesItems = document.querySelectorAll('.expenses-items');

            buttonPlusExpenses.style.display = '';
            buttonPlusIncome.style.display = '';

            if (depositCheckValue == true) {
                depositCheck.click();
            }

            for (let key in appData) {
                if (typeof appData[key] !== 'function') {
                    appData[key] = appDataCopy2[key];
                }
            }

            start.style.display = '';
            cancel.style.display = 'none';
        });
    };

    calcSavedMoney() {
        return this.budgetMonth * this.period;
    };

    calcPeriod() {
        return this.budgetMonth * periodSelect.value;
    };

    addEventListeners() {
        depositCheck.addEventListener('click', () => {
            depositCheckValue = !depositCheckValue;
        })

        placeholderNumber.forEach((item) => {
            return item.addEventListener('input', () => {
                if (!isNumber(item.value)) {
                    item.value = item.value.slice(0, -1);
                }
            });
        });

        placeholderText.forEach((item) => {
            return item.addEventListener('input', () => {
                if (isString(item.value)) {
                    item.value = item.value.slice(0, -1);
                }
            });
        });

        start.addEventListener('click', () => {
            if (salaryAmount.value.trim() == '') {
                return alert('Заполните "Месячный доход"');
            }
            this.start();
        });


        document.querySelector('.period-select').addEventListener('input', () => {
            periodNumber.innerHTML = periodSelect.value;
        });

        buttonPlusIncome.addEventListener('click', event => {
            this.addBlock(event);
        });

        buttonPlusExpenses.addEventListener('click', event => {
            this.addBlock(event);
        });
    };
}




const appData = new AppData(),
    appDataCopy2 = Object.assign({}, new AppData());

let
    depositCheckValue = false;


appData.addEventListeners();
