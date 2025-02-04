---
title: JavaScript tutorial in English
slug: js-tutorial-in-english
description: This is a JavaScript tutorial this is for learning JavaScript
date: 10/10/2024
author: Mark
image: /blogimg/img1.webp

---

# Introduction

JavaScript is a versatile and powerful programming language that is primarily used for web development. It allows developers to create dynamic and interactive web pages, enhancing the user experience. In this tutorial, we will cover the basics of JavaScript, including its syntax, data types, functions, and how to manipulate the Document Object Model (DOM).

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that was created in 1995 by Brendan Eich. It is an essential part of web development, alongside HTML and CSS. While HTML provides the structure of a web page and CSS handles the styling, JavaScript adds interactivity and functionality.

## Why Learn JavaScript?

Learning JavaScript opens up a world of opportunities for developers. Here are a few reasons why you should consider learning JavaScript:

1. **Widely Used**: JavaScript is one of the most popular programming languages in the world. It is used by millions of developers and is supported by all modern web browsers.

2. **Versatile**: JavaScript can be used for both front-end and back-end development. With the advent of Node.js, developers can use JavaScript to build server-side applications as well.

3. **Rich Ecosystem**: The JavaScript ecosystem is vast, with numerous libraries and frameworks such as React, Angular, and Vue.js that simplify development and enhance productivity.

4. **Strong Community**: The JavaScript community is large and active, providing a wealth of resources, tutorials, and forums for developers to learn and share knowledge.

## Getting Started with JavaScript

To start coding in JavaScript, you need a text editor and a web browser. You can use any text editor, such as Visual Studio Code, Sublime Text, or even Notepad. For the browser, Google Chrome, Firefox, or Safari are great options.

### Your First JavaScript Program

Let's write a simple JavaScript program that displays a message in the console. Open your text editor and create a new file named `script.js`. Add the following code:

```javascript showLineNumbers
console.log("Hello, World!");
```
## Data types in JavaScript: 
Data types specifies the type of data that a variable can hold. In 
JavaScript while declaring a variable it is not required to specify the data type 
while declaring the variable. 
‘var’ is a predefined keyword through which we could declare variable 
in JavaScript

```bash
let name = "John"; // String
let age = 25; // Number
let isDeveloper = true; // Boolean
let fruits = ["Apple", "Banana"]; // Array
let person = { name: "Alice", age: 30 }; // Object
let a; // Undefined
let b = null; // Null
```

##  Type of Method: 

A predefined method being supported in JavaScript using which we 
could able to get type of data a variable is holding. 
It takes a variable as a parameter and returns, the type of data the 
variable is holding.

```bash
 var num = 10; 
        var name = 'airaz'; 
        console.log(typeof(age)); 
        console.log(typeof(name))
```
If any variable is not initialized it will be defined as undefined. 

## Type Casting: 

Converting a data type into another is known as type casting. 
Sometimes there is a need to convert the data type of one value to another. 
Under some circumstances JavaScript will perform automatic type 
conversion.

```javascript
 <script type="text/javascript"> 
   var num = "10"; 
   var name = 'ananth'; 
   console.log(typeof(num)); 
   num = parseInt(num); 
   console.log(typeof(num)); 
  </script>
  ```
## Control Structures: 
Following are the set of Control Structures being supported through 
which we could able to control the sequence of execution flow in a application. 
1. Conditional Control Structures. 
2. Looping Control Structures. 
3. Case Control Structures. 

 IF Condition: 
Use the if statement to specify a block of JavaScript code to be executed 
if a condition is true.

```javascript
 if (condition) { 
  // block of code to be executed if the condition is true 
  } 
```
 Else : 
Use the else statement to specify a block of code to be executed if the 
condition is false. 

```javascript
 if (condition) { 
 // block of code to be executed if the condition is true 
  } else { 
 // block of code to be executed if the condition is false 
 }
 ```
 Else if Statement : 
Use the else if statement to specify a new condition if the first condition 
is false. 

```javascript
if (condition1) { 
 // block of code to be executed if the condition1 is true. 
  } else if (condition2) { 
 // block of code to be executed if the condition1 is false and 
condition 2 is true. 
 } else { 
 // block of code to be executed if the condition1 is false and 
condition 2 is False. 
 } 
 ```
 Nested if: 
A nested if is an if statement that is the target of another if or else. 
Nested if statements means an if statement inside an if statement. Yes, 
JavaScript allows us to nest if statements within if statements. i.e., we can 
place an if statement inside another if statement. 

