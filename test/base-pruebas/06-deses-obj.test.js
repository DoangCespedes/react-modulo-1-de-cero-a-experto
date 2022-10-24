import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('pruebas en el 06-deses-obj.js', () => { 

    test('hacer que funcione la funcion usContext', () => { 

        const clave = 'Mattias';
        
        const edad = 5
        
        const func = usContext(clave, edad);
         
        expect(func).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
})