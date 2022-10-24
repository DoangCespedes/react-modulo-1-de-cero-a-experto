import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'

describe('Pruebas en el 05-funciones.js', () => { 
    
    test('hacer que funcione el getUser', () => { 

        const testUser = {
            uid: 'ABC567',
            username:'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toEqual(user);
     })

    test('hacer que funcione el getUsuarioActivo', () => { 

        const nombre = 'Mattias';

        const user = getUsuarioActivo(nombre)

        expect(user).toEqual({
            uid: 'ABC567',
            username:nombre
        })

    })
 })