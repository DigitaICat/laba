const mass = [true, 'cat', 9, false, 'book', 12, true, 2.4];

const obj = {
    number: 0,
    string: 0,
    boolean: 0
};

function types(mass) {
    for (const elem of mass) {
        if (typeof elem === 'number') {
            obj.number++;
        } else if (typeof elem === 'string') {
            obj.string++;
        } else if (typeof elem === 'boolean') {
            obj.boolean++;
        }
    }
}

types(mass);
console.dir(obj);