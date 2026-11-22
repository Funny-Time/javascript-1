function canAccessWebsite(age) {
    if (age < 18) {
        return false;
    }
    console.log('sdfsdf');
    return true;
}

console.log(canAccessWebsite(16));

const canAccessWebsite2 = age => age > 18;
console.log(canAccessWebsite2(16));
