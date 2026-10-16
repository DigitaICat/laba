const contacts = [
    { name: 'Maksym', phone: '+380501112233' },
    { name: 'Dasha Parynkina', phone: '+380633789812' },
    { name: 'Roma', phone: '+380671234567' }
];

function findPhoneByName(name) {
    for (const contact of contacts) {
        if (contact.name === name) {
            return contact.phone;
        }
    }
    return 'Not found';
}

console.log(findPhoneByName('Maksym'));
console.log(findPhoneByName('Roma'));
console.log(findPhoneByName('Dasha Parynkina'));
console.log(findPhoneByName('Unknown'));

const phones = {
    'Maksym': '+380501112233',
    'Dasha Parynkina': '+380633789812',
    'Roma': '+380671234567'
};

function findPhone(name) {
    return phones[name] || 'Not found';
}

console.log(findPhone('Maksym'));
console.log(findPhone('Roma'));
console.log(findPhone('Dasha Parynkina'));
console.log(findPhone('Unknown'));