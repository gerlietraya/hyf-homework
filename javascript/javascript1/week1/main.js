//Step2:Freecodecamp link:(https://www.freecodecamp.org/gerlietraya).

//Step3:
//part 1 : Write a console.log statement saying "Hello World!" for each language that you know.
console.log("Mabuhay Buong Mundo!");//Pilipinas
console.log("Hei, Verden!");//Norsk
console.log("Hej, Verden!");//Dansk

//part II:Create a variable that rounds the number 7.25, to the nearest integer (i.e., whole number).
 const number = Math.ceil(7.25);
 console.log (number);

//part III.Working with arrays
//Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element.
 const emptyArrays = [];
 console.log(emptyArrays);

//Create an array that has your favorite animals inside
 const favoriteAnimals = [ "dogs", "cats", "bunnies", "goats", " and sheep."];
 console.log(favoriteAnimals);
 favoriteAnimals.push("baby pig");
 console.log(favoriteAnimals);

//Part IV.Working with strings.: 
let myString = "this is a test";
console.log(myString.length);


//Part V. Working with variable types.
let dogName = "Lula";
let humanAge = 4;
let favoriteSnack = ["chicken", "beef", "cookies."]
let sweetDog = true;


console.log('The value of my variable dogName is: ' + dogName);
console.log('The value of my variable humanAge is: ' + humanAge);
console.log('The value of my variable favoriteSnack is: ' + favoriteSnack);
console.log('The value of my variable sweetDog is: ' + sweetDog);

//Part VI.Working with typeof
console.log("type of variables I am working with are:string,number,array and boolean.")
console.log(typeof dogName);
console.log(typeof humanAge);
console.log(typeof favoriteSnack);
console.log(typeof sweetDog);

//Step IV.Smart EAse.

//Age-ify

const yearOfBirth = 1990;
let yearFuture = 2025;
let age = yearFuture - yearOfBirth;
console.log('You will be ' + age + ' years old in ' + yearFuture +'.')

//Goodboy-Oldboy (A dog age calculator) (Optional)
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;
let ageType;
if(shouldShowResultInDogYears){
    dogYear *= 7;
    ageType = "dog"

}
else{
    ageType = "human";
}
console.log('Your dog will be ' + dogYear +' ' + ageType + ' years old in ' + dogYearFuture + '.');
 
//Housey pricey (A house price estimator)
//formula: housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
//JULIA
let wide = 5;
let deep = 11;
let  high = 8;
let gardenSizeInM2 = 70;
let volumeInMeters = wide * deep * high;
console.log(volumeInMeters);

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);
let houseCost = 1000000;
let payStatus;
if(housePrice > houseCost){
    payStatus = "too little";
}
else{
    payStatus = "too much";
}
console.log('Julia is paying ' + payStatus + '.' );
//PETER
let wide1 = 8;
let deep1 = 10;
let  high1 = 10;
let gardenSizeInM21 = 100;
let volumeInMeters1 = wide1 * deep1 * high1;
console.log(volumeInMeters1);

let housePrice1 = volumeInMeters1 * 2.5 * 1000 + gardenSizeInM21 * 300;
console.log(housePrice1);
let houseCost1 = 2500000;
let payStatus1;
if(housePrice1 > houseCost1){
    payStatus = "too little";
}
else{
    payStatus1 = "too much";
}
console.log('Peter is paying ' + payStatus1 + '.' );
//Ez Namey (Startup name generator) (Optional)
let firstWords = ["Hungry", "Mighty", "Smooth", "Warm", "Delightful", "Wonderful", "Fantastic", "Delicious", "Chewy" , "Gooey"];
let secondWords = ["Basket", "Box", "Sailing", "Spot", "World", "Energy", "Destiny", "Treats", "Stones", "Fire"];
const randomNumber = Math.floor(Math.random() * 10) + 0;
let startUpName = firstWords[4] + secondWords[3];
//console.log(startUpName);
console.log('The startup name: ' + startUpName + ' contains ' + startUpName.length + ' characters.');




 