const array = () => {
    const data = [];

    const arr = (index) => {
        return data[index];
    };

    arr.push = (value) => {
        data.push(value);
    };

    arr.pop = () => {
        return data.pop();
    };

    return arr;
};

const a = array();

a.push('first');
a.push('second');
a.push('third');

console.log(a(0));
console.log(a(1));
console.log(a(2));

console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