```javascript
: if (condition1) { 
 // block of code to be executed if the condition1 is true. 
  } if (condition2) { 
 // block of code to be executed if the condition 2 is true. 
 }
 ```

## Looping Control Structures: 
Looping Control Structures been supported in Java Script takes the set 
of instructions and repeat them for multiple times. 
### For Loop: 

Loops through a block of code a number of times.
```javascript
 for (initialization, <condition>, increment/decrement) { 
   // set of lines to be Executed  
       } 
<script type="text/javascript"> 
   var i; 
   var j=10; 
   for (i=1; i<=j; i++){ 
    console.log(i); 
   } 
   </script> 
   ```

## ➢ Difference between “=”, “= =” and “= = =”: 
• '=' it is an assignment operator using which we could able to assign a value 
of right side to the variable of left side. 
```javascript
Ex: var a=10; 
```
• '==' it is an comparison operator used to compare value of right side and 
returns a Boolean value (true/false) based on the equality of the values. 
```javascript

Ex:  var a = 10; 
 Var b = 11; 
 a==b; //returns false 
```
Note: '==' operator, while comparing values it only checks for value 
equality but not data type equality. 
• '===' it is almost like an equality ’==’ operator used to compare value 
equality were the only difference is while comparing values it will not just 
checks for value equality but it also checks for data type equality. 
```javascript
Ex:  var a = “10”; 
 var b = 10; 
 a===b;  // returns false. 
 ```
 ## While Loop Control Structure: 
It is almost like a for loop control structure issued to iterate instructions 
more than once were the only difference is while loop takes only the condition 
were the increment and decrement can be placed anywhere within the code. 

```javascript
while (condition) { -  - -  - -   
}
```
## Reading values through prompt: 
 
The prompt () method displays a dialog box that prompts the visitor 
for input. 
A prompt box is often used if you want the user to input a value before 
entering a page. 
By default it takes user input as string. 
 
Note: When a prompt box pops up, the user will have to click either "OK" or 
"Cancel" to proceed after entering an input value. Do not overuse this 
method, as it prevents the user from accessing other parts of the page until 
the box is closed. 
```javascript
 Syntax: var variable_Name = prompt (“text”)
 ```
## Do-while: 
It is almost like a while loop control structure used to repeat a set of 
instructions for more than once were the only difference is while loop will 
execute the instructions only when the provided condition is true, were as do
while executes the set of instructions at least for once irrelevant of whether 
provided condition is true or false. 

```javascript
 do { 
//set of instructions is executed for atleast once irrelevant 
to the provided condition is true or false 
} While (condition);
```
##  Case Control Structure: 
It takes multiple cases within it and invokes corresponding/particular 
case based on the value been passed. 
```javascript
Syntax: switch (<value>) { 

  Case <value> : 
    //statements 
     //statements 
    Break; 
   }
```

##  Variable Hosting: 
Most of the programming languages forces to declare a variable only at 
the starting of the program so that it can allocate the memory and then works 
on variable. 
• In JavaScript, it is not mandatory to declare the variables only at the 
starting of the program but can be declared any were we wanted. 
• While executing the application JavaScript performs variable hosting 
process in which it identifies all the variable declarations with in the 
application and moves all the declarations to starting of the applications. 
• The process of moving all the variable declarations to the starting of the 
application is called variable hosting. 
Note: 
While moving the declarations it only moves declarations to the starting 
but not the initialized values

## Data Structures: 
Following are the different data structures being supported in the JavaScript 
through which different type of data can be stored and retrieved

• Arrays 

• Json 

• Map 

• Set 

• Tables 

## Array Data Structure: 
A predefined data structure through which we could able to hold group 
of multiple values within it. 

• In JavaScript, arrays are the heterogeneous data structures capable of 
holding different types of data with in it. 

• Array is capable of holding different and multiple types of data, every other 
value will be identified with single variable name. 

• All the values within the array will be automatically assigned with a 
numeric index value. 

• The index value is always starts with “Zero”. 

• '[ ]' are always used to represent the arrays in any language. 

• Within the memory, arrays always occupy continuous memory allocation 
for all the values within it. 

• We make use combination of array name and corresponding index position 
while working with an array.

 Following are the two different ways we can create an array in JavaScript,

```javascript  
var a = new array( ) //dynamic allocation 
(OR) 
  var a = [ ]; // empty array 
  var a = [1, 2, 3, 4]; //declaring an array with values. 
Ex:  <script type="text/javascript"> 
   var a = [1, 2, 3, 4, 5]; 
   console.log(a); 
  </script>
```
##  Pre-Defined methods supports in array: 
Following are the some predefined methods supported by array in JavaScript, 

