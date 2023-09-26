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
		this.currentOperation = this.currentOperation.toString().slice(0,-1);
	}

	appendNumber(number) {

		/* Check for decimal, cannot put in two or more decimal points */
		if (number === '.' && this.currentOperation.includes('.')) return;
		console.log(number);
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
		this.currentOperationElement.innerText = this.currentOperation
		if (this.operation != null) {
			console.log('cat')
			this.previousOperationElement.innerText = this.previousOperation + " " + this.operation;
		} else {
			console.log('Whale')
			this.previousOperationElement.innerText = '';
		}
		
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
const negativeButton = document.querySelectorAll('[data-negative]')

const previousOperationElement = document.querySelector('[data-previous-operation]')
const currentOperationElement = document.querySelector('[data-current-operation]')

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

equalsButton.forEach(button => {
	button.addEventListener('click', () => {
		calculator.compute();
		calculator.updateDisplay();
	})
})


clearButton.forEach(button => {
	button.addEventListener('click', () => {
		calculator.clear();
		calculator.updateDisplay();
	})
})

delButton.forEach(button => {
	button.addEventListener('click', () => {
		calculator.delete();
		calculator.updateDisplay();
	})
})
