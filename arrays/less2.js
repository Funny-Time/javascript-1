const users = ['Anya', 'Vika', 'Katya'];
console.log(users);
users[2] = 'Kristina';
console.log(users);
users[3] = 'Nikita';
console.log(users);

users.push('Ivan');
console.log(users);

const arrLength = users.push('Oleg');
console.log(arrLength);

users.unshift('Vasya');
console.log(users);



users.pop();
console.log('После pop')
console.log(users);

// const el = users.pop();
// console.log(el + ' vozvrat posle pop()');

users.shift();
console.log('После shift()');
console.log(users);


const el3 = users.shift();
console.log(el3);
console.log(users);
