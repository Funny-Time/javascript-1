const isAdmin = true;
const canWrite = true;

console.log(`Sistemnij fayil ${isAdmin && canWrite}`);
console.log(`Obichnij fajil ${isAdmin || canWrite}`);
console.log(`Invertiruem prava adminka  ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`Sistemnij Fail s redaktirovaniem ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin)}`);

// let a = 7;
// if (a === -8 || a === 22) {
//
// }

console.log('Vasya' || 'Oleg');
console.log(false || 'Oleg');

console.log('Vasya' && 'Oleg');
console.log('Vasya' && 'Oleg');
console.log(false || '------------');
console.log(false || '');
console.log(false || '------------');

let a;
const userName = a || 'Petya';
console.log(userName);


const fileName = isAdmin && 'file.mp4';

console.log(fileName);
