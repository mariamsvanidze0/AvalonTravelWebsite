let sessionToken = sessionStorage.getItem('sessionToken');
let usersData = localStorage.getItem('usersData');
usersData = JSON.parse(usersData);

let welcomeMessage = document.createElement('div');

let loggedInUserData = {};

let documentCookie = document.cookie;

if (documentCookie.length > 0 && documentCookie.indexOf('sessionToken') > -1) {
    let indexOfEqualSign = documentCookie.indexOf('=');
    sessionToken = documentCookie.slice(indexOfEqualSign + 1);
}

let resultText = document.getElementById("result");
let section = document.querySelector("section");



if (sessionToken && sessionToken.length > 0) {
    resultText.innerHTML = "";
    
    for (let user of usersData) {
        if (user.sessionToken === sessionToken) {
            loggedInUserData = user;
          
        }
    }
    welcomeMessage.innerHTML = ` <h3 style="font-family: font; font-size: 30px; text-align: center;  text-shadow:  2px 2px  2px black; color: white; position: relative; bottom:700px; ">Welcome ${loggedInUserData.firstName} ${loggedInUserData.lastName} ! </h3>`;
  
    document.body.appendChild(welcomeMessage);
} else {
    resultText.innerHTML = `<h2 style="text-align: center; font-family: font; font-size: 30px; color:white; text-shadow: 2px 2px black; margin-top: 180px ">You need to be logged in to access this page!</h2>`
    section.style.display = "none";



}
