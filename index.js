import DB from "./db.js";
import { Car, User } from "./class.js";
document.onreadystatechange = function (e) {
  if (document.readyState === "complete") {
    console.log("im ready");
    getEmailUsers();
    getDataForTable();
    render2();
  }
};
function render2() {
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
    }
    //if is edit
    else {
      editUser(newUser,selctedRow);
    }
    console.log(DB.users);
  });

  document.querySelector(".table-users-list").addEventListener("click", (e) => {
    console.log(e.target);
    const target = e.target;
    console.log(target);
    selctedRow = target.parentNode.parentNode;
    //Delete data
    if (target.classList.contains("delete")) {
      deleteData(selctedRow);
    }

    //Edit data
    if (target.classList.contains("edit")) {
      // selctedRow = target.parentNode.parentNode
      insertToFormEditData(selctedRow, idUserEdit);
    }
  });

  //Creat Car
  document.querySelector("#form-cars").addEventListener("submit", (e) => {
    createCar();
  });
}

//Get data into table
function getDataForTable() {
  DB.users.map((user) => {
    const list = document.querySelector(".table-users-list");
    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${user.ID}</td>
              <td>${user.firstName}</td>
              <td>${user.lastName}</td>
              <td>${user.email}</td>
              <td>${user.age}</td>
              <td>${user.car.model}</td>
              <td><button class="delete">Delete</button>
              <button class="edit">Edit</button>
              <a href="car.html" class="addCar">Add Car</a>
              </td>
              `;
    list.appendChild(row);
  });
}
function clearFields() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}
function createCar() {
  e.preventDefault();
  const idUser = document.getElementById("user-list-car").value;
  const model = document.getElementById("model").value;
  const color = document.getElementById("color").value;
  const year = document.getElementById("year").value;
  const newCar = new Car(model, color, Number(year));
  DB.users.forEach((user) => {
    if (idUser == user.ID) user.car = newCar;
  });

  DB.cars.push(newCar);

  console.log(DB.cars);
  console.log(DB.users);
}

}




