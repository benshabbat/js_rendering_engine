//Add data
document.querySelector("#form-users").addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const newUser = new User(firstName, lastName, email, Number(age));
  console.log(newUser);
});

//Delete data

//Edit data

//Get data
