import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

//done : nombre de la funcion que llamaremos para que la promesa terminate
//NOTA : se le llama por done o cualquier otro nombre que le queramos poner
describe('evaluar 09-promesas.js', () => { 
    test('getHeroeByIdAsync debe de retornar un heroe por un limite de tiempo', (done) => { 

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({
                    id: id,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });
        
    });


    test('getHeroeByIdAsync debe de retornar un err si no se consigue el heroe', (done) => { 

        const id = 1000;
        getHeroeByIdAsync(id)

        .then(hero => {

            expect(hero).toBeFalsy()

            done();
        })
        
        .catch(error => {

            expect(error).toBe('No se pudo encontrar el héroe' + id)

            done();
        });
        
    })
})