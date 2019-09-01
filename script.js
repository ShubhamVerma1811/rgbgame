var button = document.getElementById("butt");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
let div = document.querySelector("div")
let q = [];

for (i = 0; i < 9; i++) {
    var c = document.querySelectorAll("button")
    var x = Math.floor((Math.random() * 257));
    var y = Math.floor((Math.random() * 257));
    var z = Math.floor((Math.random() * 257));

    q[i] = c[i].style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
}
let b = Math.floor(Math.random() * 9);
// console.log(q[b]);
var p = h1.innerHTML = q[b]; //The question header
// console.log(q[8],p);

function result() {
    if (q[8] == p) {
        console.log("Equal");
    }
}

c.forEach(function (check) {
    check.addEventListener('click', checkIndex);
})

function checkIndex(event) {
    let pos = (Array.from(c).indexOf(event.target));
    if (p === q[pos]) {
        // c[pos].style.backgroundColor = "#66FF00";
        // div.style.backgroundColor = p;
        // c[pos].style.boxShadow = "5px 5px 50px black";
        for(i=0;i<9;i++)
        {
            c[i].style.backgroundColor = p;
            c[i].style.border = "3px solid black";
            c[i].style.pointerEvents = "none";
        }

        // c[pos].style.outline = "none";
    }
    else {
        c[pos].style.backgroundColor = "transparent";
        c[pos].style.border = "none";
        c[pos].style.cursor = "default";
    }
}

window.addEventListener("scroll",()=>window.scrollTo(0,0));
