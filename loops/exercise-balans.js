/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000];
    а так же начальный баланс в 100$
    Необходимо сделать функции расчёта:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной операции
      баланс < 0, то выдать false)
    - Расчёта среднего расхода и среднего дохода
*/

let balance = 100;
const operations = [1000, -700, 300, -500, 10000];

function totalBalance (balance, operations) {
    for (let operation of operations) {
        balance += operation;
    }
    return balance;
}

function checkBalance(balance, operation) {
    return balance + operation >= 0 ;
}

function average (operations) {
    let operRashod = 0;
    let averRashod = 0;
    let operDohod = 0;
    let averDohod = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] >= 0) {
            averDohod+=operations[i]
            operDohod++;
        } else {
            averRashod-=operations[i];
            operRashod++;
        }
    }
    console.log(`Средний доход = ${averDohod/operDohod}
    Средний расход = ${averRashod/operRashod}`);
}

console.log(checkBalance(balance, operations));
