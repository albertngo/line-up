function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}

//MODEL=================================================================================================//
let randomName = [ "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
let lineObj = {  
};
let numLines = 4;

for (let i = 1; i <= 15; i++){
    let index = Math.floor(Math.random() * randomName.length); //0->length-1
    let currentName = randomName[index];

    // select a line
    let lineIndex = Math.floor(Math.random() * numLines); //0->3     

    // place into obj
    if (!lineObj[lineIndex]){
        lineObj[lineIndex] = [currentName];
    } else lineObj[lineIndex].push(currentName);
    
}
console.log(lineObj);

let keys = Object.keys(lineObj)

//remove from list
setInterval(() => {
  let lineIndex = Math.floor(Math.random() * numLines); //0->3
  lineObj[lineIndex].shift();   

}, 5000);



module.exports = {lineObj, keys}