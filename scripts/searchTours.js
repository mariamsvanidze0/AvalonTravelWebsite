function searchToursUpgraded() {
    let input = document.getElementById("searchInputTours");
    let filter = input.value.toUpperCase();
    let headerNames = document.querySelectorAll("#headerName");
    let notFound = document.getElementById("notFoundDiv");
    let found = false;

    headerNames.forEach(function(header, index) {
        let textValue = header.textContent.toUpperCase();
        let container = header.parentElement.parentElement;

        if (filter === "") {
            container.style.display = "block"; 
            notFound.style.display = "none";
        } else {
            if (textValue.indexOf(filter) > -1) {
                container.style.display = "block";
                notFound.style.display = "none";
                found = true; 
            } else {
                container.style.display = "none";
            }
        }
    });

    if (!found && filter !== "") {
        notFound.innerHTML = '<p style="font-family: font; color:rgb(35, 35, 35); font-size: 30px; text-align: center; margin-top: 100px">There Is No Discount For This Option, Try Another</p>';
        notFound.style.display = "block";
    }
}








