document.getElementById("alert-button").addEventListener("click" , function(){
    alert("you pressed this button");
});

let navBar = document.getElementById('navBar');
let toggleBar = document.getElementById('toggleBar');


toggleBar.addEventListener("click", function(){
    navBar.classList.toggle("navActive");
});
