function inform() {
    alert("I love you too");
}
function move() {
    let leftPosition =  Math.floor(Math.random() * window.innerWidth);
    let topPosition =  Math.floor(Math.random() * window.innerHeight);
    document.getElementById("no").style.left = leftPosition +'px';
    document.getElementById("no").style.top = topPosition +'px';
}