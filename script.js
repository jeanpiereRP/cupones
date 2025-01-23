let total = 0;

function calcularTotal() {
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const valor = parseFloat(document.getElementById("valor").value);
  
  if (!isNaN(cantidad) && !isNaN(valor) && cantidad > 0 && valor > 0) {
    total = cantidad * valor;
    document.getElementById("resultado").innerText = `Total: $${total.toFixed(2)}`;
  } else {
    document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
  }
}

function calcularDescuento(porcentaje) {
  if (total > 0) {
    const descuento = total * porcentaje;
    const totalConDescuento = total - descuento;
    document.getElementById("resultado").innerText += `\nDescuento: $${descuento.toFixed(2)}`;
    document.getElementById("resultado").innerText += `\nTotal con Descuento: $${totalConDescuento.toFixed(2)}`;
  } else {
    document.getElementById("resultado").innerText = "Primero calcula el total.";
  }
}