const splash = document.querySelector('.content');
const body = document.querySelector('body')

//timer to redict to home page

    setTimeout(() => {
      splash.classList.add('moveUp');
      body.classList.add('fadeOut')
      setTimeout(() => {
        window.location.href = '/Home/home.html'; //path to home page
      }, 700);
    }, 4000);   