class Modal {

    iniciarModal(modalId) {
        const modal = document.getElementById(modalId)

        if(modal) {
            modal.style.display = 'flex'
            modal.addEventListener('click', e => {
                if(e.target.id === modalId || e.target.className === "fecharModal") {
                    modal.style.display = 'none'
                }
            })
        }

    }

}