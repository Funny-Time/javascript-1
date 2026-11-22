const roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2);
console.log(roles);
console.log(res);

const res2 = roles.slice(2, 3);
console.log(roles);
console.log(res2);

const res3 = roles.slice(-1);
console.log(res3);

const res4 = roles.slice(1, -2);
console.log(res4);

//
// console.log(roles);

// res5 = roles.splice(2);
// console.log(res5);
// console.log(roles);

// res6 = roles.splice(2, 1);
// console.log(res6);
// console.log(roles);

// res7 = roles.splice(-2, );
// console.log(res7);

console.log(roles);

// const res8 = roles.reverse();
// console.log(res8);
// console.log(roles);

const newRoles = ['sysadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);