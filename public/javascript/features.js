//make a request to the server to repaint the DOM
let stopInterval;

function refresh(){
   let refreshPage = setInterval(() => { 
    fetch("http://localhost:5500/")
    console.log("fetch made");
    window.location.reload(); //not put into .then because not getting any data back
    }, 2000);
    stopInterval = refreshPage;
}

refresh();

let inputField = document.querySelectorAll(".inputField input");
console.log(inputField);

//apply refresh start/stop listeners
for (let input of Array.from(inputField)){
    input.addEventListener("focus",()=>{
        clearInterval(stopInterval);
    })
    
    input.addEventListener("blur",()=>{
        refresh();
    })
}

let form = document.querySelector(".createChar");
form.addEventListener("submit", (event)=>{
    
    //get all the values
    let numItems = document.querySelector("#items").value;
    let line = document.querySelector("#lineNum").value;
    if (line == 1 && numItems > 5){
        //display error
        alert("You have more than 5 items!");
        return false;
    } else if (line == 2 && numItems > 10){
        //display error
        alert("You have more than 10 items!");
        return false;
    } return true;
})


