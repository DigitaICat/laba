function fn() {
    const constObject = { name: 'Olena' };
    let letObject = { name: 'Andrii' };

    console.log(constObject);
    console.log(letObject);

    constObject.name = 'Maria';
    letObject.name = 'Dmytro';

    console.log(constObject);
    console.log(letObject);

    letObject = { name: 'Ivan' };

    console.log(letObject);
}

fn();

function createUser(name, city) {
    return {
        name: name,
        city: city
    };
}

console.log(createUser('Olena', 'Kyiv'));