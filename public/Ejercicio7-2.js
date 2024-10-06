
const botonAlert = document.getElementById("botonAlerta");

botonAlert.addEventListener ("click", ()=> {
    const campoTexto = document.getElementById("CampoTexto")
    const valor = campoTexto.value;
    alert("Has ingresado: " + valor);
});