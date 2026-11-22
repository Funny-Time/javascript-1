const projectName = 'Website store';
const price = 2000;
const author = 'Vasiliy Pupkin';

const template = author + ' zakazal ' + projectName + ' po cene ' + price;
console.log(template);

const template2 = `${author} zakazal ${projectName} po cene ${price} $`;
console.log(template2);

const template3 = 'Proekt \n' + 'Cena: ' + price + '$';
console.log(template3);

const template4 = `Proekt
Cena: ${price}$`
console.log(template4);