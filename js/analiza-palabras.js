function analizaPalabras(arrayPalabras) {
  let informacionPalabra = "";

  arrayPalabras.forEach((palabra, indice) => {
    informacionPalabra += `#######\nPalabra: ${indice + 1}\n`;
    informacionPalabra += `Nº de caracteres: ${palabra.length}\n`;
    informacionPalabra += `Deletreo: ${deletrarPalabra(palabra)}\n`;
    informacionPalabra += checkParYMayus(palabra);
    informacionPalabra += contieneBle(palabra);
  });

  informacionPalabra += "#######";

  return informacionPalabra;
}

function deletrarPalabra(palabra) {
  return palabra.split("").join("-");
}

function checkParYMayus(palabra) {
  let resultado = "";
  if (palabra.length % 2 === 0) {
    resultado += "La palabra es par y ";
  } else {
    resultado += "La palabra es impar y ";
  }

  if (palabra.charAt(0) === palabra.charAt(0).toUpperCase()) {
    resultado += "empieza por mayúscula\n";
  } else {
    resultado += "no empieza por mayúscula\n";
  }

  return resultado;
}

function contieneBle(palabra) {
  if (palabra.includes("ble")) {
    return 'La palabra sí contiene "ble"\n';
  } else {
    return 'La palabra no contiene "ble"\n';
  }
}
