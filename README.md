# Exercise_2


## Class array_exercise 
>`elements` must be array.



### each( elements, cb)
* This function gives each element in the `elements` to the `cb`(call-back function).
* It returns `undefined`.


### map( elements, cb)
* This function modifies each element in the `elements` according to the `cb`(call-back function).
* It returns array with modified elements.
* It return and empty array `[]` when elements is empty.



### reduce( elements, cb, startingValue)
* This function gives each element in the `elements` to the `cb`(call-back function).
* `startingValue` is the value it starts from.
* To add all the items in the given `elements` the c should be as follows:
```javascript
let cb = (store,element) => store+element;
```
* `startingValue` is optional .
* It returns the combined value of elements.


### find(elements, cb)
* This function gives each element in the `elements` to the `cb`(call-back function).
* It returns the **element** itself if the `cb` returns `true`.



### filter(elements, cb)
* This function gives each element in the `elements` to the `cb`(call-back function).
* It returns array of elements that passes the `cb` condition.



### flatten(elements)
* This function removes nested array of any depth using recursion.
* It returns the fattened array.

---