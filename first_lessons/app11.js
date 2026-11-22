/*
    Методом prompt получите ответ пользователя
    на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
    выведите в консоль "Успех", если нет - "Вы робот!",
    а если он введёт "Я не робот", то тоже "Успех".
*/

const result =  prompt('Сколько будет 7 + или - 15');
// switch (true){
//     case Number(result) === 22:
//     case Number(result) === -8:
//     case result === 'Я не робот':
//         console.log('Успех');
//         break;
//     default:
//         console.log('Вы робот!');
//         break;
//
// }

if (result === 'Я не робот') {
    console.log('Успех');
} else {
    const resNum = Number(result);
    switch (resNum) {
        case 22:
        case -8:
            console.log('Успех');
            break;
        default:
            console.log('Вы робот!')
            break;
    }
}
