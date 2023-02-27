class Parent {
    constructor(firstName, age) {
        this.firstName = firstName
        this.age = age
        this.lastName = "Lastnamov"
    }

    greeting() {
        console.log('Hello')
    }

    tellName() {
        console.log(`My name is ${this.firstName}\nMy last name is ${this.lastName}`)
    }

    tellAge() {
        console.log(`My age is ${this.age}`)
    }

    tellJobTitle() {
        if (this instanceof Child) { //если екземпляр класса является Перентом
            console.log('I do not have a job title')
        }
        else {
            this.job = 'QA'
            console.log(`My job is ${this.job}`)
        }
    }
}

class Child extends Parent {

    greeting() {
        console.log("Hello, I'm a child class")
    }

    goToSchool() {
        console.log('I like to go to school')
    }
}

const parent1 = new Parent('ParentName', 123)
const child1 = new Child('ChildName', 45)
child1.lastName = 'ChildLastName'

parent1.greeting()
parent1.tellName()
parent1.tellAge()
parent1.tellJobTitle()


child1.greeting()
child1.tellName()
child1.tellAge()
child1.goToSchool()
child1.tellJobTitle()

// console.log(parent1)
// console.log(child1)
