let blueButton = document.getElementById("blueButton");
let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");

blueButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    body.style.backgroundColor = "blue";
});

redButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    body.style.backgroundColor = "red";
});

greenButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    body.style.backgroundColor = "green";
});
