class objects {

    keys(obj) {
        // Retrieve all the names of the object's properties.
        // Return the keys as strings in an array.
        // Based on http://underscorejs.org/#keys
        if (obj == undefined) { return [] }
        let newArr = [];
        const strObj = JSON.stringify(obj);
        var flag = "";
        var temp = "";
        let start = true;
        while (flag != "}") {
            for (let i = 1; i < strObj.length; i++) {
                if (strObj[i] == ":") {
                    start = false;
                    newArr.push(temp);
                    temp = "";
                }
                if (start) {
                    if (strObj[i] != `"`) {
                        temp += strObj[i];
                    }
                }
                if (strObj[i] == ",") {
                    start = true;
                }
                flag = strObj[i];

            }
        }
        return newArr;

    }

    values(obj) {
        // Return all of the values of the object's own properties.
        // Ignore functions
        // http://underscorejs.org/#values
        if (obj == undefined) { return [] }
        let newArr = [];
        const key = this.keys(obj);
        for (let i = 0; i < key.length; i++) {
            newArr.push(obj[key[i]]);
        }
        return newArr;
    }
    mapObject(obj, cb) {
        // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
        // http://underscorejs.org/#mapObject
        if (obj == undefined) { return [] }
      
        if (cb === undefined) {
            return obj;
        }
        let newArr = [];
        const key = this.keys(obj);
        for (let i = 0; i < key.length; i++) {
            newArr.push(cb(obj[key[i]]));
        }
        return newArr;
    }

    pairs(obj) {
        // Convert an object into a list of [key, value] pairs.
        // http://underscorejs.org/#pairs
        if (obj == undefined) { return [] }
        let newArr = [];
        const key = this.keys(obj);
        for (let i = 0; i < key.length; i++) {
            let temp = [];
            temp.push(key[i], obj[key[i]]);
            newArr.push(temp);
        }
        return newArr;

    }
    invert(obj) {
        // Returns a copy of the object where the keys have become the values and the values the keys.
        // Assume that all of the object's values will be unique and string serializable.
        // http://underscorejs.org/#invert
        if (obj == undefined) { return {} }
        let copObj = obj;
        const key = this.keys(obj);
        for (let i = 0; i < key.length; i++) {
            let tempVal = obj[key[i]];
            delete obj[key[i]];
            obj[tempVal] = key[i];

        }
        return obj;
    }
    defaults(obj, defaultProps) {
        // Fill in undefined properties that match properties on the `defaultProps` parameter object.
        // Return `obj`.
        // http://underscorejs.org/#defaults
        if (obj == undefined) { return {} }
        if (defaultProps == undefined) { return obj }
        const key = this.keys(obj);
        const defaultKey = this.keys(defaultProps);

        for (let i = 0; i < defaultKey.length; i++) {
            if(obj[defaultKey[i]]==undefined){
                obj[defaultKey[i]]=defaultProps[defaultKey[i]];
            }

        }
        return obj;
      }


}
module.exports = objects;