const a = 5;

function inc(num) {
    return num + 1;
}

console.dir({ a, b: inc(a) });