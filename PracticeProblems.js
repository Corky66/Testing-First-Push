//              Problem 1, log the current day and time to the console
//const today = new Date();
//   const day = today.getDay();
//   const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//let hour = today.getHours();
//const minute = today.getMinutes();
//    const amPm = (hour >= 12)? " PM " : " AM ";
//        hour = (hour >= 12)? hour - 12: hour;
//console.log(`Today is ${daylist[day]} and the time is ${hour}:${minute}${amPm}.`);

//              Problem 2 log the current date to the console
//const today = new Date();
//   let month = today.getMonth() + 1;
//        if(month<10) {
//            month = '0' + month
//        };
//    let day = today.getDate();
//        if (day<10) {
//            day = '0' + day
//        };
//    year = today.getFullYear();
//console.log(`Today's date is ${month}/${day}/${year}`)

//              Problem 3 write a program that finds the area of a triangle
//const height = 6;
//const base = 14;
//const area = .5 * base * height;

//console.log(area)

//              Problem 5 Rotate string right (remove last letter from the strong and attach it to the front)
//function sleep(ms){
//    const date = Date.now();
//    let currentDate = null;
//    do {
//      currentDate = Date.now();
//    } while (currentDate - date < ms);
//}

//let string = "0                                  ";
//for(let i = 0; i < string.length; i++){
//let lastLetter = string.slice(string.length-1);
//let newString = lastLetter + string.slice(0,string.length-1);
//string = newString;
//console.log(string);
//sleep(50);
//};

//              Problem 6 Write a program to determine whether a given year is a leap year

//function leapyear(year){
    // % is divide and return remainder
    // so year % 100 === 0 means if no remainder
//    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// ? is if : is else
// Simple language - if year is divisible by 100, is it divisible by 400? If yes to both it is a leap year(true)
// if year is divisible by 100 but not 400, can the year be divided by 4? if yes it is a leap year(true)
// if year is not divisible by 100 and not by 4 then it is not a leap year(false)
//}
//console.log(leapyear(600))
//              Problem 6 extra practice.
//function isDivisibleBySix(number){
//    return (number % 2 === 0) ? (number % 3 === 0) : false
//}
//console.log(isDivisibleBySix(649));
//console.log(isDivisibleBySix(3));
//console.log(isDivisibleBySix(6));
//console.log(isDivisibleBySix(1236));
//console.log(isDivisibleBySix(19815));
//console.log(isDivisibleBySix(600));

//          Problem 7 Will January 1st ever be a sunday between 2014 and 2050
for (i=2014, i = 2050, i++)
