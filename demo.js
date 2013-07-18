var testsPassed = 0;
var testsRun = 0;

function add (a,b){
	return a + b;
};

function subtract(a,b){
	return a - b;
};

function multiply(a, b){
	return a * b;
};

function divide(a,b){
	if (b === 0){
		throw "divisionbyzeroexception";
	}
	else{
		return a / b;
	}
}

function TestAddWithConsoleAssert(){
	var expected = 5;
	var result = add(1,2);
	console.assert(expected === result, "TestAdd failed.  Expected: " + expected + ", Actual: " + result);
};


function TestAdd(){
	testsRun++;
	var expected = 4;
	var result = add(1,2);
	try{
		if (expected !== result){
			throw("TestAdd failed.  Expected: " + expected + ", Actual: " + result);
		}
	}
	catch(e){
		console.warn(e);
		return;
	}
	testsPassed++;
	console.log('TestAddWithThrows passed.');
};

function TestSubtract(){
	testsRun++;
	var expected = 5;
	var result = subtract(10, 5);
	try{
		if (expected !== result){
			throw("TestSubtract failed.  Expected: " + expected + ", Actual: " + result);
		}
	}
	catch(e){
		console.warn(e);
		return;
	}
	testsPassed++;
	console.log('TestSubtract passed.');
};

function TestMultiply(){
	testsRun++;
	var expected = 9;
	var result = multiply(3,3);
	try{
		if (expected !== result){
			throw("TestMultiply failed.  Expected: " + expected + ", Actual: " + result);
		}
	}
	catch(e){
		console.warn(e);
		return;
	}
	testsPassed++;
	console.log('TestMultiply passed.');
};

function TestMultiplyByZero(){
	testsRun++;
	var expected = 0;
	var result = multiply(15544,0);
	try{
		if (expected !== result){
			throw("TestMultiplyByZero failed.  Expected: " + expected + ", Actual: " + result);
		}
	}
	catch(e){
		console.warn(e);
		return;
	}
	testsPassed++;
	console.log('TestMultiplyByZero passed.');
};

function TestDivide(){
	testsRun++;
	var expected = 6;
	var result = divide(72,12);
	try{
		if (expected !== result){
			throw("TestDivide failed.  Expected: " + expected + ", Actual: " + result);
		}
	}
	catch(e){
		console.warn(e);
		return;
	}
	testsPassed++;
	console.log('TestDivide passed.');
};

function TestDivideByZero(){
	testsRun++;
	var expected = 'divisionbyzeroexception';
	var result = 0;
	try{
		result = divide(72,0);
	}
	catch(e){
		try{
			if (expected !== e){
				throw("TestDivide failed.  Expected: " + expected + ", Actual: " + e);
			}
		}
			catch(ex){
				console.warn(ex);
				return;
			}		
		testsPassed++;
		console.log('TestDivideByZero passed.');
		return;
	}
	console.warn('TestDivideByZero failed.  Expected exception, none thrown.');
};

function RunAllTests(){
	console.group('Addition Tests');
	TestAdd();
	console.groupEnd();
	console.group('Subtraction Tests');
	TestSubtract();
	console.groupEnd();
	console.group('Multiplication Tests');
	TestMultiply();
	TestMultiplyByZero();
	console.groupEnd();
	console.group('Division Tests');
	TestDivide();
	TestDivideByZero();
	console.groupEnd();
	console.info(testsPassed + '/' + testsRun + ' tests passed.');
	if (testsPassed !== testsRun){
		console.error('NOPE!  You have failing tests, you should probably go fix that before you do anything else.');
	}
};





