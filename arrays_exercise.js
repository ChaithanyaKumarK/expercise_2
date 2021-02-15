class arrays {


    each(elements, cb) {
        if (elements == undefined) { return [] }
        if (elements.length === 0) {
            return [];
        }
        if (cb === undefined) {
            return elements;
        }

        for (let i = 0; i < elements.length; i++) {
            cb(elements[i], i);
        }
    }

    map(elements, cb) {
        if (elements == undefined) { return [] }
        if (elements.length === 0) {
            return [];
        }
        if (cb === undefined) {
            return elements;
        }
        const newArr = [];
        for (let i = 0; i < elements.length; i++) {
            newArr.push(cb(elements[i], i));
        }
        return newArr;
    }

    reduce(elements, cb, startingValue) {
        if (elements == undefined) { return [] }
        if (elements.length === 0) {
            return [];
        }
        if (cb === undefined) {
            return elements;
        }
        if (startingValue == undefined) {
            startingValue = elements[0];
        } else {
            startingValue += elements[0];
        }
        for (let i = 1; i < elements.length; i++) {
            startingValue = cb(startingValue, elements[i]);
        }
        return startingValue;

    }

    find(elements, cb) {
        if (elements == undefined) { return [] }
        if (elements.length === 0) {
            return [];
        }
        if (cb === undefined) {
            return elements;
        }
        for (let i = 0; i < elements.length; i++) {
            if (cb(elements[i])) {
                return elements[i];
            }
        }
    }

    filter(elements, cb) {
        if (elements == undefined) { return [] }
        if (elements.length === 0) {
            return [];
        }
        if (cb === undefined) {
            return elements;
        }
        let newArr = [];
        for (let i = 0; i < elements.length; i++) {
            if (cb(elements[i])) {
                newArr.push(elements[i]);
            }
        }
        return newArr;

    }

    flatten(elements) {
        if (elements == undefined) { return [] }
        let newArr = [];
        for (let i = 0; i < elements.length; i++) {

            if (Array.isArray(elements[i])) {
                newArr = newArr.concat(this.flatten(elements[i]));;
            } else {
                newArr.push(elements[i]);
            }
        }
        return newArr;
    }






}
module.exports = arrays;