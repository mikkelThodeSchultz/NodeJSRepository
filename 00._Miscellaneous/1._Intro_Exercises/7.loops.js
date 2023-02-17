const rocks = [
    {name: "Pet Rock", age: 2},
    {name: "Led Zeppelin", age: 50},
    {name: "Dwayne Johson", age: 47},
    {name: "Neptune", age: 100_000_000_000}
];

//Loop methods: map, filter, find, reduce, sort, forEach
//For loops are only used when finger counting is need (counting to a number)



//assignment: make all the rocks one year older and save the value to rocksAgedOneYea

//the arrow function followed by a parentheses means that all inside the '()' is the return statement.
//having brackets inside parentheses means that the return value is an object
//without the panretheses, we can't tell if the {} is signifying an object or that it is json. 
const rocksAgedOneYear = rocks.map(rock => (
    {
        name: rock.name,
        age: rock.age +1
    }
));

// assignment gime the rocks that have even ages

const evenAgedRocks = rocks.filter(rock => rock.age%2===0);