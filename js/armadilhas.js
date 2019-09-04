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
	console.log(element.value)
}

function getInputs(target) {
	const resultado = []
	for(let e of target.elements) {
		if(e.type !== 'button' && e.type !== 'submit') {
			resultado.push(e)
		}
	}
	return resultado
}

function salvarArmadilhas() {
	const inputs = getInputs(armadilhaForm)
	const Armadilha = {
		nome: inputs[0].value,
		dano: inputs[1].value,
		chao: inputs[2].value,
		parede: inputs[3].value,
		teto: inputs[4].value
	}

	console.log(Armadilha)
}

resetarInputs()

// Testes
