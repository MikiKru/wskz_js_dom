// mouse events
const btn1 = document.querySelector(".bnt1");
btn1.addEventListener("click", e => {
    e.stopImmediatePropagation();
    console.log("ZATRZYMANO AKCJĘ CLICK");
});
btn1.addEventListener("click", () =>{
    console.log("CLICK");
    btn1.style.setProperty("background-color", "red");
    btn1.style.setProperty("color", "white");
    btn1.style.setProperty("font-weight", "bold");
    const p = document.createElement("p");
    const date = new Date();
    const dateToText = `${date.getHours()} : ${date.getMinutes()}`;
    p.innerText = "Kliknięto: " + dateToText;
    btn1.after(p);
});
btn1.addEventListener("mouseenter", () => {
    console.log("MouseEnter");
    btn1.style.setProperty("background-color", "blue");
    btn1.style.setProperty("color", "white");
    btn1.style.setProperty("font-weight", "bold");
});
btn1.addEventListener("mouseleave", () => {
    console.log("MouseLeave");
    btn1.removeAttribute("style");
});
// keyboard events
document.addEventListener("keyup", e => {
   console.log("Klawisz: " + e.key);
   if(e.key == "Escape"){
       const paragraphs = document.querySelectorAll("p");
       for (var i = 0; i < paragraphs.length; i++) {
           paragraphs[i].remove();
       }
   }
});
// prevent propagation
const a = document.querySelector(".reflink");
a.addEventListener("click", e => {
    e.preventDefault();
    console.log("Przekierowanie zatrzymane");
});


