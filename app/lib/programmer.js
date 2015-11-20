import Ember from 'ember';

export var bestLanguages = ["Ruby", "Elixir"];

export function addJavaScript(languages){
	let newArray = Ember.copy(languages);
	newArray.push("JavaScript");
	return newArray;
}

export default class Programmer {
	constructor(name,language="Ruby"){
		this.name = name;
		this.language = language;
	}
	evangelize(){
		return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
	}
}
