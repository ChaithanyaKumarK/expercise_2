class closures {

    counterFactory() {
        let counter = 0;
        return {
            increment() {
                return ++counter;
            }
            , decrement() {
                return --counter;
            }
        }
    }
    limitFunctionCallCount(cb, n) {
        if (cb == undefined) { return function () { return null; } }
        if (n == undefined) { n = 1; }
        let count = n;
        return function () {
            if (count > 0) {
                --count;
                return cb();
            }
            return null;
        }
    }

    cacheFunction(cb) {
        if (cb == undefined) { return null; }
        let store = {};
        return function (arg) {
            if (store[arg] === undefined) {
                store[arg] = cb(arg);
                console.log("first time");
                return store[arg];

            } else {
                console.log("from stored");
                return store[arg];

            }

        }
    }







}
module.exports = closures;