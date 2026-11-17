function contract(fn, ...types) {
    const resultType = types.pop();
    const argTypes = types;

    return function(...args) {
        args.forEach((arg, index) => {
            if (typeof arg !== argTypes[index].name.toLowerCase()) {
                throw new TypeError(
                );
            }
        });

        const result = fn(...args);

        if (typeof result !== resultType.name.toLowerCase()) {
            throw new TypeError(
            );
        }
        return result;
    };
}

const add = (a, b) => a + b;

const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);

console.log(res);

const concat = (s1, s2) => s1 + s2;

const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');

console.log(res2);