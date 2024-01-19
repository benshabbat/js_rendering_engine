import DB from "./db.js";
import { Car, User } from "./class.js";

function clearFields() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}

//Get data into table
function getDataForTable() {
  DB.users.map((user) => {
    const list = document.querySelector(".table-users-list");
    const row = document.createElement("tr");
    row.innerHTML = `
                <td id=${user.ID}>${user.ID}</td>
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

function addUser(newUser) {
  const list = document.querySelector(".table-users-list");
  const row = document.createElement("tr");
  row.innerHTML = `
      <td id=${newUser.ID}>${newUser.ID}</td>
        <td>${newUser.firstName}</td>
        <td>${newUser.lastName}</td>
        <td>${newUser.email}</td>
        <td>${newUser.age}</td>
        <td>${newUser.car.model}</td>
        <td><button class="delete">Delete</button>
        <button class="edit">Edit</button></td>
        `;
  list.appendChild(row);
  clearFields();
  DB.users.push(newUser);
}

function deleteData(selctedRow) {
  console.log("clicked delete");

  console.log("the id" + selctedRow.children[0].textContent);
  //remove data from db
  const newArr = DB.users.filter((user) => {
    return user.ID != selctedRow.children[0].textContent;
  });
  console.log("the new array" + newArr);
  DB.users = newArr;
  console.log("the new DB" + DB.users);
  selctedRow.remove();
  selctedRow = null;
}

function insertToFormEditData(selctedRow, idUserEdit) {
  console.log("clicked edit");
  [
    document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("email").value,
    document.getElementById("age").value,
  ] = [
    selctedRow.children[1].textContent,
    selctedRow.children[2].textContent,
    selctedRow.children[3].textContent,
    selctedRow.children[4].textContent,
  ];
  console.log(selctedRow);
  idUserEdit = Number(selctedRow.children[0].textContent);

  console.log(idUserEdit);
}

function editUser(newUser, selctedRow) {
  selctedRow.children[1].textContent = newUser.firstName;
  selctedRow.children[2].textContent = newUser.lastName;
  selctedRow.children[3].textContent = newUser.email;
  selctedRow.children[4].textContent = newUser.age;
  selctedRow = null;
  clearFields();
}
function createCar() {
  // e.preventDefault();
  const idUser = document.getElementById("user-list-car").value;
  const model = document.getElementById("model").value;
  const color = document.getElementById("color").value;
  const year = document.getElementById("year").value;
  const newCar = new Car(model, color, Number(year));
  DB.users.forEach((user) => {
    if (idUser == user.ID) user.car = newCar;
  });
  DB.cars.push(newCar);
  console.log(idUser);
  let checkData = document.getElementById(idUser);
  console.log(checkData.parentNode);
  checkData.parentNode.children[5].textContent = newCar.model;
  console.log(DB.cars);
  console.log(DB.users);
}

function getEmailUsers() {
  DB.users.forEach((user) => {
    const usersCar = document.querySelector(".usersCar");
    const option = document.createElement("option");
    option.value = user.ID;
    option.innerHTML = user.email;
    usersCar.appendChild(option);
  });
}

function insertEmailUser(user) {
    const usersCar = document.querySelector(".usersCar");
    const option = document.createElement("option");
    option.value = user.ID;
    option.innerHTML = user.email;
    usersCar.appendChild(option);
}
export {
  clearFields,
  editUser,
  insertToFormEditData,
  deleteData,
  addUser,
  getDataForTable,
  createCar,
  getEmailUsers,
  insertEmailUser
};
