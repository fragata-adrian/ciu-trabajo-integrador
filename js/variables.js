// Diferencia entre var - let y const
// Con var la variable es global. 
// Con let y const es más lógico y vale solo dentro de las llaves
// de bucle o función. 
console.log ("Definición de variables");

// Si uso var o let puedo crearla sin inicializarla
// si uso const tengo que darle un valor inicial
// que no se podrá cambiar.
const bicicleta = "Playera";

// O crearla con valor inicial
var auto = "Ferrari";
let moto = "Ducati";


if (auto) {
    var auto = "Porsche";
    console.log ('Adentro del if: ', auto);
};
console.log ('Afuera del if:', auto);


if (moto) {
    let moto = "Yamaha";
    console.log ('Adentro del if: ', moto);
};

console.log ('Afuera del if:', moto);

const defVar = document.querySelector('#defVar');
let variables = ''

variables += `
<pre>
<code>
    <span class="comentario">// Variable</span>
    <var>var</var> miVariable = "un valor";

    <span class="comentario">// Constante</span>
    <var>const</var> miConstante = 10;

    <span class="comentario">// let que es una variable con algo especial que veremos mas adelante</span>
    <var>let</var> miVarEspecial = "¿otro valor?";
</code>
</pre>
`;

defVar.innerHTML = variables;
