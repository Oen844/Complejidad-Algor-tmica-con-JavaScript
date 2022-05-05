
function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let inicio_tiempo = console.time('Duracion');
contar(5);
let final_tiempo = console.timeEnd('Duracion');
let duracion = final_tiempo - inicio_tiempo;
console.log(`Tiempo de ejecucion: ${duracion}`);