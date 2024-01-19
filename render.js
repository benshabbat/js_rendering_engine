import DB from "./db.js";

function render() {
  getDataForTable();

  let selctedRow = null;
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
      editUser(newUser);
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
      insertToFormEditData(selctedRow);
    }
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

function addUser(newUser) {
  const list = document.querySelector(".table-users-list");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${newUser.ID}</td>
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
export default render;
