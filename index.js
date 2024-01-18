document.onreadystatechange = function (e) {
  if (document.readyState === "complete") {
    console.log("im ready");
    render();
  }
};
function render() {
  let selctedRow = null;

  //Add data
  document.querySelector("#form-users").addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const newUser = new User(firstName, lastName, email, Number(age));
    DB.users.push(newUser);
    console.log(DB.users);
    if (selctedRow === null) {
      const list = document.querySelector(".table-users-list");
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${firstName}</td>
              <td>${lastName}</td>
              <td>${email}</td>
              <td>${age}</td>
              <td><button class="delete">Delete</button>
              <button class="edit">Edit</button></td>
              `;
      list.appendChild(row);

      selctedRow = null;
    }
  });
  //Delete data
  document.querySelector(".table-users-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
      console.log("clicked delete");
      target.parentNode.parentNode.remove();
    }
  });
  //Edit data
//   document.querySelector(".table-users-list").addEventListener("click", (e) => {
//     target = e.target;
//     if (target.classList.contains("delete")) {
//       console.log("clicked delete");
//       target.parentNode.parentNode.remove();
//     }
//   });

  //Get data
  if (selctedRow === null) {
    DB.users.map((user) => {
      const list = document.querySelector(".table-users-list");
      const row = document.createElement("tr");
      row.innerHTML = `
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

  function clearFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
  }
}
