// Evento para abrir e fechar o modal
const btn = document.getElementById('addArmadilha')

// Captura botão de adicionar testes de resistência
const addTeste = document.querySelector('#localTestes')
const addTesteBtn = document.querySelector('#adicionarTestes header button')

// Captura o formulário
const armadilhaForm = document.getElementById('modalForm')

// Eventos
btn.addEventListener('click', () => Modal.iniciarModal('addArmadilhaModal'))

addTesteBtn.addEventListener('click', e => {
	e.preventDefault()
	addTesteDeResistencia()
})

addTeste.addEventListener('click', e => {
	if(e.target.className === 'excluirTeste') {
		addTeste.removeChild(e.target.parentElement)
	}
})

/*** Funções ***/

function addTesteDeResistencia() {
	const div = document.createElement('div')
	div.classList.add('localTeste')
	div.innerHTML = `
	<label>Proficiência
		<input type="text" placeholder="Nome da Proficiência">
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

function salvarArmadilhas(e) {
	e.preventDefault()
	return false
}

// Testes
console.log(armadilhaForm.chao)