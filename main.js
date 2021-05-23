window.onload=function(){
    var btn = document.createElement("button");
    btn.innerHTML="Click 4";
    btn.id="btn1"
    btn.onclick=onClick;
    document.body.appendChild(btn);

    var resultP = document.createElement("p");
    resultP.id="result"
    document.body.appendChild(resultP)
}

function onClick(){
    document.getElementById("result").innerHTML =displayText()
}

function displayText() {
    // document.getElementById("result").innerHTML = "Hello World for CircleCI";
    return "Hello World for CircleCI";
}

module.exports.displayText=displayText;