/*** Variáveis ***/
let quantidadeDeTestes = 1;

// Captura o botão para abrir o modal
const btn = document.getElementById('addArmadilha')

// Captura o formulário
const armadilhaForm = document.getElementById('modalForm')

// Captura o local e o botão de adicionar testes de resistência
const addTeste = document.querySelector('#localTestes')
const addTesteBtn = document.querySelector('#adicionarTestes header button')

/*** Eventos ***/
btn.addEventListener('click', () => Modal.iniciarModal('addArmadilhaModal'))

addTesteBtn.addEventListener('click', e => {
	e.preventDefault()
	addTesteDeResistencia()
})

addTeste.addEventListener('click', e => {
	if(e.target.className === 'excluirTeste') {
		addTeste.removeChild(e.target.parentElement)
		--quantidadeDeTestes
	}
})

/*** Funções ***/

function addTesteDeResistencia() {
	const div = document.createElement('div')
	div.classList.add('localTeste')
	++quantidadeDeTestes

	div.innerHTML = `
	<label>Proficiência
		<input type="text" name="prof${quantidadeDeTestes}" placeholder="Nome da Proficiência">
	</label>
	<label> CD
		<input type="text" name="cd${quantidadeDeTestes}" placeholder="Classe de Dificuldade">
	</label>
	<label>Tipo de Dano
		<input type="text" name="tipoDano${quantidadeDeTestes}" placeholder="Dano caso falhe">
	</label>
	<button class="excluirTeste">X</button>`

	addTeste.appendChild(div)
}

function resetarInputs() {
	armadilhaForm.chao.value = 'off'
	armadilhaForm.parede.value = 'off'
	armadilhaForm.teto.value = 'off'
}

function marcarCheckbox(valor) {
	const element =  document.getElementById(valor)
	if(element.value === 'on') {
		element.value = 'off'
	} else {
		element.value = 'on'
	}
}

function salvarArmadilhas() {
	const Armadilha = {
		nome: armadilhaForm.nome.value,
		dano: armadilhaForm.dano.value,
		chao: armadilhaForm.chao.value,
		parede: armadilhaForm.parede.value,
		teto: armadilhaForm.teto.value
	}

	console.table(Armadilha)
}

resetarInputs()

// Testes
