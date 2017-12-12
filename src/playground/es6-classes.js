// ********************************************
// clases y subclases E6 y React

class Person {
    constructor(name = 'Anonymus', age= 0){
    this.name = name
    this.age = age
    }
    getGretting(){
        return `Hi. I'm ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age)
        this.major=major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()
        
        if(this.hasMajor()){
            description += `Their major is ${this.major}`
        }

        return description
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }

    // hasHomeLocation(){
    //     return !!this.homeLocation
    // }

    getGretting(){
        let greetting = super.getGretting()

        if(this.homeLocation){
            greetting += `I'm visition from ${homeLocation}`
        }
        return greetting
        
    }
}
const me = new Student('Diego Cardenas', 26, 'Computer Science')
console.log(me.getDescription())

const other = new Student()
console.log(other.getDescription())

const foreing = new Traveler('Andres Cardenas', 32, 'Colombia');
console.log(foreing.getGretting());

const tu = new Traveler()
console.log(other.getGretting())