• Length: 
It is a property which returns the total number of values in an array. 
```javascript
 Syntax: arrayName.length; 
```
• Push(<values>): 
Used to insert single or multiple values to an array from right direction. 
```javascript
Syntax: arrayName.push(<value>); 
```
• Pop(): 
Used to delete single value from an array from right side. 
```javascript
Syntax: arrayName.pop(); 
```
• Shift(): 
Used to delete single value from an array from left direction. 
```javascript
Syntax: arrayName.shift();
 ```   

 • Unshift(<values>): 
Used to insert single/multiple values to an array from left direction. 
```javascript
Syntax: arrayName.unshift(<values>); 
```
• Splice(starting position, <no.of.values to be deleted>,<optional values 
to be inserted>): 
Used to insert or delete values. 
```javascript
Syntax: arrayName.splice(starting position, <no.of.values to be 
deleted>,<optional values to be inserted>); 
```
• Join(): 

Used to merge all the values of array to a single value with/without 
separator.

## Predefined methods can be applied on string: 
Every string being created in JavaScript internally it gets created in the 
form of an array. Following are the predefined methods can be applied on 
string in JavaScript, 

• Length: 
It returns the total number of characters within a string, including spaces. 

• charAt(<index>): 
Returns the character present at the provided index position. 

• charCodeAt(<index>): 
Returns the ASCII value of a character present at provided index position. 

• subStr(index,length of substring): 
Returns the substring from the given string. 

• replace(“what”,”with”): 
Used to replace the string parts with required strings. 

• Split(“optional separator”): 
Used to split the main string in the form of an array. 

• Includes(“<string>”): 
Checks weather the provided string is part of main string and returns true 
or false. 

• Indexof(“string”): 
Returns at what index provided substring exist in main string. 

• tolowercase(): 
Converts the provided string to lower case format. 

• touppercase(): 
Converts the provided string to upper case format. 

• Slice(start index, end index): 
Returns the substring from one index to other.

Note: 
Any string being defined in JavaScript it occupies the memory internally 
as like an array where each character occupies individual block with the 
corresponding index value.

## Working with JavaScript “Date” object: 
“Date” is a predefined class supported in JavaScript using which we 
could able to work with the systems current date or user defined custom date.

```javascript
var date = new Date(); //creates a reference of systems current date. 
 var date = new Date(<user specific date>); // user specific date
 ```

 Following are the predefined methods which can be applied on date 
object, 

• get Date(): 
Returns the current date value( 1st -31st ). 

• get Month(): 
Returns the current month value(0th-11th). 

• getFullYear(): 
Returns the full year 

• get Hours(): 
Returns the hours value. 

• get Minutes(): Returns 0-59 

• get Seconds(): Returns 0-59 

• get Milliseconds(): Returns 0-999 

• get Day(): Returns 0-6. 

## JavaScript functions: 
The set of instructions binded as a module with in "{ }" assigned with 
an user defined custom name which can be reused anywhere within the page 
is called a function. 

• In JavaScript ‘function’ is a predefined keyword using which we can 
define a function.[until ECMA6]. 

• In a single page we can define any number of functions in JavaScript. 

• Once the function ben defined it can be invoked any number of times 
through the function name. 

• While defining the function we name it through function keyword, while 
calling we simply use function name.

## Local variables and global variables: 
Any variable which is declared outside of a module will become global 
variable can be accessible anywhere within the application. 
Global variable can be accessible and modifiable anywhere within the 
page. 
Local variable can’t be accessed outside the module it can be accessed 
within the module. 

```javascript
 Ex: var a = 100 //global variable 
  Function test(){ 
   var a = 101; //local variable 
  } 
  ```
 ## Accessing private data of a function outside of it: 

• Through passing parameters while calling a function. 

• Returning value from called function to calling function. 

• Both passing parameters and returning values. 

## Passing parameters while calling a function: 
While calling a function within another function we could able to pass 
local-variables of calling function to called function. 

• While calling a function we can pass any number of parameters. 

• While defining a function we could able to catch the values being passed while calling a function, using temporary variables. 

• The parameters being passed while calling a function are called as actual parameters whereas the temporary parameter declared at function 
definition are called formal parameters. 

• While passing formal parameters at function definition we don’t need to 
specify or declare those parameters we simply specify the variable names. 

