//Class User
class User {
    constructor(firstName, lastName,email, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.age = age;
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
  }



//Add data
function add() {

  }