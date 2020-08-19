//Classes are more similar to other oops language
//Constructor used to load and assign variables when class is initiated the class
//Super is used for reuse teh parent class variable
//export is keyword where its need to use export the class
//this keyword used for represent the current object of the class

export class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  printName() {
    console.log(`${this.name} was born in ${this.country}`);
  }
}

export class Tennis extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }

  TennisPlayer() {
    console.log(
      `${this.name} age is ${this.age} and he was born in ${this.country}`
    );
  }
}
