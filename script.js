
//Day 1 : Adding borders to the given array

function addBorder(array) {
    //traversing the array and adding *  at the front and the end to the array
    let pattern = "*****";   // "*".repeat(array[0].length)
    array.push(pattern);
    array.unshift(pattern);
    //traversing through the two elements and adding * 
    
    for(let i = 1; i < array.length-1; i++) {
       array[i] = "*".concat(array[i] , "*");
       
    }
    return array;
    }
console.log(addBorder([abc,ded]));   //expected output to be [*****,*abc*,*ded*,*****]

//Day 2 : Sum of the given two digits;

function addTwoDigits(num)  {
    //  write code here.
    //converting the numbers into strings and splitting them into individual items
    let str = num.toString().split("");
    //return str;
    
    //returning their sum by first converting those two items into 2 integers..    
    let val_1 = parseInt(str[0]);
    let  val_2 = parseInt(str[1]);
    //sum of the two integers is..
    let result = val_1 + val_2;
    
    return result; 
}
console.log(addTwoDigits(29));   //expected output to be 11


//Day 3 : Return then first duplicates of the array 

function firstDuplicate(nums) {
    //  write code here.
    // creating an object and checking with this object
    let obj = {};
    //iteratng throught the nums array and comparing each element of this array as whether the element is present as a property in the object if present return the element or else add it as a property to the object..
    // only for the first occurence..
    for(let num of nums) {
        if(obj.hasOwnProperty(num)){
            return num;
        }else{
            obj[num] = num;
        }
    }
    return -1;
}

console.log(firstDuplicate([2,1,3,5,3,2])); //expected output to be 3
 
// an another approach to remove all the elements is to use two of loops and comparing and removing them using simple assignment..


// Day 4 : Sum of the all primes..


function addPrimes(num) {

        let result = 0;

        //traversing from 2 to num and checking whether its prime or not 
         for(let i =2; i < num.length; i++){
            //another loop to check i for prime case or not 
            for(let j =2; j <= i; j++){
                if(i === j) {
                    //return i;
                    result+= i;            //it is prime if both the elements are equal
                }
            }if(i % j === 0){
                break;    //it is not prime
            }
         }   
         return result;
}

addPrimes(10); //expected output to be 17


// Day 5 : Even digits only
 
function evenDigitsOnly(number) {
    const indDigits = number.toString().split("");
    
    return indDigits.every((val) => parseInt(val) % 2 === 0);
}

console.log(evenDigitsOnly(246822));   // returns a boolean value since we have used every method // expected output is true


// Day 6 : ARRAY CONSECUTIVE GIEVE AN INTEGER VALUE THAT INDICATES THE MISSING NO OF MISSING VALUES IN THE ARRAY AS COUNT VALUE 

//1. sort the array and use indexof method to increement the count value

function arrayConsecutive(nums) {
	let count = 0;	
	let sortedArr = nums.sort((a,b) => a-b);  // sorting in ascending order  

	//looping from max to min value from the given array

	const max =sortedArr[0];
	const min = sortedArr[sortedArr.length-1];

	for(let i = min; i < max; i++) {
		if(nums.indexOf(i) === -1) {   // by default the indexof method returns -1 if the given element is not present in the array
			count++;
		}
	}
	return count;
}

console.log(arrayConsecutive([6,2,3,8]))  //expected output is 3


// Day 7 :  PROPER PRONOUNCIATION CONVERT EVERY WORD TO A NOUN PERSPECTIVE 

function properNounCorrection(str) {
    let firstLetter = str.slice(0,1);
    
    let upperFirstLetter = firstLetter.toUpperCase();
    
    let remLetters = str.slice(1,str.length);
    
    remLetters = remLetters.toLowerCase();
    
    return upperFirstLetter + remLetters;
    
    
}

console.log(properNounCorrection("pARIS"))   //EXPECTED OUTPUT IS "Paris"

