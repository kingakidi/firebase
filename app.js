function _(x) {
  return document.getElementById(x);
}

let showUsersContainer = _("profile-list");
let addUserForm = _("add-user-form");
let name = _("name");
let age = _("age");
let state = _("state");

// SHOW USERS IN DIV
let showUsers = (sn, id, { name, age, state }) => {
  //   console.log(id, name, state, age);

  showUsersContainer.innerHTML += `<li class="list-group-item" data-id='id'> <div> (${sn}) Name: ${name} State: ${state} Age: ${age}  </div> <button class="btn btn-danger remove-user" name="remove-user" onclick="deleteUser()"> X </button> </li>`;
};

function deleteUser(e) {
  console.log(e);
}
let sn = 0;
users.get().then((res) => {
  showUsersContainer.innerHTML = "";
  res.docs.forEach((element) => {
    sn++;
    showUsers(sn, element.id, element.data());
  });
});

addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  users
    .add({
      name: name.value,
      state: state.value,
      age: age.value,
      city: "Lagos ",
    })
    .then((res) => {
      console.log(res);
    });
});
