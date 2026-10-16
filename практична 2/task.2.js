const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x * x * x;

function calculate() {
    const result = [];

    for (let i = 0; i < 10; i++) {
        const a = square(i);
        const b = cube(i);

        result.push(average(a, b));
    }

    return result;
}

console.log(calculate());