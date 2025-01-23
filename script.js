function operacionMatematica(a, callback) {
    const resultado = callback(a);
    const output = document.getElementById("resultado");
    output.innerText = `Resultado: ${resultado}`;
  }
  
  function calcularPorcentaje(porcentaje) {
    const valor = parseFloat(document.getElementById("valor").value);
    if (!isNaN(valor)) {
      operacionMatematica(valor, (x) => x * porcentaje);
    } else {
      document.getElementById("resultado").innerText = "Por favor, ingresa un valor válido.";
    }
  }