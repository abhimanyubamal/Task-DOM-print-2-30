let n = document.querySelector("h2");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let calculate = document.querySelector("#calculate");
let flag = 0;

add.addEventListener("click", () => {
    n.innerHTML = +n.innerHTML + 1;
});

subtract.addEventListener("click", () => {
    n.innerHTML = +n.innerHTML - 1;
});

calculate.addEventListener("click", () => {
    let p = document.querySelectorAll("p");
    if (flag != 0) {
        p.forEach((z) => {
            document.body.removeChild(z);
        }) 
    };
    for (let x = 0; x < 30; x++) {
        let b = (+n.innerHTML) ** (x + 1);
        let a = document.createElement("p");
        document.body.appendChild(a);
        a.innerHTML = b;
        flag++;
    }
});
