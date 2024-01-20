import { Car, User } from "./class.js";

//create a car Static
const car1 = new Car("Siat", "white", 2022);
const car2 = new Car("Ferrari", "blue", 2023);

//Create users Static

const User1 = new User("David", "Benshabbat", "benshabbat27@gmail.com", 30);
const User2 = new User("Miriam", "Benshabbat", "Miriam@gmail.com", 28, car1);
const User3 = new User("Avishag", "Benshabbat", "Avishag@gmail.com", 2);

const DB = {
  users: [User1, User2, User3],
  cars: [car1],
  API: {},
};

export default DB;
