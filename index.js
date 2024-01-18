document.onreadystatechange = function (e) {
  if (document.readyState === "complete") {
    console.log("im ready");
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
    console.log(idUserEdit)
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
      target.parentNode.parentNode.remove();
    }
    //Edit data
    if (target.classList.contains("edit")) {
      console.log("clicked edit");

      selctedRow = target.parentNode.parentNode;
      console.log(selctedRow);
      idUserEdit=Number(selctedRow.children[0].textContent);
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

  //Get data
  if (selctedRow === null) {
    DB.users.map((user) => {
      const list = document.querySelector(".table-users-list");
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${user.ID}</td>
              <td>${user.firstName}</td>
              <td>${user.lastName}</td>
              <td>${user.email}</td>
              <td>${user.age}</td>
              <td><button class="delete">Delete</button>
              <button class="edit">Edit</button></td>
              `;
      list.appendChild(row);
    });
    selctedRow = null;
  }
}
function clearFields() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}
