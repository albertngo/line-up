let randomName = [ "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
let lineObj = {  
};
let numLines = 4;

function insertObject(lineObj, lineIndex,currentName){
  // place into obj
  if (!lineObj[lineIndex]){
    lineObj[lineIndex] = [currentName];
  } else if (lineObj[lineIndex].length < 10)
    lineObj[lineIndex].push(currentName);
}

for (let i = 1; i <= 50; i++){
    let index = Math.floor(Math.random() * randomName.length); //0->length-1
    let currentName = randomName[index];

    // select a line
    let lineIndex = Math.floor(Math.random() * numLines); //0->3     

    insertObject(lineObj,lineIndex,currentName);
    
}
console.log(lineObj);

let keys = Object.keys(lineObj)

//add/remove from list
setInterval(() => {
  
  if (Math.random() >= 0.5){
    let lineIndex = Math.floor(Math.random() * numLines); //0->3
    lineObj[lineIndex].shift();  
  }

  if (Math.random() >= 0.8){
    lineIndex = Math.floor(Math.random() * numLines); //0->3
    let index = Math.floor(Math.random() * randomName.length); //0->length-1
    var currentName = randomName[index];
    
    insertObject(lineObj,lineIndex,currentName);
  
}

}, 2000);



module.exports = {insertObject,lineObj, keys}