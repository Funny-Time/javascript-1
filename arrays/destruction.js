const userData =['Anton', 18, 'Moscow'];

function getData() {
    return ['Anton', 18, 'Moscow'];
}

// const userName = userData[0];
// const age = userData[1];
// const city = userData[2];

const [userName, _, city] = getData();

console.log(userName, city);