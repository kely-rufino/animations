function changeClasses (e) {
    if (e.target.className === "box2") {
        e.target.className = "box2 box2Active";
    } else {
        e.target.className = "box2";
    }
}

function clickedButton() {
    let box2 = document.getElementById("box.2");
    box2.addEventListener("click", changeClasses);
}

function makeCircle(e){
    if(e.target.className === "box"){
        e.target.className = "box circle";
    }else{
        e.target.className = "box";
    }
}

function clickBox(){
    const box = document.getElementById("box.1");
    box.addEventListener("click", makeCircle);
}

clickedButton();
clickBox();

