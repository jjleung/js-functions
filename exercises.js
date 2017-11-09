/*
* A function is a block of code (a series of instructions) designed to execute a certain task. Functions allow you to reuse code.
 
* i.e. A function to generate a greeting to specific person you designate:*/

// Step One: Define the function.
function greeting(guest){ // takes in a parameter named 'guest' which acts like a local variable inside the function
 return "Good afternoon " + guest + ".";  // the output value after the function is invoked
}
greeting("Mr. Smith"); // invoking or calling the function to execute the code (instructions) inside the function.

// Step Two: Assign the function invocation to a variable.
var testGreeting = greeting("Mr. Smith"); // assigning the function call into a variable 

// Step Three: Console.log the variable to test function output!
console.log(testGreeting); // printing the output value of the function.

// From your terminal, try running this file with node in order to see the result of `console.log(testGreeting);`

/*Below are some specifications for Functions to be built. */
/*
 * #1
 * Declare two variables
 *   @variable Datatype: Number `bango1`
 *   @variable Datatype: Number `bango2`
 *
 * These two variables will be used to invoke the functions #2 - #5.
*/ 

var bango1 = 5; var bango2 = 6;

/*
 * #2
 * Function - add
 * Create a function named `add` which will take two parameters: `num1` and `num2`.
 * 
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will add two numbers (the parameters, `num1` and `num2`) and 
 * return the sum of these two numbers.
 * Invoke the function and assign it to a variable named `sum`.
 * Console.log `sum` to test your code.
*/
console.log("** * * Problem #2 * * **");

function add(num1, num2){

	return num1 + num2;
}
var sum = add(bango1, bango2);
console.log("sum: " + sum);

console.log("-------------------------------------------------------------------------");



/*
 * #3
 * Function - subtract
 * Create a function named `subtract` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will subtract two numbers and return the difference of these two numbers.
 * Invoke the function and assign it to a variable named `difference`.
 * Console.log `difference` to test your code.
*/ 

console.log("** * * Problem #3 * * **");

function subtract(n1, n2){

	return n1-n2;
}
var difference = subtract(bango1, bango2);
console.log("difference: " + difference);

console.log("-------------------------------------------------------------------------");



/*
 * #4
 * Function - multiply
 * Create a function named `multiply` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will multiply two numbers and return the product of these two numbers.
 * Invoke the function and assign it to a variable named `product`.
 * Console.log `product` to test your code.
*/

console.log("** * * Problem #4 * * **");

function multiply(n1, n2){

	return n1*n2;
}
var product = multiply(bango1, bango2);
console.log("product: " + product);


console.log("-------------------------------------------------------------------------");


/*
 * #5
 * Function - divide
 * Create a function named `divide` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will divide two numbers and return the quotient of these two numbers.
 * Invoke the function and assign it to a variable named `quotient`.
 * Console.log `quotient` to test your code.
*/

console.log("** * * Problem #5 * * **");

function divide(n1, n2){

	return n1/n2;
}
var quotient = divide(bango1, bango2);
console.log("quotient: " + quotient);


console.log("-------------------------------------------------------------------------");


/*
 * #6
 * Function - checkSum
 * Create a function named `checkSum` which will take a parameter: `x`.
 *
 *   @param Datatype: Number `x`
 *   @return Datatype: String
 *
 * This function will return the string "Mariah Carey has been married `x` amount of times." Where `x` is the value when you invoke the function. Invoke this function using the variable `daDiva`. 
 * Console.log your result.
*/

console.log("** * * Problem #6 * * **");

function checkSum(x){

	return "Mariah Carey has been married " + x + " amount of times.";
}

var daDiva = checkSum(sum);
console.log("daDiva: " + daDiva);

console.log("-------------------------------------------------------------------------");


