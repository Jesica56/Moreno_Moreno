document.addEventListener("DOMContentLoaded", function() {
    const openModal = (targetId) => {
        const modal = document.getElementById(targetId);
        if (modal) {
            modal.style.display = "block";
        }
    };

    const closeModal = (button) => {
        const modal = button.closest(".modal");
        if (modal) {
            modal.style.display = "none";
        }
    };

    const modalLinks = document.querySelectorAll(".prev-lista a");
    modalLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");
            openModal(targetId);
        });
    });

    const closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            closeModal(this);
        });
    });

    // Agregar funcionalidad para otra ventana modal
    const modalLinks2 = document.querySelectorAll(".prev-list-mod a");
    modalLinks2.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");
            openModal(targetId);
        });
    });

    const closeButtons2 = document.querySelectorAll(".close-button-2");
    closeButtons2.forEach(function(button) {
        button.addEventListener("click", function() {
            closeModal(this);
        });
    });
});