##  "Arguments" Keyword: 
A predefined keyword supported in JavaScript and by default available 
in every function which holds all the parameter values been passed to that 
function in the form of an array. 
• In JavaScript it is mandatory to catch the parameters in function definition 
while matching function call with function definition it only matches 
function name but never looks for type of parameter or number of 
parameters being passed. 
• Irrelevant of whether the parameters been catched or not, arguments 
keyword gets created in every function and holds all the parameters being 
passed to it in the form of an array.

## JSON Data Structure: 
JSON is derived as JavaScript Object Notation. 
• It is predefined data structure being supported in JavaScript by default. 
• It is used to not just hold the data but, holds the data with the extra 
information of particular data. 
• The JSON Data gets stored in the format of key and value based. 
Ex: key: value, 
       Key2: value2; 
• All the keys within the JSON Object should be only string data type, 
whereas the corresponding value could be of any JavaScript supported 
Data Type. 
• While accessing data from object we make use of the combination of object 
name and corresponding key.

##  Memory allocation of JSON object: 
Internally JSON object gets memory allocated same as like an array 
where the only difference is, the key of the data is assigned as index value by 
default.

##  Anonymous function: 
Any function which is defined without a name is called an anonymous 
function. In case we want to define a function it will be invoked only once 
within the function do not waste the memory by giving a name to it, we can 
simply create anonymous function. 
```javascript
 function (){ 
      }
```

 ## thisKeyword: 
A predefined Key word been supported in JavaScript which refers the 
current object data. 
In order to access objects data within its corresponding methods, we can 
access either by using object name or by using this keyword.

##  for in loop Control Structure: 
A Predefined looping Control Structure through which we could able to 
iterate over a JSON object.

## JavaScript 'setTimeout' and 'setInterval' methods: 
A two predefined methods been supported in JavaScript using which 
we could able to invoke set of instructions not just when the controller reaches 
to it but, executes the set of instructions only after the provided interval time. 

```javascript
 Syntax: setTimeout(<callbackmethod>,<delayvalue>);
 ```
### setInterval and setTimeout 
Always works the same where the only 
difference is setTimeout invokes the function only once after the provided 
interval time whereas setInterval method invokes the call-back method 
repeatedly with a gap of provided interval time. 

# ECMA-6: 
• It is trade mark scripting language specifications standardize by ECMA 
(European Computer Manufactures Association Script) international 
org. 

• It was created to standardize JavaScript as to faster multiple 
implementations. 

• ECMA-6 is also called as ECMA 2019 which was released after a long gap 
after 2009. 

• This release added a significant new syntax for writing complex applications 
including classes and modules etc… 

• The other new feature includes iterators, forEach, forOf looping control 
structures arrow functions, type array, collections, promises etc… 

## Difference between let, const and var key-words: 
```javascript
• var Key-word: 
Variable gets created using var keyword becomes module scope. 
Ex:  var a = 10; 
 var data = ( ) => { 
  var b = 20; 
  res = a + b; // here a can be accessible  
  if (a > 5) { 
   var d = 10; 
   console.log(b); 
   console.log(a); //here both a and b is accessible 
} 
Console.log(d)  // here d is accessible 
 }  
 Console.log(b); // here b is not accessible outside the module. 
 ```
 ## Let Key-word: 
Using let key-word we could able to create block scoped variables. The 
variables being created using let keyword can be accessible under a 
particular block and cannot be accessed outside of the block. 
```javascript
 Ex:  var a = 10; 
 var data = ( ) => { 
  let b = 20; 
  res = a + b; // here a can be accessible  
  if (a > 5) { 
   let d = 10; 
   console.log(b); 
   console.log(a); //here both a and b are accessible 
} 
Console.log(d)  // here d is not accessible because it is 
inside the block 
 }  
 Console.log(b); // here b is not accessible outside the module.
 ```

## Const Key-Word: 
Variable been declared using CONST, once we initialize the variable 
we couldn’t able to change the value in it. 
```javascript
Ex: const age = 20; 
age++;  //here age cant be incremented because the value 
we declared const age = 20 is final.
```

## forEach looping Control Structure: 
A predefined looping control structure we could able to iterate over an 
array which takes a call back method and throws the corresponding value and 
index value. 
```javascript
Syntax: a = [10,20,30]; 
  a.forEach ( (value,index) => { console.log(value); }; 
```

JavaScript Arrow Function: 

From ECMA-6 to define a function within JavaScript we won’t be using 
the function keyword but we can declare the function just by using arrow 
symbols (=>). 
```javascript
 Syntax: var sample = ( ) => { 
        .... 
      } 
```
The main intention of using arrow functions is it holds current this 
operator. Even that particular function gets called after some time. 

