const modalController = ({modalClass, openPopupId, closePopupId}) => {
    console.log(modalClass, openPopupId, closePopupId);
    const modal = document.querySelector(modalClass);

    const popupActivators = document.querySelectorAll(openPopupId);
    console.log(popupActivators);

    const closeBtn = document.getElementById(closePopupId);
    console.log(closeBtn);

    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;

        if (target === modal || target === closeBtn || event.code === 'Escape') {
            modal.style.opacity = 0;
            
            setTimeout(() => {
                modal.style.visibility = 'hidden';
            }, 300);

            window.removeEventListener('keydown', closeModal);
        }
    }

    const openModal = () => {
        modal.style.visibility = 'visible';
        modal.style.opacity = 1;
        window.addEventListener('keydown', closeModal);
    }

    popupActivators.forEach(activator => {
        activator.addEventListener('click', openModal);
    });

    modal.addEventListener('click', closeModal);
}

modalController({
    modalClass: '.modal-price',
    openPopupId: '#openPopupPrice',
    closePopupId: 'closeModal'
});

modalController({
    modalClass: '.modal-conditions',
    openPopupId: '#openPopupRentConditions',
    closePopupId: 'closeModal'
});