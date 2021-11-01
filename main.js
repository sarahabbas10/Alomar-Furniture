document.getElementById('mycart').addEventListener('click', function() {
    const item = document.querySelector(".items")
    item.classList.add("hidden-items");
    document.getElementById("formCart").style.display = "block";

})