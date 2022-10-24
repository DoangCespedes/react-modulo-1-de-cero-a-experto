import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en 02-template-string', () => { 
    test('getSaludo debe de retornar Hola Fernando ', () => { 
        const nombre = 'Fernando';
        const messsage = getSaludo(nombre);

        expect(messsage).toBe(`Hola ${nombre}`)

    })
 })