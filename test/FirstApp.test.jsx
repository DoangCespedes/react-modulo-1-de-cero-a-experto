import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";


describe('Pruebas en FirstApp.jsx', () => { 

    // test('debe de hacer match con el snapshot', () => { 

    //     const title='Hola soy Goku';
    //     const {container} = render(<FirstApp title={title}/>)

    //     expect(container).toMatchSnapshot();
    //  })

     test('debe de retornar el titulo en un h1', () => { 
        const title='Hola soy Goku';
        const {container, getByText, getByTestId} = render(<FirstApp title= { title } />)
        expect(getByText(title) ).toBeTruthy()
        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toContain('Hola soy Goku');

        expect(getByTestId('test-title').innerHTML).toBe(title);
     
      })

      test('debe de mostrar los subtitulos enviados por props', () => { 
        const title='Hola soy Goku';
        const subTitle = 'Soy un subtitulo';

        const { getByText, getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );
 
        // expect(getByText(subTitle)).toBeTruthy();
        expect(getAllByText(subTitle).length).toBe(2)


       })
 })