function usingFor(...args) {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total = total + args[i];
    }

    return total;
}

function usingForOf(...args) {
    let total = 0;

    for (const num of args) {
        total = total + num;
    }

    return total;
}

function usingWhile(...args) {
    let total = 0;
    let i = 0;

    while (i < args.length) {
        total = total + args[i];
        i++;
    }

    return total;
}

function usingDoWhile(...args) {
    let total = 0;
    let i = 0;

    do {
        if (i < args.length) {
            total = total + args[i];
        }
        i++;
    } while (i < args.length);

    return total;
}

function usingReduce(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

console.log(usingFor(1, 2, 3));
console.log(usingForOf(0));
console.log(usingWhile());
console.log(usingDoWhile(1, -1, 1));
console.log(usingReduce(10, -1, -1, -1));