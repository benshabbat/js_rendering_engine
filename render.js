import DB from "./db.js";
import { Car, User } from "./class.js";
import {
  editUser,
  insertToFormEditData,
  deleteData,
  addUser,
  getDataForTable,
  createCar,
  getEmailUsers,
  insertEmailUser
} from "./functions.js";
function render() {
  getDataForTable();
  getEmailUsers();
  let selctedRow = null;
  let idUserEdit;
  //Add data
  document.querySelector("#form-users").addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const newUser = new User(firstName, lastName, email, Number(age));
    console.log(idUserEdit);
    DB.users.forEach((user) => {
      if (idUserEdit === user.ID) {
        console.log("yes is equal");
        user.firstName = newUser.firstName;
        user.lastName = newUser.lastName;
        user.email = newUser.email;
        user.age = newUser.age;
      }
    });
    //if is add
    if (selctedRow === null) {
      addUser(newUser);
      insertEmailUser(newUser);
    }
    //if is edit
    else {
      editUser(newUser, selctedRow);
    }
    console.log(DB.users);
  });

  document.querySelector(".table-users-list").addEventListener("click", (e) => {
    const target = e.target;
    selctedRow = target.parentNode.parentNode;
    //Delete data
    if (target.classList.contains("delete")) {
      deleteData(selctedRow);
    }

    //Edit data
    if (target.classList.contains("edit")) {
      insertToFormEditData(selctedRow);
    }
  });
  //Creat Car
  document.querySelector("#form-cars").addEventListener("submit", (e) => {
    e.preventDefault();
    createCar();
  });
}

export default render;
