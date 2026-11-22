const bmwX3 = 100000;
const fordFocusPrice = 10000;
const budget = 200000;

let message = budget > bmwX3
    ? 'BMW'
    : budget > fordFocusPrice ? 'Ford' : 'Velosiped';


console.log(`Ia hochu kupit ${message}`);