###  Function parameters with default values: 
From ECMA-6 JavaScript supports a feature of having default values 
for formal parameters which will be considered automatically if there 
corresponding values were not being passed for actual parameters. 
```javascript
Syntax: var a = (param1 = val1, param2 = val2,…){ 
   …. 
  } 
  a(val1) //here value 2 is taken from default parameter. 
  ```

## Extended parameter handling: 
"…" is an extended operator being supported in JavaScript using which 
all the parameters which are not been handled will be automatically catched in 
the form of an array.

## Template literals or Template strings: 
Using template literals we could able to replace part of a string with 
given value, 
```javascript
Ex: var Name = ‘Raj’; 
   var Age = 60; 
   var msg = `username is ${Name} and age is ${Age}`;
   ```
## Java Script Classes: 
• From ECMA-6 JavaScript supports a keyword called class through which 
we could able to create a class in JavaScript. 

• Classes are used to create the basic structure of an object or skeleton of an object. 

• For a single class we can create any number of objects. 

• "new" is a predefined keyword through which we could able to instantiate a class in JavaScript. 

• "Constructor" is an predefined keyword through which we could able to 
add a Constructor in JavaScript.

• "Super" is a predefined keyword through which we can invoke constructor of a parent class through child class. 

• In JavaScript we cannot override constructor method. 

## Exponentiation operator: 
"**" is a new exponentiation operator supported from ECMA-6 through 
which we could able to find a power of numbers. 
```javascript
Ex: let a = 2**3; 
```
## Array assigned values: 
If multiple values need to be assigned at a time, we could able to declare the values under an array and assign array of values to it. 
```javascript
Ex: [a, b, c] = [10, 20, 30]; 
```
## Set’s and Map’s Data Structure: 
The two predefined data structures been supported in ECMA-6, 

## Set data Structure: 
It is almost like an array data structure used to hold group of relative 
items to identify the content with same variable name. The only difference between sets and arrays are set accepts only unique values, doesn’t allow 
duplicate values. 
```javascript
Syntax: var demo = new Set( ); //Creates a Set DataStructure. 
```
• Following are some predefined methods that can be applied on SET: 

▪ add(<value>) // adds values to Set 

▪ set //returns total number of values in set 

▪ values( ) //returns values with set 

▪ has(“value”)//returns a Boolean value in provided string present set 

▪ clear //clears all the values from set. 

▪ Delete(“value”) //Deletes a value from set

## for of Control Structure: 
A predefined looping control structure through which we could able to 
iterate over a SET or MAP data structure. 

```javascript
Syntax: for (var tempData of set.values()) { 
  …. 
  }
```
## Map Data Structure: 
A predefined data structure almost like an JSON object used to hold the 
data in the form of key value pairs. 
```javascript
Syntax: var demo = new Map( ); 
```
• Following are predefined methods can be applied on Map, 

▪ set(“key”,”value”); // to add value with corresponding key. 

▪ get(“key”) //throws corresponding value to a particular key. 

▪ entries ( ) //return values with a map. 

▪ Clear( ) //clears data from MAP 

▪ Delete (“key”) //deletes corresponding key and its value from 

map 
Syntax to iterate Map Data Structure: 
```javascript
 for (var [key,index] of map.entries()) { 
    .....; 
 };
 ```

## JavaScript Promises: 
A new topic been supported from ECMA-6, promise is an object which 
represents the eventual, successful compilation or failure of a asynchronous 
operation and its corresponding value. 

• Every promise takes a resolver and rejection call back function which gets 
invoked based on success or error. 

• "promise" is a predefined class through which we can create any number 
of promises with in a single page application (SPA). 
Syntax: var promise =  
new Promise((success resolver callback,  rejectorCallback ) => { 
}); 

• Invoking Promise: 
Method(<optionalparam>).then(successcallback).catch(error 
callback);

##  Async and Await: 
More recent additions to the JavaScript language are async 
functions and the await keyword, added in ECMAScript 2017. There are two 
parts to using async/await in your code. 
#### The Async keyword: 

First of all, we have the async keyword, which you put in front of a 
function declaration to turn it into an async function. An async function is 
a function that knows how to expect the possibility of the await keyword 
being used to invoke asynchronous code. The async keyword is added to 
functions to tell them to return a promise rather than directly returning the 
value.

#### The await keyword: 
The advantage of an async function only becomes apparent when 
you combine it with the await keyword. await only works inside async 
functions within regular JavaScript code, however it can be used on its 
own with JavaScript modules. 
await can be put in front of any async promise-based function to 
pause your code on that line until the promise fulfils, then return the 
resulting value.