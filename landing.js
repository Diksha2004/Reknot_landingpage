//nav bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
    scrollFunction();
  };

    function scrollFunction() {
     if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
       ) {
             mybutton.style.display = "block";
       } else {
                 mybutton.style.display = "none";
       }
  }

   mybutton.addEventListener("click", backToTop);

     function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
     }
