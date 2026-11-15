const pipe = (...fns) => {
    if (fns.some(fn => typeof fn !== 'function')) {
        throw new Error('All arguments must be functions');
    }

    return x => {
        return fns.reduce((result, fn) => fn(result), x);
    };
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);

console.log(x);

const f1 = pipe(inc, inc);
const y = f1(7);

console.log(y);