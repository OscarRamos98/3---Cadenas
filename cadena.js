function palindromo(cadena) {

  var resultado = "La cadena \"" + cadena + "\"";

  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");

  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for (i in letrasEspacios) {
    if (letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for (i in letras) {
    if (letras[i] == letrasReves[i]) {
      // Todo bien
    }
    else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      iguales = false;
    }
  }

  if (iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }

  return resultado;
}

function no_palabras(cadena) {
  let textArray = cadena.split(' ');
  let wordslist = {};

  textArray.forEach(function (word) {
    // word = clearString(word);
    if (wordslist[word]) {
      wordslist[word] += 1;
    } else {
      wordslist[word] = 1;
    }
  });
  let wordsListSize = Object.keys(wordslist).length;
  var mensaje = "La oracion \"" + cadena + "\" tiene " + wordsListSize + " palabras";
  return mensaje;

}

function no_letras(cadena) {
  let nl = cadena.length;
  var mensaje = "El numero de letras de \"" + cadena + "\" es: " + nl;
  return mensaje;
}

function no_vocales(cadena) {
  var i = 0;
  var texto = cadena.toLowerCase().split("");
  for (let k = 0; k < texto.length; k++) {
    switch (texto[k]) {
      case "a":
        i++;
        break;
      case "e":
        i++;
        break;
      case "i":
        i++;
        break;
      case "o":
        i++;
        break;
      case "u":
        i++;
        break;
    }

  }
  var mensaje = "El numero de vocales de la palabra " + cadena + " es: " + i;
  return mensaje;
}
function no_consonantes(cadena) {
  var i = 0;
  var texto = cadena.toLowerCase().split("");
  for (let k = 0; k < texto.length; k++) {
    switch (texto[k]) {
      case "b":
        i++;
        break;
      case "c":
        i++;
        break;
      case "d":
        i++;
        break;
      case "f":
        i++;
        break;
      case "g":
        i++;
        break;
      case "h":
        i++;
        break;
      case "j":
        i++;
        break;
      case "k":
        i++;
        break;
      case "l":
        i++;
        break;
      case "m":
        i++;
        break;
      case "n":
        i++;
        break;
      case "ñ":
        i++;
        break;
      case "p":
        i++;
        break;
      case "q":
        i++;
        break;
      case "r":
        i++;
        break;
      case "s":
        i++;
        break;
      case "t":
        i++;
        break;
      case "v":
        i++;
        break;
      case "w":
        i++;
        break;
      case "x":
        i++;
        break;
      case "y":
        i++;
        break;
      case "z":
        i++;
        break;
    }

  }
  var mensaje = "El numero de consonantes de la palabra " + cadena + " es: " + i;
  return mensaje;
}

module.exports.palindromo = palindromo;

module.exports.no_palabras = no_palabras;

module.exports.no_letras = no_letras;

module.exports.no_vocales = no_vocales;

module.exports.no_consonantes = no_consonantes;