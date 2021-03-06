/**************************************************************************
 * Execution       : Default node             cmd> node primeNumber.js
 * Purpose         : To print the prime number between 0 to 1000.
 * @description
 * 
 * @file            : primeNumber.js
 * @overview        : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 29/01/2019
 ***************************************************************************/
/**
 * for accessing data from the utility file.
 */
var access = require('../Utility/utility')
/**
 * read variable reads the input from user
 */
var read = require('readline-sync');
/**
 * accessing primenumber function from utility.js
 */
access.primenumber();