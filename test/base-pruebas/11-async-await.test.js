import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => { 

    test('dede de retornar la url de la img', async () => { 

        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');


    })
 })