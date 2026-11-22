/*
    Вася положил 12 000$ на вклад 7% годовых с
    капитализацией 1 раз в месяц.
    Вывести в консоль, сможет ли он купить дом за 13 500$
    через 2 года после снятия вклада. И остаток после покупки.

    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах // степерь **
*/

const startBalance = 10000;
const percent = 0.07;
const houseCost = 13500;
const months = 24;
const finalBalance = startBalance * (1 + (percent/12)) ** months;

if (finalBalance > houseCost) {
    console.log(`Mi nakopili ${finalBalance}. Vasya smozhet kupit dom cherez 2 goda za ${houseCost}$. Ostatok ${finalBalance - houseCost}`)
} else {
    console.log(`Vasya NE smozhet kupit dom za ${houseCost}$. Balance ${finalBalance}$`)
}
