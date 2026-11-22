/*
Дан произвольный url -
'https://purpleschool.ru/course/javascript'
Нужно сделать функцию, которая выводит в консоль:
- Протокол (https)
- Доменное имя (purpleschool.ru)
- Путь внутри сайта (/course/javascript)
 */

const url = 'https://purpleschool.ru/course/javascript';

function getInfo(url) {
    const [ protocol, domen, ...pathArray] = url.replace(':/','').split('/');
    const path = '/' + pathArray.join('/');
    console.log(`Протокол: ${protocol}`);
    console.log(`Домен: ${domen}`);
    console.log(`Путь внутри сайта: ${path}`);
}

getInfo(url);
