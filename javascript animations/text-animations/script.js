let text = document.querySelector(".text");

let spans = text.innerHTML.split("").map((letter, i) => {
    
    return `<span style="transition-delay:${i * 50}ms; filter: hue-rotate(${i * 10}deg)">${letter}</span>`
}).join("");

text.innerHTML = spans;

console.log(spans);