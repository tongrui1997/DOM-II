// Your code goes here
Array.from(document.links).forEach(function(item) {
    item.addEventListener("click", changeColor);
    item.addEventListener("click", function(event) {
        event.preventDefault();
    });
});

function changeColor() {
    this.style.color = "green";
}
function backColor() {
    this.style.color = "black";
}

const header2 = document.querySelector(".intro h2");
header2.addEventListener("mouseover", changeColor);
header2.addEventListener("mouseout", backColor);

Array.from(document.querySelectorAll("p")).forEach(item => item.addEventListener("wheel", changeSize));
function changeSize() {
    this.style.fontSize = "35px";
}