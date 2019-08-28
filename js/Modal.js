class Modal {

    iniciarModal(modalId) {
        const modal = document.getElementById(modalId)

        if(modal) {
            modal.classList.add('modalAberto')
            modal.addEventListener('click', e => {
                if(e.target.id === modalId || e.target.className === "fecharModal") {
                    modal.classList.remove('modalAberto')
                }
            })
        }

    }

}