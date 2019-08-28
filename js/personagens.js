let addform = document.getElementById('add-per-form')
let addbtn = document.getElementById('add-p')
let playerZone = document.getElementById('players-zone')
let rpgChars = JSON.parse(localStorage.getItem("RPGchars"))

function addCharsToScreen() { 
    if(validateNames(rpgChars)) {
        updateAnItemOfStorage("RPGchars", rpgChars)
    }
    removeEmptyKeysFromStorage()
    if(rpgChars) {
        for(let j of rpgChars) {
            if(verifyAnItemInStorage(j)) {
                let pers = JSON.parse(localStorage.getItem(j))
                createCharDiv(pers)
            }
        }
    }
}

function validateNames(arr) {
    for(let i in arr) {
        if(arr[i] == "") {
            removeObjects(arr[i], arr)
            return true
        }
    }
    return false
}

function updateAnItemOfStorage(key, arr) {
    let arrayUpdated = JSON.stringify(arr)
    localStorage.setItem(key, arrayUpdated)
}

function removeEmptyKeysFromStorage() {
    for(let item in localStorage) {
        if(item.toString() == "")
            localStorage.removeItem(item)
    }
}

function verifyAnItemInStorage(item) {
    for(let i=0; i<localStorage.length; i++) {
        if(item === localStorage.key(i)) return true
    }
}

function createCharDiv(pers) {
    playerZone.innerHTML += `<div class='charSheet' id='${pers.nome}'>
        Nível<input type='text' class='cor-nivel' value='${pers.nivel}'> 
        Nome<input type='text' class='cor-nome' value='${pers.nome}'> 
        Xp<input type='text' class='cor-xp' value='${pers.xp}'> 
        Gold<input type='text' class='cor-gold' value='${pers.gold}'>
        <div class='deleteBtn' onClick='deleteChar(this.parentElement)'>X</div>
    </div><br>`
}

function deleteChar(c) {
    rpgChars = JSON.parse(localStorage.getItem("RPGchars"))
    if(confirm("Você deseja deletar " + c.childNodes[3].value + "?")) {
        let charName = rpgChars.find(n => n === c.childNodes[3].value)
        localStorage.removeItem(charName)
        removeObjects(charName, rpgChars)
        addToLocalStorage("RPGchars", rpgChars)
        c.parentElement.removeChild(c)
    }
}

function removeObjects(objectsToRemove, array) {
    let i = array.indexOf(objectsToRemove.toString())
    if(i !== -1) {
        array.splice(i, 1)
    }
}

function addToLocalStorage(key, value) {
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
}

function clearInputs() {
    addform.nome.value = "";
    addform.nivel.value = "";
    addform.xp.value = "";
    addform.gold.value = "";
}

addbtn.addEventListener('click', function() {
    if(confirm("Você tem certeza que deseja adicionar o personagem?")) {
        let storageKey = addform.nome.value
        let charStatus = {
            nivel: addform.nivel.value,
            nome: addform.nome.value,
            xp: addform.xp.value,
            gold: addform.gold.value
        }

        let names = []
        if(localStorage.RPGchars) {
            names = JSON.parse(localStorage.getItem("RPGchars"))
        }
        names.push(storageKey)
        validateNames(names)
        addToLocalStorage("RPGchars", names)
        addToLocalStorage(storageKey, charStatus)
        if(charStatus.nome != "") {
            createCharDiv(charStatus)
        }
    }
    removeEmptyKeysFromStorage()
    clearInputs()
})

addCharsToScreen()