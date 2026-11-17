function removeElements(array, ...items) {
    for (const item of items) {
        const index = array.indexOf(item);

        if (index >= 0) {
            array.splice(index, 1);
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

removeElements(numbers, 5, 1, 6);
console.log(numbers);

removeElements(cities, 'Lima', 'Berlin', 'Kiev');
console.log(cities);