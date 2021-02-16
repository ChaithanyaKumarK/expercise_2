# Exercise_2


## Class array_exercise 
>`elements` must be array.



### function `each( elements,cb)`
* This function gives each element in the `elements` to the `cb`(call-back function).
* It returns `undefined`.


### function `map( elements,cb)`
* This function modifies each element in the `elements` according to the `cb`(call-back function).
* It returns array with modified elements.
* It return and empty array `[]` when elements is empty.



### function `reduce( elements,cb,startingValue)`
* This function gives each element in the `elements` to the `cb`(call-back function).
* It starts from the `startingValue`.
* To add all the items in the given `elements` the c should be as follows:
```javascript
let cb = (store,element) => store+element;
```
* `startingValue` is optional .
* It returns the combined value of elements.


### function  `find(elements,cb)`
* This function gives each element in the `elements` to the `cb`(call-back function).
* It returns the **element** itself if the `cb` returns `true`.



### function `filter(elements,cb)`
* This function gives each element in the `elements` to the `cb`(call-back function).
* It returns array of elements that passes the `cb` condition.



### function `flatten(elements)`
* This function removes a nested array of any depth using recursion.
* It returns the fattened array.

---
## Class objects_exercise 
>`obj` must be an object (`{key:value}`).



### function `keys(obj)`
* This function takes an object.
* It returns array of **keys**.


### function `values(obj)`
* This function takes an object.
* It returns array of **values**.


### function `mapObject(obj,cb)`
* This function takes an object.
* It returns array of transformed value according to call back (`cb`) function.


### function `pairs(obj)`
* This function takes an object.
* It returns array of **keys and value** pairs.


### function `invert(obj)`
* This function takes an object.
* keys and values will be inter-changed.
* It returns an array of **inverted keys and value** pairs.


### function `defaults(obj,defaultProps)`
* This function takes an object and defaultProps(**key value pair**).
*An example for the defaultProps is:
```javascript
let defaultProps = { key1:value1, key2:value2};
```
* This function checks whether the object contains default values. 
* If default values are not found the function appends the values to the object.
* It returns the object after adding default props.
---
## Class closures_exercise 


### function `counterFactory()`
* This function returns an object that has two methods called `increment` and `decrement`.
* `increment` will increment a counter variable in closure scope and return it.
*  `decrement` will decrement the counter variable and return it

### function `limitFunctionCallCount(cb, n)`
* This function returns a function that invokes `cb`.
* The returned function will only allow `cb` to be invoked `n` times.
* If `n` is not provided, it takes the default value of `n=1`.
* If `cb` is not provided then it returns a function that return `null`
* Returning null is acceptable if cb can't be returned
}

### function `cacheFunction(cb)`
> If call-back function doesn't return anything then `cacheFunction(cb)` returns the executed `cb` itself.
* This function returns a function that invokes `cb`.
*  A cache (object) will be kept in closure scope.
*  If the returned function is invoked with arguments that it has already seen then it will return the cached result and not invoke `cb` again.
*  `cb` will only ever be invoked once for a given set of arguments.