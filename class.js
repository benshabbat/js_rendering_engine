//Class User
class User {
  static usersCount=0;
  ID= User.usersCount;
  constructor(firstName, lastName, email, age,car="empty") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.car = car;
    User.usersCount++;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  set car(newCar) {
      this._car = newCar;
 
  }
  
  set email(newEmail) {
    this._email = newEmail;
  }
  
  get firstName() {
    return this._firstName;
  }
  
  get lastName() {
    return this._lastName;
  }
  
  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._age;
  }
  get email() {
    return this._email;
  }
  get car() { return this._car; }
}


//Class Car

class Car {
  static carsCount=0;
  ID= Car.carsCount;
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
    Car.carsCount++;
  }
}