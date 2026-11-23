function add(a, b) {
    return a + b;
}

function substract (a, b){
    return a - b;
}

function power(a, b) {
    return a ** b;
}

// Функция высшего порядка
function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

console.log(calculate(3, 5, add));

console.log(calculate(3, 5, substract));

console.log(calculate(3, 5, power));