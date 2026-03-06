console.log("Script started");

function changeColor(){
    console.log("click");

    let color = prompt("Enter a new color for the poem");

    let p = document.getElementById("poem");

    p.style.color = color;
}

function changeFontSize(){
    console.log("click");

    let fontSize = prompt("Enter a new font size for the poem");

    let p = document.getElementById("poem");

    p.style.fontSize = fontSize + "px";
}

function changePoem(){
    console.log("click");

    let title = prompt("Enter a new title for the poem");

    let h1 = document.getElementById("title");
}