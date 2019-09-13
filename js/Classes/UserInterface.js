class UserInterface {

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

    fecharModal(modalId) {
        document.getElementById(modalId).style.display = 'none'
    }

    showMessages(title, message, type) {
        const div =  document.createElement('div')
        div.className = `mensagem-container ${type}`

        div.innerHTML = `
            <header class="mensagem-header">
                <h3>${title}</h3>
            </header>
            <div class="mensagem-body">
                <p>${message}</p>
            </div>`

        document.body.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 4000)
    }

}