// Este script verifica que haya mil disculpas en el siguiente string, también conocido como mildis.

const MILDIS = `dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis
dis dis dis dis dis dis dis dis dis dis`;
const MIL = 1000;

function cantidadDeDis(dis) {
  const disFormateados = dis
    .split("\n")
    .join(" ")
    .split(" ")
    .filter((d) => d === "dis");
  return disFormateados.length;
}

console.log(cantidadDeDis(MILDIS) === MIL);
