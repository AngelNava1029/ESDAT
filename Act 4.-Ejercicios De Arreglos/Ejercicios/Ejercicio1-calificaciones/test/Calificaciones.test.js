import { calcularPromedioAprobadosYreprobados} from '../Calificaciones'


describe('calcularPromedioAprobadosYreprobados', () => {
    it('calcula el promedio, cantidad de aprobados y reprobados correctamente', () => {
        const calificaciones = [8, 7, 5, 9, 4];
        const resultadoEsperado = '{"promedio":7,"aprobados":3,"reprobados":2}';
        expect(calcularPromedioAprobadosYreprobados(calificaciones)).toEqual(resultadoEsperado);
        
      });

    it('maneja correctamente las calificaciones fuera del rango', () => {
        const calificaciones = [8, 7, 11, 9, 4];
        expect(() => calcularPromedioAprobadosYreprobados(calificaciones)).toThrow('Las calificaciones deben estar entre 0 y 10.');
    });
    
    it('maneja correctamente cuando no se proporciona un arreglo', () => {
        const calificaciones = "No soy un arreglo";
        expect(() => calcularPromedioAprobadosYreprobados(calificaciones)).toThrow('El parámetro proporcionado no es un arreglo.');
    });
});