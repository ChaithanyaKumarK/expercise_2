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
        return function (...arg) {
            let StrArg = String(arg);
            if (store.hasOwnProperty(StrArg)) {
                if (store[StrArg] == undefined) {//It runs the function as it is a non-returning function
                    return cb(...arg);
                }
                return store[StrArg];
            } else {
                store[StrArg] = cb(...arg);
                return store[StrArg];
            }

        }
    }







}
module.exports = closures;