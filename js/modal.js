(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        openModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-open")
    }
})();