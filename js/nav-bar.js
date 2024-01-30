$(document).ready(function () {
  // Manejar el clic en el botón de la hamburguesa
  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    toggleMenu();
  });

  // Manejar el clic en los elementos <li>
  $("#mainListDiv ul.navlinks li").click(function () {
    // Cierra el menú
    $(".navTrigger").removeClass("active");
    hideMenu();
  });

  // Función para alternar la visibilidad del menú
  function toggleMenu() {
    $("#mainListDiv").toggleClass("show_list");
    if ($("#mainListDiv").hasClass("show_list")) {
      $("#mainListDiv").fadeIn();
    } else {
      hideMenu();
    }
  }

  // Función para ocultar el menú
  function hideMenu() {
    $("#mainListDiv").fadeOut();
    $("#mainListDiv").removeClass("show_list");
  }
});