import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp.js', () => { 
    test('getHeroeById debe de retornar el heroe por id ', () => {

        const id = 5;
        const hero = getHeroeById(id);

        expect(hero).toStrictEqual({
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        });

    })

    test('getHeroeById debe de retornar undefine si no existe', () => {

        const id = 500;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy()

    })

    //Tarea
    //debe de retornar un arreglo con los heroes de DC
    //length === 3
    //toEqual al arreglo filtrado en
    //debe de retornar un arreglo con los heroes de marvel
    //length === 2
    test('debe de retornar los heroes de DC', () =>  {

        const owner = "DC" ;

        const heroes = getHeroesByOwner(owner); 

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])

    })

    test('debe de retornar los heroes de Marvel', () =>  {

        const owner = "Marvel" ;

        const heroes = getHeroesByOwner(owner); 

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ])

           
    })

 })