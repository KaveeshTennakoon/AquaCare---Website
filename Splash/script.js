const splash = document.querySelector('.content');
const body = document.querySelector('body')

    setTimeout(() => {
      splash.classList.add('moveUp');
      body.classList.add('fadeOut')
      setTimeout(() => {
        window.location.href = '/Shop/shop.html';
      }, 1000);
    }, 4000);
