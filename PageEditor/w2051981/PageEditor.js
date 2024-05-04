//text animations
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".editor-info ul li");

  function fadeInItems() {
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, index * 200);
    });
  }

  fadeInItems();
});