/*
 * #7
 * Function - checkDifference
 * Create a function named `checkDifference` which will take a parameter `x`.
 *
 *    @param Datatype: Number `x`
 *    @return Datatype: String
 *
 * This function will return the string "Last night I dreamt that I ate `x` Taco Bell soft tacos."  Where `x` is the value when you invoke the function. Invoke this function using the variable `difference`.
 * Console.log your results.
*/ 
console.log("** * * Problem #7 * * **");

function checkDifference(x){

	return "Last night I dreamt that I ate " + x + " Taco Bell soft tacos.";
}


console.log("checkDifference(difference): " + checkDifference(difference));

console.log("-------------------------------------------------------------------------");
/*
 * #8
 * Function - checkProduct
 * Create a function named `checkProduct` which does not require any parameters.
 *
 *    @return Datatype: Number
 *
 * This function will multiply the values stored in the sum and product variables.
 * Console.log your result.  
*/
console.log("** * * Problem #8 * * **");

function checkProduct(){

	return sum * product;
}

console.log("checkProduct: " + checkProduct());

console.log("-------------------------------------------------------------------------");

/*
 * #9
 * Function - checkQuotient
 * Create a function named `checkQuotient` which does not require any parameters.
 *
 *    @return Datatype: Number
 *
 * This function will multiply the values stored in the product and quotient variables.
 * Console.log your result.  
*/

console.log("** * * Problem #9 * * **");

function checkQuotient(){

	return product * quotient;
}

console.log("checkQuotient: " + checkQuotient());

console.log("-------------------------------------------------------------------------");

/*
 * Declare three variables
 *   @variable Datatype: Number `bango3`
 *   @variable Datatype: Number `bango4`
 *   @variable Datatype: Number `bango5`
 
 * #10
 * Function - addThenSubtract
 *   
 * Next, create a function named addThenSubtract which takes three parameters: `num1`, `num2`, `num3`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @param Datatype: Number `num3`
 *    @return Datatype: Number
 *
 * This function will add the first two parameters together. Then with the sum of that operation, subtract it from the third parameter. PLEASE USE YOUR PREVIOUS FUNCTIONS FOR THIS EXERCISE. 
 * Console.log your result.
*/ 

console.log("** * * Problem #10 * * **");

var bango3 = 1; var bango4 = 2; var bango5 = 3;

function addThenSubtract(n1, n2, n3){

	return subtract(n3, add(n1, n2));
}

console.log("addThenSubtract: " + addThenSubtract(bango3, bango4, bango5));

console.log("-------------------------------------------------------------------------");

/*
 * #11
 * Function - multiplyThenDivide
 * Create a function named multiplyThenDivide which takes three parameters: `num1`, `num2`, `num3`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @param Datatype: Number `num3`
 *    @return Datatype: Number
 *
 * This function will multiply the first two parameters together. Then with the product of that operation, divide it from the third parameter. PLEASE USE YOUR PREVIOUS FUNCTIONS FOR THIS EXERCISE. 
 * Console.log your result.
*/ 

console.log("** * * Problem #11 * * **");

function multiplyThenDivide (n1, n2, n3){

	return divide(n3, multiply(n1,n2));
}

console.log("multiplyThenDivide: " + multiplyThenDivide(bango3, bango4, bango1));

console.log("-------------------------------------------------------------------------");

/*
 * #12
 * Function - createFullName
 * Create a function named createFullName which takes two parameters: `firstName`, `lastName`.
 *
 *   @param Datatype: String `firstName`
 *   @param Datatype: String `lastName`
 *   @return Datatype: String
 *
 *  This function `returns` back a string which represents someone's full name. Invoke this function by passing in your first  and last name into the function. Store the return value into a variable named `myFullName` and console.log this variable to show your result.
*/

console.log("** * * Problem #12 * * **");

function createFullName(firstName, lastName){

	return firstName + " " + lastName;
}

console.log("createFullName: " + createFullName("Jesse", "Leung"));

console.log("-------------------------------------------------------------------------");

