class LocalStorage {

	constructor(key) {
		this.key = key
	}

	addToStorage(value) {
		let arr;
		if(localStorage[this.key]) {
			arr = JSON.parse(localStorage.getItem(this.key))
			arr.push(value)
			localStorage.setItem(this.key, JSON.stringify(arr))
		} else {
			arr = []
			arr.push(value)
			localStorage.setItem(this.key, JSON.stringify(arr))
		}
	}

	getFromStorage() {
		return JSON.parse(localStorage.getItem(this.key))
	}

}