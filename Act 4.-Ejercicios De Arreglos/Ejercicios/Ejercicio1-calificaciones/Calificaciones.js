function calcularPromedioAprobadosYreprobados(calificaciones) {
  if (!Array.isArray(calificaciones)) {
      throw ("El parámetro proporcionado no es un arreglo.");
  }

  if (calificaciones.length === 0) {
      return JSON.stringify({"promedio": 0 , "aprobados": 0 , "reprobados": 0});
  }

  let sum = 0;
  let aprobados = 0;
  let reprobados = 0;

  for (let i = 0; i < calificaciones.length; i++) {
      if (calificaciones[i] < 0 || calificaciones[i] > 10) {
          throw ("Las calificaciones deben estar entre 0 y 10.");
      }

      sum += calificaciones[i];
      if (calificaciones[i] >= 6) {
          aprobados++;
      } else {
          reprobados++;
      }
  }

  const promedio = Math.round(sum / calificaciones.length);

  return JSON.stringify({ "promedio": promedio, "aprobados": aprobados, "reprobados": reprobados });
}

export { calcularPromedioAprobadosYreprobados }
