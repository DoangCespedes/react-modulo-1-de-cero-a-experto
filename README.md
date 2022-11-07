En la sigiente practica { 01-intro-react } se pudo aprender:

1.) La creacion de componentes reuzables con el uso de los PropTypes con el archivo { FirstApp.jsx }

2.) El uso y el manejo del estado con el hook useState en el archivo { CounterApp.jsx } 

3.) El uso del test con jest y su configuracion para la lectura de los componentes a evaluar creando el archivo en la raiz { babel.config.cjs } que ayuda al reconocimiento del ECMASCRIPT/6

4.) Creacion y uso de pruebas unitarias y de integracion 

5.) Entendiendo el uso de la plantilla describe("" =>{ }) para describir el archivo al cual haremos test, se puede usar el snippet para autoinvocarlo facilmente

6.) Entendiendo el uso de la plantilla test("" =>{ }) para realizar la prueba a la funcion o en componente que importaremos, se puede usar el snippet para autoinvocarlo facilmente.NOTA : RECORDAR EXPORTAR E IMPORTAR EL COMPONENTE O LA FUNCION QUE HAREMOS TEST

7.) Uso de expect(message1).toBe(message2) para comparar lo importado con nuestra prueba

8.) Ademas del toBe existen muchos metodos comparativos como por ejm « toEqual, toStrictEqual, toFalsy, etc... » cada uno lo podemos estudiar en la documentacion de Jest.

9.) Usaremos Testing-Library para las pruebas en el DOM , se puede usar en conjunto con Jest , es mas Jest lo sugiere en su documentacion.

10.) Confugurar el babel config como lo tenemos en el proyecto con el { @babel/preset-react } y descargando tambien el modulo { @babel/preset-react } ,  tambien reajustar el jest config para el entorno de pruebas con react { jest-environment-jsdom } y descargar el modulo { jest-environment-jsdom }

11.) Para hacer pruebas con FETCH debiamos configurar el jest pero como node v-18 ya lo incorporo cambie mi version con nvm y segui mis pruebas sin hacer configuraciones en el jest. 

12.) El toMatchSnapshot nos sirve para guardar cualquier cambio que hagamos en el DOM , si queremos hacer algun cambio en nuestro componente que ya tenga un snapshot y queremos dejar los cambios guardados , solo preionamos la tecla u.

13.) El container trabaja como un nodo del DOM , trae casi las mismas propiedades del DOM.

14.)se pueden asignar ID para hacer testing ejm { <span data-testid="test-title" >{title}</span> } y trabajar con ellos llamandolos por el lado del test con un {getByTestId}, en las pruebas FirstAppTest hay ejms.

15.) Es de suma importancia usar el metodo screen , este nos ayuda a manipular el DOM para hacer nuestras pruebas. tambien usar el screen.debug() para ver los cambios en el DOM , es como un console.log()

16.)FireEvent nos ayuda a manejar los eventos para las pruebas en este caso lo usamos para el evento click.


