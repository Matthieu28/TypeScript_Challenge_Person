class Person {
    private personName : string;
    private personAge: number;

    constructor(personName : string, personAge : number) {
        this.personName = personName;
        this.personAge = personAge;
    }

    public tellMyName(): string {
        return `I am ${this.personName}`;
    }

    public tellMyAge(): any {
        return `I am ${this.personAge} years old`;
    }
}

const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);

console.log(person1.tellMyName(), person1.tellMyAge());
console.log(person2.tellMyName(), person2.tellMyAge());