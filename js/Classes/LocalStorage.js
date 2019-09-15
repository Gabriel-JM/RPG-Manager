class LocalStorage {

	constructor(key) {
		this.key = key
	}

	addToStorage(value) {
		let arr = [];
		if(localStorage[this.key]) {
			arr = JSON.parse(localStorage.getItem(this.key))
			value.id = this.generateId()
			console.log(value, value.id)
			arr.push(value)
			localStorage.setItem(this.key, JSON.stringify(arr))
		} else {
			value.id = arr.length + 1
			arr.push(value)
			localStorage.setItem(this.key, JSON.stringify(arr))
		}
	}

	getFromStorage() {
		return JSON.parse(localStorage.getItem(this.key))
	}

	removeFromStorage(id) {
		const elements = this.getFromStorage()

		elements.forEach((elem, index) => {
			if(elem.id === id) {
				elements.splice(index, 1)
			}
		})

		localStorage.setItem(this.key, JSON.stringify(elements))
		console.log(this.getFromStorage())
	}

	generateId() {
		let result = undefined
		const ids = this.getFromStorage().map(e => e.id)

		ids.forEach((elem, index) => {
			if(elem !== index + 1) {
				result = index + 1
			}
		})

		return (result) ? result : ids.length + 1
	}

}