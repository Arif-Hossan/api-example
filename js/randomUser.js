let loadUser = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayUser(data.results));
};

let displayUser = (users) => {
    //get the user container
  let userContainer = document.getElementById("user-container");
  for (let user of users) {
    let userDiv = document.createElement("div");
    //add class
    userDiv.classList.add("user-item");
    userDiv.innerHTML = `
        <img class="user-img" src="${user.picture.medium}" alt="">
        <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p>Email : ${user.email}</p>
        <p>Phone : ${user.phone}</p>
        <p>Location : ${user.location.city}, ${user.location?.country}</p>`;
    userContainer.appendChild(userDiv);
  }
};


loadUser();
