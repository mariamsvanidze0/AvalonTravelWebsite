function showSearch() {
    let searchInput = document.getElementById("searchInputMain");
    let ul = document.getElementById("tours");
    let liTags = ul.getElementsByTagName("li");

    if(searchInput.style.display === "none") {
        searchInput.style.display = "block";
        for (let liTag of liTags) {
            liTag.style.display = "block";
        }
    } else if (searchInput.style.display === "block") {
         searchInput.style.display = "none";
         for (let liTag of liTags) {
            liTag.style.display = "none"; }
    }
    else {
        searchInput.style.display = "block";
     
    }
 
}


