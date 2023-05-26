//In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files
//A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");




//Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax

import * as stringFunctions from "./string_functions.js";
// add code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");



//In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files

export default function(x,y){
 return x+y
}












