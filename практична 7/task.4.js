function difference(array1, array2) {
    const result = array1.filter(item => {
        return array2.includes(item) === false;
    });

    return result;
}

const numbers1 = [7, -2, 10, 5, 0];
const numbers2 = [0, 10];

const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];

const result1 = difference(numbers1, numbers2);
const result2 = difference(cities1, cities2);

console.log(result1);
console.log(result2);