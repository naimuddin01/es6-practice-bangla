class Parent{
    constructor(){
        this.fatherName = "Sharif Uddin";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    fullName(){
        return this.fatherName + " " + this.name;
    }
}

const son = new Child("Naim");
const doughter = new Child("juthy");

// const father = new Parent("hemayet"); //ei vabe deyo jasse na

console.log(son.fullName());
console.log(doughter);