//retrieving form data from local storage
const json = localStorage.getItem("formInfo");
const formObj = JSON.parse(json);

//initializing 
const name = formObj[Object.keys(formObj)[0]];
let nameExplained = `User already exists - continue as ${name}?`;

const mainConfirmPage = document.getElementById("confirmBox");

let nameExists = false;
  for (let i = 1; i <= localStorage.length; i++) {
    const key = `user${i}`;
    const value = localStorage.getItem(key);
    if (value) {
      const userData = JSON.parse(value);
      if (userData.name === name) {
        nameExists = true;
        break;
      }
    }
  }

 
  if (nameExists) {
    console.log("user already exists");
  } else {
    // Find the next available user count
    nameExplained = `User does not exists - continue as new user?`;
    let count = 1;
    while (localStorage.getItem(`user${count}`)) {
      count++;
    }

    // Store new user
    const newUser = {
      name: name,
    };
    localStorage.setItem(`user${count}`, JSON.stringify(newUser));
    console.log("success: stored", newUser);
  }

  //itterating through form data to show page info
  Object.keys(formObj).forEach((key, i) => {
      //Showing page info
      const markup = `<div>${key}: ${formObj[key]}</div>`;
      const data = document.getElementById("data");
      data.innerHTML += markup;
  });

  if (data) {
  const explained = document.getElementById("explained");
  explained.innerHTML += nameExplained;
  }

function goHome() {
    window.location.href = "home.html";
    }

