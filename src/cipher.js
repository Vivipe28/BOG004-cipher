const cipher = {

  encode(rotacion, texto) {
    let caracteres = [];
    let transformacion = [];
    let letrasCodificadas = [];

    if (parseInt(rotacion) >= 0 && typeof (texto) == 'string') {

      for (let i = 0; i < texto.length; i++) {
        caracteres[i] = parseInt(texto.charAt(i).charCodeAt());
        transformacion = (caracteres[i] - 65 + parseInt(rotacion)) % 26 + 65;
        letrasCodificadas += String.fromCharCode(transformacion);
      }
    }
    else {
      throw TypeError();
    }
    return letrasCodificadas;
  },

  decode(rotacion, texto) {
    let caracteres = [];
    let transformacion = [];
    let letrasDecodificadas = [];

    if (parseInt(rotacion) >= 0 && typeof (texto) == 'string') {

      for (let i = 0; i < texto.length; i++) {
        caracteres[i] = parseInt(texto.charAt(i).charCodeAt());
        transformacion = (caracteres[i] + 65 - parseInt(rotacion)) % 26 + 65;
        letrasDecodificadas += String.fromCharCode(transformacion);
      }
    }
    else {
      throw TypeError();
    }
    return letrasDecodificadas;
  }
}

export default cipher;
