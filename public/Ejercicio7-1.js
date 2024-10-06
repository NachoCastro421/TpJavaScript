const p1 = document.getElementById ("parrafo1");
const p2 = document.getElementById ("parrafo2");
const p3 = document.getElementById ("parrafo3");

const buttonBlue = document.getElementById("botonAzul")

buttonBlue.addEventListener("click", ()=> {
   p1.style.color = "blue";
   p2.style.color = "blue";
   p3.style.color = "blue";
});