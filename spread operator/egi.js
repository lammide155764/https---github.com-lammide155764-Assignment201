const person = {
    name: 'Alice',
    age: 30
};

const address = {
    city: 'New York',
    country: 'USA'
};

// Merging objects
const personWithAddress = { ...person, ...address };

console.log(personWithAddress); 
// Output: { name: 'Alice', age: 30, city: 'New York', country: 'USA' }
