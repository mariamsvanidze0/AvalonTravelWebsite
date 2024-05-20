function reserveTour(event) {
    event.preventDefault();
    let tour = document.getElementById("tour");
    let name = document.getElementById("name");
    let startDate = document.getElementById("start-date");
    let endDate = document.getElementById("end-date");
    let comments = document.getElementById("comments");
    let errorMessage = document.getElementById("error");
    let result = document.getElementById("resultReserve");


    if (tour.value === "") {
        errorMessage.innerHTML = '<p style=" margin-left: 90px; background-color: none; border-radius: 5px; padding: 10px; color: red;  font-family: font;font-size: 20px;">Please Select A Tour</p>';
        result.innerHTML = ""; 
        return;
    }

    if (startDate.value === "" || endDate.value === "") {
        errorMessage.innerHTML = '<p style="margin-left: 90px; background-color: none; border-radius: 5px; padding: 10px; color: red;  font-family: font;font-size: 20px;">Please select both start and end dates</p>';
        result.innerHTML = "";
        return;
    }

    let selectedTourName = tour.options[tour.selectedIndex].text;

    let reservation = {
        tour: selectedTourName,
        name: name.value,
        startDate: startDate.value,
        endDate: endDate.value,
        comments: comments.value
    };

    let reservedTours = localStorage.getItem('reservedTours');
    reservedTours = reservedTours ? JSON.parse(reservedTours) : [];
    reservedTours.push(reservation);
    localStorage.setItem('reservedTours', JSON.stringify(reservedTours));

    errorMessage.innerHTML = "";
    result.innerHTML = '<p style="margin-left: 90px; background-color: none; border-radius: 5px; padding: 10px; color: green;  font-family: font;font-size: 20px; ">Your Reservation Is Submitted!</p>'

    tour.value = "";
    startDate.value = "";
    endDate.value = "";
    comments.value = "";
}

function populateUserName() {
    let sessionToken = sessionStorage.getItem('sessionToken');
    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    if (sessionToken && usersData && usersData.length > 0) {
        let loggedInUser = usersData.find(user => user.sessionToken === sessionToken); 
        if (loggedInUser) {
            let nameField = document.getElementById("name");
            nameField.value = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
        }
    }
}


document.addEventListener('DOMContentLoaded', populateUserName);

document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.reservation-form form');
    form.addEventListener('submit', reserveTour);
});

