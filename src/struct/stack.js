function Stack() {
	var items = [];
	this.push = function (element) {
		items.push(element);
	};
	this.pop = function () {
		return items.pop();
	};
	this.peek = function () {
		return items[items.length - 1];
	};
	this.isEmpty = function () {
		return items.length === 0;
	};
	this.size = function () {
		return items.length;
	};
	this.clear = function () {
		items = [];
	};
	this.print = function () {
		console.log(items.toString());
	};
}


function divideBy2(decNumber) {
	let remStack = new Stack(),
		remString = '',
		rem = 0;
	while(decNumber !== 0) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}
	while(!remStack.isEmpty()) {
		remString += remStack.pop().toString()
	};
	return remString;
}

console.log(divideBy2(10));