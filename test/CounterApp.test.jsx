import { fireEvent, getByText, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp"

const number = 10;
describe('Test en el CounterApp.jsx', () => { 

    test('debe de hacer match con el snapshot', () => { 

      const container = render(<CounterApp number={number}/>);
      expect(container).toMatchSnapshot();

     })

    test('debe de retornar el valor inicial de 100', () => { 
        render(<CounterApp number={100}/>)
        expect(screen.getByText(100)).toBeTruthy();
        
        // expect(screen.getByRole('heading', { level: 3}).innerHTML).toContain('100')
     })

    test('debe de incrementar con el boton', () => { 

        render(<CounterApp number={number} />) 
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy()
     })

    test('debe de incrementar con el boton', () => { 

        render(<CounterApp number={number} />) 
        fireEvent.click( screen.getByText('-1') )
        screen.debug()
        expect( screen.getByText('9') ).toBeTruthy()
     })

     test('debe de funcionar el botón de reset', () => {
        
        render( <CounterApp number={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });
 })