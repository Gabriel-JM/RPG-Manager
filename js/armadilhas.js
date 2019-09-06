/*** Variáveis ***/
let quantidadeDeTestes = 1;
const store = new LocalStorage('Armadilhas')

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

function coletarTestesDeResistencia() {
	let array = []
	for(let i=1; i<=quantidadeDeTestes; i++) {
		array.push(new TesteDeResistencia(armadilhaForm[`prof${i}`].value,
		armadilhaForm[`cd${i}`].value, armadilhaForm[`tipoDano${i}`].value))
	}
	return array
}

function salvarArmadilhas() {
	let testesArray = coletarTestesDeResistencia()

	const armadilha = new Armadilha(
		armadilhaForm.nome.value,
		armadilhaForm.dano.value,
		armadilhaForm.chao.value,
		armadilhaForm.parede.value,
		armadilhaForm.teto.value,
		testesArray
	)

	store.addToStorage(armadilha)
}

resetarInputs()

// Testes
