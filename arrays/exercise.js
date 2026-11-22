/*
    Дан список задач
    const tasks = ['Задача 1'];
    Сделать функции:
    - Добавление задачи в конец
    - Удаление задачи по названию
    - Перенос задачи в начало списка по названию
    Всегда меняем исходный массив

    DRY - Don't repeat yourself
*/

const tasks = ['Задача 1'];

function addToTheEnd(array, task) {
    return array.push(task);
}

function removeTask(array, task) {
    const index = array.indexOf(task);
    if (index >= 0) {
        array.splice(index, 1);
    }
    return array;
}

function makeFirstInArray(array, task) {
    const index = array.indexOf(task);
    if (index > 0) {
        removeTask(array, task);
        array.unshift(task);
    }
        return array;
}

addToTheEnd(tasks, 'Задача 2');
console.log(tasks);
addToTheEnd(tasks, 'Задача 3');
console.log(tasks);

console.log(removeTask(tasks, 'Задача 9'));


console.log(makeFirstInArray(tasks, 'Задача 3'));

