let text = document.querySelector(".text");

let  spans = text.innerHTML.split('').map((letter, i) => {

    return `<span style="animation-duration: ${Math.random() * 5}s; filter: hue-rotate(${i * 10}deg)">${letter}</span>`
}).join("");

text.innerHTML = spans;

console.log(spans);