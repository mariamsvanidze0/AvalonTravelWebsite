function onRegistration() {
    event.preventDefault();
   let firstName =  document.getElementById("name1");
   let lastName = document.getElementById("lastname1");
   let mail = document.getElementById("mail1");
   let phoneNumber = document.getElementById("phoneNumber1");
   let username = document.getElementById("username1");
   let password = document.getElementById("password1");
   let errorMessage = document.getElementById("error");
   let result = document.getElementById("result");
   let regForm = document.getElementById("registerForm");

   let firstNameRegex = /^[A-Z].*[a-z]$/gm
   let lastNameRegex = /^[A-Z].*[a-z]$/gm
   let mailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,5}/gm
   let phoneNumberRegex = /^\+\d{10,15}$/gm
   let usernameRegex = /^[A-Z].*[A-Za-z].*[0-9]$/gm
   let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$?&*])[A-Za-z\d@!?*#]{8,}$/gm

    if (firstNameRegex.test(firstName.value) === false) {
        result.style.color = "red";
        result.textContent = "Provide correct first name with capital letter!";
    } else {
        if (lastNameRegex.test(lastName.value) === false) {
            result.style.color = "red";
        result.textContent = "Provide correct last name with capital letter!"
        } else {
            if(mailRegex.test(mail.value)=== false) {
                result.style.color = "red";
        result.textContent = "Provide correct E-mail"
            } else {
                if(phoneNumberRegex.test(phoneNumber.value)=== false) {
                    result.style.color = "red";
        result.textContent = "Provide correct phone number"
                } else {
                    if(usernameRegex.test(username.value) === false) {
                        result.style.color = "red";
        result.textContent = "Username must start with big letter and end with number"
                    } else {
                        if(passwordRegex.test(password.value)=== false) {
                            result.style.color = "red";
        result.textContent = "Password must contain: Symmbols, big/small letters, numbers"
                        } else {
                            result.style.color = "green";
                            result.textContent = "You were successfully Registered"
                            let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);

    let uppercaseUsername = username.value.toUpperCase();
    let uppercaseMail = mail.value.toUpperCase();

    let user = {
       firstName: firstName.value,
       lastName: lastName.value,
       mail: mail.value,
       phoneNumber: phoneNumber.value,
       username: username.value,
       password: password.value

    }
    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
    } else {
        let isDuplicate = false;
    
        for (let existingUser of oldUsersData) {
            if (existingUser.username.toUpperCase() === uppercaseUsername) {
                result.textContent = "";
                result.style = "none";
                errorMessage.style.color = "red";
                errorMessage.textContent = "This username is already used!";
                regForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                });
                isDuplicate = true;
                break;
            } else if (existingUser.mail.toUpperCase() === uppercaseMail) {
                result.textContent = "";
                result.style = "none";
                errorMessage.style.color = "red";
                errorMessage.textContent = "This E-mail is already used!";
                regForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                });
                isDuplicate = true;
                break;
            } else if (existingUser.phoneNumber === phoneNumber.value) {
                result.textContent = "";
                result.style = "none";
                errorMessage.style.color = "red";
                errorMessage.textContent = "This phone number is already used!";
                regForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                });
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            setTimeout(function() {
              result.textContent = "You were successfully Registered";
              errorMessage.textContent = "";
              window.location.href = "./main.html";
              oldUsersData.push(user);
              localStorage.setItem('usersData', JSON.stringify(oldUsersData));
            }, 2500); 
          }
          
    }
    }
                        } 
                    }
                }
            }
        }
    }


