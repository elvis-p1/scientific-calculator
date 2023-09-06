class Calculator {
	constructor(previousOperationElement, currentOperationElement){
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
		if (this.currentOperation === '') return;
		if (this.previousOperation !== '') {
			this.compute();
		}
		this.operation = operation;
		this.previousOperation = this.currentOperation;
		this.currentOperation = '';
		console.log('operation: ' + operation);
	}

	compute() {
		let computation;
		const prev = parseFloat(this.previousOperation);
		const current = parseFloat(this.currentOperation);
		if (isNaN(prev) || isNaN(current)) return;
		switch (this.operation) {
			case '+':
				computation = prev + current;
				break;
			case '-':
				computation = prev - current;
				break;
			case 'x':
				computation = prev * current;
				break;
			case '÷':
				computation = prev / current;
				break;
			default:
				return;
		}
		this.currentOperation = computation;
		this.operation = undefined;
		this.previousOperation = '';
	}

	updateDisplay() {

		console.log('current: ' + this.currentOperation);
		console.log('prev: ' + this.previousOperation);
		this.currentOperationElement.innerText = this.currentOperation;
		this.previousOperationElement.innerText = this.previousOperation;
		
	}
}

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

const previousOperationElement = document.querySelector('[data-previous-operation]')
const currentOperationElement = document.querySelector('[data-current-operation]')

const calculator = new Calculator(previousOperationElement, currentOperationElement);

// for number buttons 0,1,2,3,...9
numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
		console.log('number')
	})
})

// for operation buttons
operationButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
		console.log('op')
	})
})

equalsButton.forEach(button => {
	button.addEventListener('click', () => {
		calculator.compute();
		calculator.updateDisplay();
		console.log('equals')
	})
})


clearButton.forEach(button => {
	button.addEventListener('click', () => {
		calculator.clear();
		calculator.updateDisplay();
		
	})
})