// La idea es separar en silabas una palabra
// Por ahora esta complicada la cosa jeje, muchos casos diferentes, esta versión es super basica

function separarEnSilabas(palabra) {
  let silabas = [];
  let silabaActual = "";

  // Iteramos sobre cada letra de la palabra
  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];

    const esConsonante = !esVocal(letra);
    const siguienteEsConsonante = !esVocal(palabra[i + 1]);
    if (esConsonante) {
      silabaActual += letra;
    } else {
      silabaActual += letra;
      if (siguienteEsConsonante) {
        silabas.push(silabaActual);
        silabaActual = "";
      }
    }
  }
  if (silabaActual) {
    silabas.push(silabaActual);
  }
  return silabas.join("-");
}
// tomar en cuenta tildes
function esVocal(letra) {
  return /[aeiouáéíóú]/i.test(letra);
}

let palabras = [
  ["perro", "pe-rro"],
  ["gato", "ga-to"],
  ["casa", "ca-sa"],
  ["plata", "pla-ta"],
  ["gavilán", "ga-vi-lán"],
  ["bíceps", "bí-ceps"],
  ["elegir", "e-le-gir"],
  ["colina", "co-li-na"],
  ["zamuro", "za-mu-ro"],
  ["alegría", "a-le-grí-a"],
  ["ladrido", "la-dri-do"],
  ["cofradía", "co-fra-dí-a"],
  ["reactor", "re-ac-tor"],
  ["hipnotizado", "hip-no-ti-za-do"],
  ["atletismo", "at-le-tis-mo"],
  ["telepatía", "te-le-pa-tía"],
  ["preguntar", "pre-gun-tar"],
  ["español", "es-pa-ñol"],
  ["crepúsculo", "cre-pús-cu-lo"],
  ["crecer", "cre-cer"],
  ["creer", "cre-er"],
  ["crema", "cre-ma"],
  ["creíble", "cre-í-ble"],
  ["creído", "cre-í-do"],
  ["creíblemente", "cre-í-ble-men-te"],
  ["creída", "cre-í-da"],
  ["creíblemente", "cre-í-ble-men-te"],
];

console.log(
  palabras.map(([palabra, silabas]) => [silabas, separarEnSilabas(palabra)])
);

console.log(
  "Acertó el:",
  (palabras.filter(
    ([palabra, silabas]) => separarEnSilabas(palabra) === silabas
  ).length /
    palabras.length) *
    100 +
    "% de las palabras"
);
