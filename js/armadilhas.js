const modal = new Modal()

// Evento para abrir e fechar o modal
const btn = document.getElementById('addArmadilha')
btn.addEventListener('click', () => modal.iniciarModal('addArmadilhaModal'))

// Evento botão de adicionar testes de resistência
const addTeste = document.querySelector('#adicionarTestes')
const addTesteBtn = document.querySelector('#adicionarTestes header button')

/*
	Funções
*/

addTesteBtn.addEventListener('click', (e) => {
	addTeste.innerHTML += e.target
})