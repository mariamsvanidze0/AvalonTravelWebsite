function searchTours() {
    let input = document.getElementById("searchInputMain");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("tours");
    let liTags = ul.getElementsByTagName("li");

    for (let liTag of liTags) {
        let a = liTag.querySelector("a");
        let textValue = a.textContent.toUpperCase();
        if (filter === "") {
            liTag.style.display = "none";
            a.style.display = "none";
        } else {
            if (textValue.indexOf(filter) > -1) {
                liTag.style.display = "block";
                a.style.display = "block";
            } else {
                liTag.style.display = "none";
                a.style.display = "none";
            }
        }
    }
}
