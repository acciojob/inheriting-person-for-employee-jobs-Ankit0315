// complete this js code
function Person(name, age) {
	constructor(name,age){
		this._name=name;
		this._age=age;
		
	}
	greet(){
console.log(`Hello, my name is ${this._name}, I am ${this._age} year old.`)
	}
}

function Employee(name, age, jobTitle) {
	constructor(name,age,jobTitle){
		this._name= name;
		this._age= age;
		this._jobTitle=jobTitle;
	}
	__proto__:Person;
	jobGreet(){
console.log(`Hello, my name is ${this._name}, I am ${this._age} year old, and my job title is ${this._jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
