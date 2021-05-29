const burger_menu = document.getElementById('burger-menu');
            const close_menu = document.getElementById('close-menu');
            const nav_menu = document.querySelector('.nav__menu');
            const hero = document.querySelector('.hero');
          
            let is_open = false;
          
            burger_menu.addEventListener('click', () => {
             nav_menu.classList.toggle('nav__menu--active');
             hero.classList.toggle('hero--active');
            })