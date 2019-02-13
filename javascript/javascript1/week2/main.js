//Javascript warmup part two
//empty objects with time
// function emptyObject (){
//     {};
// };
// emptyObject();
//arrays with colors

// function emptyObject(){
//      time = 12;
// };
// emptyObject();
function emptyObject (){
     var time = {'time': 12 }
     return time;
}

let timeObject =  emptyObject();
console.log(timeObject);

//array function colors
let threeEmptyObjects = [{'color':'black'},{'color':'purple'},{'color':'silver'}];

function emptyObjects (color1, color2, color3){
    threeEmptyObjects[0].color = color1;
    threeEmptyObjects[1].color = color2;
    threeEmptyObjects[2].color = color3;
    return threeEmptyObjects;
};
let colorObjects = emptyObjects('red','blue','yellow');
console.log(colorObjects);

//for loop of color
let dayToday = 'Sunday';
let daysOfTheWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let daysToMeet = 9;
let dayToMeet = daysToMeet % daysOfTheWeek.length;

console.log('Today is: ' + dayToday);
console.log('How many days to meet: ' + daysToMeet);
console.log('We are meeting on: ' + daysOfTheWeek[dayToMeet]);


//function add note by push.
//save a note
let notes = [];
function addNote (note,noteId) {
    notes.push({note,noteId});
};
addNote('note 1: I am very sad', 143);
addNote('note 2 : I wish to disappear forever', 456);
console.log(notes);
//get a note
function getNoteFromId (Id) {
    for( i = 0; i < notes.length; i++)
     if(Id === notes[i].noteId){
         console.log(notes[i]);
     }
     else{
         console.log('Sorry,Record Not Found');
     }
};

getNoteFromId (143);
getNoteFromId (765);
getNoteFromId (456);
//read all notes

function showAllNotes () {
    for( i = 0; i < notes.length; i++)
    console.log('The note with id: ' + notes[i].noteId + ', has the following text: ' + notes[i].note + '.')
}
showAllNotes();   

//CactusIO-interactive (Smart phone usage app)
//Adding an activity
let activities = [];
function addActivity (date, activity, duration) {
    activities.push(date, activity,duration);
}
addActivity('23/7-18', 'Youtube', 30);
addActivity('1/10-18','Google',20 );
addActivity('1/10-18','slack',28)
console.log(activities);
//Show my status
let screenTimeUsage = 0;
let screenTime = activities.length;
function showStatus(activities){
    if (screenTimeUsage === 0){
        console.log("Add some activities before calling showStatus");
    }
    else {
        for ( i = 0; i < activities[i].duration; i++);
            {screenTimeUsage = screenTimeUsage + activities[i].duration};
            console.log("You have added ' +screenTime+ 'activities.They amount to 78 min. of usage")
        }
    };
    
showStatus(activities);
//limit usage
let screentimeLimit = 0;
function usageLimit(screentimeLimit){
    if (showStatus > screentimeLimit){
        console.log("You have reached your limit, no more smartphoning for you!");
    } else {
        console.log('You have not reached your limit, more smartphoning for you!');
    }
};
usageLimit(100);

// function usageLimit (){

// }
//  arraySample.splice('hola', 1,2,3);
//  arraySample.shift();
//  arraySample.unshift({'color':'yellowgreen'});
//  arraySample.push({'color':'pink'});
//  arraySample.pop();
//  var lastElement = arraySample.pop();
//  console.log(arraySample);
// //  arraySample = {'color':'pink'};
//  console.log(arraySample);
//  console.log(arraySample);
//  let colorObjects = arrayOfColors;
