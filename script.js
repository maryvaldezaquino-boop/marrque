// Espera a que cargue toda la página
document.addEventListener("DOMContentLoaded", () => {

    const texto = document.getElementById("texto");

    const colores = ["#00ffcc", "#ffeb3b", "#ff4081", "#7c4dff"];
    let i = 0;

    // Cambia el color cada 800 ms
    setInterval(() => {
        texto.style.color = colores[i];
        i = (i + 1) % colores.length;
    }, 800);

});