/*
 * #13 
 * Function - eatFood
 * Create a function named eatFood which takes three parameters: `firstName`, `lastName`, `food`.
 *
 *   @param Datatype: String `firstName`
 *   @param Datatype: String `lastName`
 *   @param Datatype: String `food`
 *   @return Datatype: String
 *
 * This function will use the previous `createFullName` function above to create a message. For example, if you invoked the function like this: eatFood("Biggie", "Smalls", "Won Ton Soup"); it will display the message "Biggie Smalls eats Won Ton Soup everyday for breakfast."
 * Console.log your result.
 */

console.log("** * * Problem #13 * * **");

function eatFood(firstName, lastName, food){
	
	return createFullName(firstName, lastName) + " eats " + food + " everyday for lunch."
}

console.log("eatFood: " + eatFood("The", "Coup", "pork and beef"));

console.log("-------------------------------------------------------------------------");

/************** ENGAGE HYPERDRIVE **************/
/* No more training wheels! For the exercises #14-18, use the experience you've
*  gained figure out how to build the necessary functions. Use your google-fu to 
*  figure out anything you don't know! Ganbatte (good luck)! */
/************** FIRE ALL CANNONS ***************/

/*
 * #14
 * Function shoeSize
 * Create a function that will take in a parameter named `inches`. This function will convert inches to centimeters(cm).
 * Console.log your result. 
*/

console.log("** * * Problem #14 * * **");

function shoeSize(inches){

	return inches + " inches = " + multiply(inches, 2.54) + " centimeters"
}

console.log("shoeSize: " + shoeSize(5));

console.log("-------------------------------------------------------------------------");

/*
 * #15
 * Function allCaps
 * Create a function that will take in a parameter named `str`. 
 * This function will capitalize all the letters in the string. 
 * Console.log your result.
 * Example input: "believe you can and you're halfway there."
 * Example output: "BELIEVE YOU CAN AND YOU'RE HALFWAY THERE."
*/
 
console.log("** * * Problem #15 * * **");

function allCaps(str){

	return str.toUpperCase();
}

console.log("allCaps: " + allCaps("Is it capitalized now?"));

console.log("-------------------------------------------------------------------------");

/*
 * #16
 * Function oneCap
 * Create a function that will take in a parameter named `str`. 
 * This function will capitalize only the first letter in the variable phase above. 
 * Console.log your result.
*/

console.log("** * * Problem #16 * * **");

function oneCap(str){

	return str.charAt(0).toUpperCase() + str.substring(1);

}

console.log("oneCap: " + oneCap("just the first letter"));

console.log("-------------------------------------------------------------------------");

/*
 * #17
 * Function - verifyDrinkingAge
 * Create a function named verifyDrinkingAge which takes a parameter named `age`. 
 * This function returns a Boolean value, `true` or `false`, depending on 
 * whether `age` is above or below the legal drinking age in the state of Hawaii.
 *
 * Call this function and pass in a number value.
 * Store the return value to a variable named `canDrink`. Console.log your result.
 */

console.log("** * * Problem #17 * * **");

function verifyDrinkingAge(age){

	return age >= 21;
}

var canDrink = verifyDrinkingAge(25);
console.log("verifyDrinkingAge(25): " + canDrink);

console.log("-------------------------------------------------------------------------");

/**
 * #18
 * Function - throwParty
 * Create a function named throwParty. This function will check the value stored in the `canDrink` variable in the previous exercise. If the value is true, it will return the message "Cheee Hoo! We going to da party!" If false, then it will return the message "Meh, see you at Starbucks." Store the return value to a variable named `canParty`. Console.log your result.
 */

console.log("** * * Problem #18 * * **");

function throwParty(age){
	var outPut = "";

	if (verifyDrinkingAge(age)){
		outPut = "Cheee Hoo! We going to da party!";
	}
	else {
		outPut = "Meh, see you at Starbucks.";
	}


	return outPut;
}

console.log("throwParty(25): " + throwParty(25));
console.log("throwParty(20): " + throwParty(20));

console.log("-------------------------------------------------------------------------");



