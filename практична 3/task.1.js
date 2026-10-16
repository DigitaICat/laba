const iface = {
    m1: x => [x],

    m2: function (x, y) {
        return [x, y];
    },

    m3(x, y, z) {
        return [x, y, z];
    }
};

const result = [];

for (const name of Object.keys(iface)) {
    result.push([name, iface[name].length]);
}

console.log(JSON.stringify(result));
console.log(result);