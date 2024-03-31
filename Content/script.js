function btnclick(Btn, alltext) {
  document.addEventListener("DOMContentLoaded", function () {
    const readmoreBtn = document.querySelector(Btn);
    const text = document.querySelector(alltext);

    readmoreBtn.addEventListener("click", function () {
      text.classList.toggle("showMore");
      if (readmoreBtn.innerText === "Read More") {
        readmoreBtn.innerText = "Read Less";
      } else {
        readmoreBtn.innerText = "Read More";
      }
    });
  });
}

btnclick(".Btn1", ".text1");
btnclick(".Btn2", ".text2");
btnclick(".Btn3", ".text3");

let mybutton = document.getElementById("topBtn");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.querySelectorAll('.linking a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 
    var targetId = this.getAttribute('href').substring(1);
    var targetElement = document.getElementById(targetId); 
    scrollToMiddle(targetElement); 
  });
});

function scrollToMiddle(element) {
  var elementTop = element.offsetTop;
  var windowHeight = window.innerHeight;
  var middle = elementTop - (windowHeight / 2) + (element.offsetHeight / 2);
  window.scrollTo({ top: middle, behavior: 'smooth' });
}