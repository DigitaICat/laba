
const compose = (...fns) => {
    const events = {
        error: []
    };

    const func = x => {
        try {
            return [...fns].reverse().reduce((result, fn) => {
                if (typeof fn !== 'function') {
                    throw new Error(`${String(fn)} is not a function!`);
                }

                return fn(result);
            }, x);

        } catch (err) {
            events.error.forEach(handler => handler(err));
            return undefined;
        }
    };

    func.on = (name, event) => {
        if (name === 'error') {
            events.error.push(event);
        }

        return func;
    };

    return func;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

let f = compose(inc, twice, cube);

console.log(f(5));

f = compose(7);

f.on('error', err => {
    console.log(err.message);
});

console.log(f(5));
