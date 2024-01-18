

document.onreadystatechange = function (e) {
  if (document.readyState === "complete") {
    console.log("im ready");
    getEmailUsers();
    createCar();
    getDataForTable();
    render();
  }
};
function render() {
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
      const list = document.querySelector(".table-users-list");
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${newUser.ID}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td>${newUser.car.model}</td>
        <td><button class="delete">Delete</button>
        <button class="edit">Edit</button></td>
        `;
      list.appendChild(row);

      selctedRow = null;
      clearFields();
      DB.users.push(newUser);
      //if is edit
    } else {
      selctedRow.children[1].textContent = firstName;
      selctedRow.children[2].textContent = lastName;
      selctedRow.children[3].textContent = email;
      selctedRow.children[4].textContent = age;
      selctedRow = null;
      clearFields();
    }
    console.log(DB.users);
  });

  document.querySelector(".table-users-list").addEventListener("click", (e) => {
    target = e.target;
    //Delete data
    if (target.classList.contains("delete")) {
      console.log("clicked delete");
      selctedRow = target.parentNode.parentNode;
      console.log("the id" + selctedRow.children[0].textContent);
      //remove data from db
      const newArr = DB.users.filter((user) => {
        return user.ID != selctedRow.children[0].textContent;
      });
      console.log("the new array" + newArr);
      DB.users = newArr;
      console.log("the new DB" + DB.users);
      selctedRow = null;
      target.parentNode.parentNode.remove();
    }
    //Edit data
    if (target.classList.contains("edit")) {
      console.log("clicked edit");

      selctedRow = target.parentNode.parentNode;
      console.log(selctedRow);
      idUserEdit = Number(selctedRow.children[0].textContent);
      document.getElementById("firstName").value =
        selctedRow.children[1].textContent;
      document.getElementById("lastName").value =
        selctedRow.children[2].textContent;
      document.getElementById("email").value =
        selctedRow.children[3].textContent;
      document.getElementById("age").value = selctedRow.children[4].textContent;
      console.log(idUserEdit);
    }
  });
  document.querySelector(".table-users-list").addEventListener("click", (e) => {
    target = e.target;
  });

  //get Users





}
function clearFields() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}



//Get data into table
function getDataForTable(){
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



  //Creat Car
  function createCar(){
    document.querySelector("#form-cars").addEventListener("submit", (e) => {
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
    });
  
  }
//getEmailUsers
function getEmailUsers(){

  DB.users.forEach((user) => {
    const usersCar = document.querySelector(".usersCar");
    const option = document.createElement("option");
    option.value = user.ID;
    option.innerHTML = user.email;
    usersCar.appendChild(option);
  });
}