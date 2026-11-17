function removeElement(array, item) {
    const index = array.indexOf(item);

    if (index >= 0) {
        array.splice(index, 1);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

removeElement(numbers, 5);
console.log(numbers);

removeElement(cities, 'Lima');
removeElement(cities, 'Berlin');
console.log(cities);