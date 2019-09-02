const modal = new Modal()

// Evento para abrir e fechar o modal
const btn = document.getElementById('addArmadilha')
btn.addEventListener('click', () => modal.iniciarModal('addArmadilhaModal'))

// Evento botão de adicionar testes de resistência
const addTeste = document.querySelector('#localTestes')
const addTesteBtn = document.querySelector('#adicionarTestes header button')

addTesteBtn.addEventListener('click', (e) => {
	e.preventDefault()
	addTesteDeResistencia()
})

/*** Funções ***/

function addTesteDeResistencia() {
	const div = document.createElement('div')
	div.classList.add('localTeste')
	div.innerHTML = `
	<label>Nome
		<input type="text" placeholder="Nome do Teste">
	</label>
	<label> CD
		<input type="text" placeholder="Classe de Dificuldade">
	</label>
	<label>Tipo de Dano
		<input type="text" placeholder="Dano caso falhe">
	</label>
	<button class="excluirTeste">X</button>`
	addTeste.appendChild(div)
}