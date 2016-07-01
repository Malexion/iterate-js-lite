# iterate-js-lite

## Installation

Install package with NPM and add it to your development dependencies:

`npm install iterate-js-lite`

## Usage

```javascript
var __ = require('iterate-js-lite');

// Iterate over everything
__.all([ 'hello', 'world' ], function(x) { console.log(x); });
__.all({ 'hello': 1, 'world': 2 }, function(x, y) { console.log(y); });

// Map array or objects
console.log(__.map([ 'hello', 'world' ], function(x) { return x; }));
// Map array or object to either or
console.log(__.map([ 'hello', 'world' ], function(x, y, z) { return { key: y, value: x }; }, { build: {} })); 

// Evaluate anything
console.log(__.is.string({}));
console.log(__.is.number(''));
console.log(__.is.def(null)); // Boolean eval
console.log(__.is.set(0)); // Check for null, undefined and NaN
console.log(__.flow([]).def().getProperty('length').def().result); // [].length is defined

// And more
__.all(__, function(x, y) { console.log(y); });
```

## String
Most valuable string functions

- `''.format()`

  A familiar string.format() function.

- `'xyz'.contains('X', true)`

  A familiar string.contains() with an optional boolean to ignore case.

## Functions
Most valuable functions

- `__.all(obj, func, all)`

  Iterates over any iterable object, arrays, objects, arguments and more.
  - `obj:[Object]`
    Item to be iterated over.
  - `func:[Function]`
    Function passed the following in order: (value, key, optionsObject).
  - `all:[Boolean]`
    Flag to turn off the hasOwnProperty() check.

- `__.class(construct, methods, inherit)`

  Class creator, allows the user to create simple inherited classes. Avoid inheriting primitives however.
  - `construct:[Function]`
    Constructor function, passed all arguments, to call super do the following:
    
    ```javascript
    function() {
      MyBaseClass.call(this, ...Extra Args Here...);
    }
    ```
  - `methods:[Object]`
    Object List of Function methods, example as follows.
    
    ```javascript
    {
      count: {
        get: function() { return this.length; },
        set: function(value) { this.length = value; }
      },
      each: function(func) {
        __.all(this, func);
      }
    }
    ```
  - `inherit:[Class/Array]`
    Class or array of classes you want to inherit from.

- `__.contains(obj, func)`

  Iterates over any iterable object to find an object or match a condition function.
  - `obj:[Object]`
    Item to be iterated over.
  - `func:[Object/Function]`
    Function passed the following in order: (value, key, optionsObject). Must return true if item is found.

- `__.distinct(obj, func)`

  Iterates over any iterable object to find distinct items.
  - `obj:[Object]`
    Item to be iterated over.
  - `func:[Object/Function]`
    Optional function passed the value of the iterated item. Must return a value to be checked against others (number/string prefered).

- `__.filter(obj, func)`

  Iterates over any object or array and will return a filtered down version.
  - `obj:[Object/Array]`
    Item to be iterated over.
  - `func:[Function]`
    Function passed the following in order: (value, key, optionsObject). Must return true to keep the item.

- `__.fuse(obj1, obj2, deep, all)`

  Fuses properties from obj2 onto obj1.
  - `obj1:[Object]`
    Item to be operated on.
  - `obj2:[Object]`
    Item to take from.
  - `deep:[Boolean]`
    Iterate over sub arrays and objects rather than overwrite them.
  - `all:[Boolean]`
    Removes the hasOwnProperty() check.

- `__.getType(obj)`

  Gets the base type of any object and returns it as a string: [Object], [String], [Array], [Boolean], etc.
  - `obj:[Object]`
    Item to retrieve the type of.

- `__.guid(seperator, track)`

  Generates a unique id.
  - `seperator:[String]`
    String seperator between number sets, default is '-'.
  - `track:[String]`
    Unique string for the subgroup of guids to track.

- `__.intersect(obj1, obj2, func)`

  Returns an array of shared values between the two objects/arrays compared.
  - `obj1:[Object/Array]`
    Item to be iterated over.
  - `obj2:[Object/Array]`
    Item to be iterated over.
  - `func:[Function]`
    Optional function passed the value of the iterated item. Must return a value to be checked against others (number/string prefered).

- `__.map(obj, func, e)`

  Iterates over any iterable object and can map to either an array or object.
  - `obj:[Object]`
    Item to be iterated over.
  - `func:[Function]`
    Function passed the following in order: (value, key, optionsObject).
  - `e:[Object]`
    Base options, here you can pass in a build object, by utilizing the optionsObject param you can populate it however you want.

- `__.prop(obj, path)`

  Safely follows the property chain to get the property, undefined if not found.
  - `obj:[Obj]`
    Object to search.
  - `path:[String]`
    Path string to get to the property, EX: 'id' or 'collection.user.id'.

- `__.search(obj, func, options)`

  Uses the most optimum method to search the object for the condition or object.
  - `obj:[Object]`
    Item to be searched.
  - `func:[Object/Function]`
    Object to be searched for or a Function passed the following in order: (value, key, optionsObject).
  - `options:[Object]`
    Base options, can override retval, remove the hasOwnProperty() check or flag to return the key of the match instead of the value.

- `__.sort(array, options)`

  Sorts the array based upon options given, can sort upon multiple options/keys or a single key.
  - `array:[Array]`
    Array to be sorted.
  - `options:[Object/Array]`
    Object or array with two properties, EX: { key: function(x) { return x; }, dir: 'asc' }. // dir set to anything else will be 'desc'.



## Classes

- `new __.lib.Overwrite()`

  Payload delivery for __.fuse() while deep copying to overwrite an array or object despite the deep iterate flag.
