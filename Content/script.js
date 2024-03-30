function btnclick() {
  document.addEventListener("DOMContentLoaded", function () {
    const readmoreBtn = document.querySelector(".readmoreBtn");
    const text = document.querySelector(".text");

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

btnclick();
