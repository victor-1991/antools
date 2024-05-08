'use strict'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    freeMode: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //-----Hamburger------------------
  function openHamburgerMenu() {
    const hamburgerElement = document.querySelector('.hamburger');
    const hamburgerMenuElement = document.querySelector('.hamburger-menu');
    const activeClassName = 'active';

    hamburgerElement.addEventListener('click', () => {
      hamburgerMenuElement.classList.add(activeClassName);
    })
  }

  function closeHamburgerMenu() {
    const closeElement = document.querySelector('.hamburger-menu__close');
    const hamburgerMenuElement = document.querySelector('.hamburger-menu');
    const activeClassName = 'active';

    closeElement.addEventListener('click', () => {
      hamburgerMenuElement.classList.remove(activeClassName);
    })
  }

  function hamburgerMenuItemToogle() {
    const hamburgerMenusDrops = document.querySelectorAll('.hamburger-menu__item-drop');
    const activeClassName = 'active';
    hamburgerMenusDrops.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle(activeClassName);
      })
    })
  }

  openHamburgerMenu();
  closeHamburgerMenu();
  hamburgerMenuItemToogle();

  //-----Modal Window-------------------
  function openModalWindow() {
    const loginBtns = document.querySelectorAll('.login-btn');
    const signBtns = document.querySelectorAll('.sign-btn');
    const backdrop = document.querySelector('.backdrop');
    const loginTab = document.querySelector('.login-tab');
    const loginPanel = document.querySelector('.login-panel');
    const signTab = document.querySelector('.sign-tab');
    const signPanel = document.querySelector('.sign-panel');

    const activeClassName = 'active';

    loginBtns.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        backdrop.classList.add(activeClassName);
        signTab.classList.remove(activeClassName);
        signPanel.classList.remove(activeClassName)
        loginTab.classList.add(activeClassName);
        loginPanel.classList.add(activeClassName);
      })
    })
    signBtns.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        backdrop.classList.add(activeClassName);
        loginTab.classList.remove(activeClassName);
        loginPanel.classList.remove(activeClassName);
        signTab.classList.add(activeClassName);
        signPanel.classList.add(activeClassName)
      })
    })
  }
  function closeModalWindow() {
    const backdrop = document.querySelector('.backdrop');
    const closeModalElement = document.querySelector('.modal-window__close');
    const activeClassName = 'active';

    closeModalElement.addEventListener('click', (e) => {
      e.preventDefault();
      backdrop.classList.remove(activeClassName);
    })

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove(activeClassName);
      }
    })
  }

  openModalWindow();
  closeModalWindow();

  //-------Tabs--------------------------
  function toggleTabs() {
      const tabBtns = document.querySelectorAll('.modal-window__tab');
      const panels = document.querySelectorAll('.modal-window__panel');
      const activeClassName = 'active';

      tabBtns.forEach(item => {
        item.addEventListener('click', (e) => {
          let indexActiveElement = null;
          for (let i = 0; i < tabBtns.length; i++) {
            if (e.target === tabBtns[i]) {
              indexActiveElement = i
            }
          }
          tabBtns.forEach(item => {
            item.classList.remove(activeClassName);
          })
          tabBtns[indexActiveElement].classList.add(activeClassName);
          panels.forEach(item => {
            item.classList.remove(activeClassName);
          })
          panels[indexActiveElement].classList.add(activeClassName);
        })
      })
  }

  toggleTabs()