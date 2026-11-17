function unique(array) {
    const result = [];

    for (const item of array) {
        if (result.includes(item) === false) {
            result.push(item);
        }
    }

    return result;
}

const numbers = unique([2, 1, 1, 3, 2]);
const words = unique(['top', 'bottom', 'top', 'left']);

console.log(numbers);
console.log(words);