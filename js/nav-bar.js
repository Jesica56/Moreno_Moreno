$(document).ready(function () {
  // Manejar el clic en el botón de la hamburguesa
  $('.navTrigger').click(function () {
    if (window.innerWidth <= 768) {
      $(this).toggleClass('active');
      console.log("Clicked menu");
      toggleMenu();
    }
  });

  // Manejar el clic en los elementos <li>
  $("#mainListDiv ul.navlinks li").click(function () {
    // Cierra el menú solo si estamos en un dispositivo de tamaño menor o igual a 768 píxeles
    if (window.innerWidth <= 768) {
      $(".navTrigger").removeClass("active");
      hideMenu();
    }
  });

  // Función para alternar la visibilidad del menú
  function toggleMenu() {
    if (window.innerWidth <= 768) {
      $("#mainListDiv").toggleClass("show_list");
      if ($("#mainListDiv").hasClass("show_list")) {
        $("#mainListDiv").fadeIn();
      } else {
        hideMenu();
      }
    }
  }

  // Función para ocultar el menú
  function hideMenu() {
    if (window.innerWidth <= 768) {
      $("#mainListDiv").fadeOut();
      $("#mainListDiv").removeClass("show_list");
    }
  }

  // Ejecutar la función al cambiar el tamaño de la pantalla
  $(window).resize(function () {
    // Mostrar los elementos <li> si el menú está cerrado
    if (window.innerWidth <= 768 && !$("#mainListDiv").hasClass("show_list")) {
      $("#mainListDiv ul.navlinks").show();
    } else {
      hideMenu();
    }
  });
});

