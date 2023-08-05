class Calculator {
	constructor(previousOperation, currentOperation){
		this.previousOperationElement = previousOperationElement;
		this.currentOperationElement = currentOperationElement;
		this.clear();
	}
	
	clear() {
		this.currentOperation = '';
		this.previousOperation = '';
		this.operation = undefined;
	}

	delete() {

	}

	appendNumber(number) {
		if (number === '.' && this.currentOperation.includes('.')) return;
		this.currentOperation = this.currentOperation.toString() + number.toString();
	}

	chooseOperation(operation) {
		this.operation = operation;
		this.perviousOperation = this.currentOperation;
		this.currentOperation = '';
	}

	compute() {

	}

	updateDisplay() {
		this.currentOperationElement.innerText = this.currentOperation;
		this.previousOperationElement.innerText = this.previousOperation;
	}
}

const previousOperationElement = document.querySelector('[data-previous-operation]')
const currentOperationElement = document.querySelector('[data-current-operation]')

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const clearButton = document.querySelectorAll('[data-clear]')
const shiftButton = document.querySelectorAll('[data-shift]')
const delButton = document.querySelectorAll('[data-delete]')
const logButton = document.querySelectorAll('[data-log]')
const lnButton = document.querySelectorAll('[data-ln]')
const piButton = document.querySelectorAll('[data-pi]')
const inverseButton = document.querySelectorAll('[data-inverse]')
const squareButton = document.querySelectorAll('[data-square]')
const exponentButton = document.querySelectorAll('[data-exponent]')
const openBracketButton = document.querySelectorAll('[data-openbracket]')
const closeBracketButton = document.querySelectorAll('[data-closebracket]')
const sinButton = document.querySelectorAll('[data-sin]')
const cosButton = document.querySelectorAll('[data-cos]')
const tanButton = document.querySelectorAll('[data-tan]')
const negativeButton = document.querySelectorAll('[data-negative]')

const calculator = new Calculator(previousOperationElement, currentOperationElement);

// for number buttons 0,1,2,3,...9
numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	})
})

// for operation buttons
operationButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	})
})