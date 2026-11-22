function logName(name, surname){
    console.log(`Moe imya ${name} ${surname}`);
}

// console.log(typeof a);
logName('Anton', 'Larichev');

function countDeposti(depositInUSD, month,rate) {
    return sum = depositInUSD * (1 + rate/12) ** month;
}

const example1 = countDeposti(1000, 24, 0.12);
console.log(example1);

const example2 = countDeposti(1000, 48, 0.10);
console.log(example2);
