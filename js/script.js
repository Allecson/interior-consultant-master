      const btnBar = document.querySelector('.btn_menu')
      const btnBarIcon = document.querySelector('.btn_menu i')
      const menuMobile = document.querySelector('.menu_mobile')

        btnBar.onclick = function () {
        menuMobile.classList.toggle('open')
        const isOpen = menuMobile.classList.contains('open')

        btnBarIcon;classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
      }