document.getElementById("alert-button").addEventListener("click" , function(){
    alert("you pressed this button");
});

let navBar = document.getElementById('navBar');
let toggleBar = document.getElementById('toggleBar');


toggleBar.addEventListener("click", function(){
    navBar.classList.toggle("navActive");
});


$('.list-item').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });
