//make a request to the server to repaint the DOM
setInterval(() => {
    fetch("http://localhost:5500/").then(()=>{
        window.location.reload();
    })
}, 2000);