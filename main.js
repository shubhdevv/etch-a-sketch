let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded",function() {
    boardCreate(16);
    
    document.querySelector("body").addEventListener("click",function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click) {
                draw.innerHTML = "Please continue with your drawing";
            }
            else {
                draw.innerHTML = "You can't continue with your drawing";
            }
        }
    })

    let popup = document.querySelector("#prompt");
    popup.addEventListener("click",function() {
        let size = getSize();
        boardCreate(size);
    })
})

function boardCreate(size) {
let sketchboard = document.querySelector(".board");

sketchboard.style.gridTemplateColumns = `repeat(${size},1fr)`;
sketchboard.style.gridTemplateRows = `repeat(${size},1fr)`;

     let numofDivs = size*size;

     for(let i=0;i<numofDivs;i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover",colorDiv);
        sketchboard.insertAdjacentElement("beforeend",div);
     }
}

function getSize() {
    let input = prompt("Tell the size of the grid you want?");
    let message = document.querySelector("#message");
    if(input=="") {
        message.innerHTML = "Please provide a size";
    }
    else if(input<1 || input>100) {
        message.innerHTML = "Please provide a valid size";
    }
    else {
        message.innerHTML = "Enjoyyy!";
        return input;
    }
}

function colorDiv() {
    if(click) {
    if(color == "random") {
        this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`
    }
    else {
        this.style.backgroundColor = `black`;
    }
}
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let manydiv = document.querySelectorAll("div")
    manydiv.forEach((div) => div.style.backgroundColor = "white")
}