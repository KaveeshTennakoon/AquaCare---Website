// Add a common class to all image items
let imageItems = document.querySelectorAll('.item');
imageItems.forEach((item) => {
    item.classList.add('image-clickable');
});

// Function to handle the click event on image items
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('image-clickable')) {
        let imageUrl = event.target.style.backgroundImage.slice(5, -2);
        toggleImagePopup(imageUrl);
    }
});

// Function to toggle the full image popup
function toggleImagePopup(imageUrl) {
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');

    let imagePopup = document.getElementById('image-popup');
    let image = imagePopup.querySelector('img');
    image.src = imageUrl;

    imagePopup.classList.toggle('active');

    let verticalText = document.querySelector('.vertical-text');
    verticalText.classList.toggle('blurred');
}


document.getElementById('image-popup').addEventListener('click', function(event) {
    if (event.target === this) {
        toggleImagePopup('');
    }
});

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

function toggle(popupId) {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById(popupId);
  popup.classList.toggle("active");

  let verticalText = document.querySelector('.vertical-text');
    verticalText.classList.toggle('blurred');
}

document.getElementById('color-button-1').addEventListener('click', function() {
    document.body.style.backgroundColor = '#1d1d1d';
  });
  
  document.getElementById('color-button-2').addEventListener('click', function() {
    document.body.style.backgroundColor = '#7f7e7e4b';
  });
  
  document.getElementById('color-button-3').addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(7, 197, 255)';
  });

