const role = 'ceo';

switch (role) {
    case 'manager': // role === 'manager'
        console.log('Manager');
        break;
    case 'admin':
        console.log('Admin');
        break;
    case 'ceo':
        console.log('CEO');
        break;
    default:
        console.log('Mi tebia ne znaem');
        break;
}

switch (role) {
    case 'manager': // role === 'manager'
    case 'admin':
        console.log('Ne rukovodiltel');
        break;
    case 'ceo':
        console.log('Rukovoditel');
        break;
    default:
        console.log('Mi tebia ne znaem');
        break;
}

const num = 1;

switch(true) {
    case num > 0:
        console.log('Polozhitelniy');
        break;
    case num < 0:
        console.log('Otricatelnij');
        break;
    default:
        console.log('Ravno 0')
        break;
}