"use strict";
class Person {
    constructor(personName, personAge) {
        this.personName = personName;
        this.personAge = personAge;
    }
    tellMyName() {
        return `I am ${this.personName}`;
    }
    tellMyAge() {
        return `I am ${this.personAge} years old`;
    }
}
const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);
console.log(person1.tellMyName(), person1.tellMyAge());
console.log(person2.tellMyName(), person2.tellMyAge());
