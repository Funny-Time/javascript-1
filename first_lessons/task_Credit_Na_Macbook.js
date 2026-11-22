/*
    Пользователь:
    - Возраст
    - Наличие работы
    - Деньги
    Нужно проверить может ли он купить новый MacBook за 2000$?
    Он может брать не только свои деньги, но и взять кредит.
    Ему дадут 500$, только если ему больше 24-х лет и он
    имеет работу, 100$ если ему просто больше 24-х лет и 0 в
    ином случае.
    Напишите функцию, которая принимает данные пользователя
    и товара и возвращает true или false;
*/

const age = 25;
const hasJob = false;
const money = 1800;
const macBookPrice = 2000;

const creditAmount = (age, hasJob) => age > 24 ? hasJob ? 500 : 100 : 0 ;




function canBuyMacbook (age, hasJob, money, macBookPrice) {
    console.log(money + creditAmount(age, hasJob) >= macBookPrice ? 'Он может купить' : 'Он не может купить');
}

canBuyMacbook(age, hasJob, money, macBookPrice);

