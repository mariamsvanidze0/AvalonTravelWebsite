function MenuDisplay() {
    this.displayMenu = function() {
        let menuLinks = document.querySelector(".firstnav");

        if (menuLinks.style.display === "block") {
            menuLinks.style.display = "none";
        } else {
            menuLinks.style.display = "block";
        }
    };
}

const menu = new MenuDisplay();
document.querySelector('.toggle-button').addEventListener('click', function() {
    menu.displayMenu();
});
