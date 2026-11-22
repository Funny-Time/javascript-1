/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведите в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

// data
const rate = 80;
const totalHoursForWork = 40;
const workHoursPerDay = 5;
const dayBeforeTrip = 11;
const willHaveTimeForWork = (dayBeforeTrip - 2) >= totalHoursForWork / workHoursPerDay;
const paymentForWork = totalHoursForWork * rate;

// result
console.log(`Take the work: ${willHaveTimeForWork}`);
console.log(`Payment for work: ${paymentForWork}`);
