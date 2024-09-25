const Animal = class {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.
