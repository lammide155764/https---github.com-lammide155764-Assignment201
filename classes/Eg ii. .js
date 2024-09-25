const Animal = class {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} takes a walk.`);
    }
};

const puppy = new Animal('Puppy');
puppy.walk(); // Output: Dog takes a walk.
