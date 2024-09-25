const person = {
    name: 'Alice',
    age: 30
};

// Adding a new property
const updatedPerson = { ...person, age: 31, job: 'Developer' };

console.log(updatedPerson); 
// Output: { name: 'Alice', age: 31, job: 'Developer' }
