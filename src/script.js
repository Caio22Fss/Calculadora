///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(numero1, numero2, operador) {
  
  let num1 = parseFloat(numero1)
  let num2 = parseFloat(numero2)
  let resultado

  switch (operador) {
    case "+":
      resultado = num1 + num2
      break;
    case "-":
      resultado = num1 - num2
      break;
    case "*":
      resultado = num1 * num2
      break;
    case "/":
      resultado = num1 / num2
      break;
    case "e":
      let contador = 1
      resultado = num1 * num1
      while(contador < num2 - 1) {
        resultado = resultado * num1
        contador++
      }
      break;
  }
  
  if(resultado == undefined || resultado > 1000000)
    resultado = "ERRO"
   
  return resultado
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9\.]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(parseFloat(numeros[0]), parseFloat(numeros[1]), operador)
}