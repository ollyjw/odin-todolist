const Modal = (() => {

    // open modal adds active class
    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }
    // close modal removes active class
    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    return {
        openModal, 
        closeModal
    }

})();

export { Modal };