
/////////////////////
// Como definirlas
/////////////////////

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
    <var>let</var> miVarEspecial = "otro valor";
</code>
</pre>
`;

defVar.innerHTML = variables;

/////////////////////////////////////
// Diferencia entre var - let y const
/////////////////////////////////////

const diferenciasContenedor = document.querySelector("#diferencias");
let diferenciasHTML = '';

diferenciasHTML += `
<pre>
<code>
    <var>var</var> auto = "Ferrari";
    <var>let</var> moto = "Ducati";
    
    
    <var>if</var> (<span class="referencia">auto</span>) {
        <var>var</var> auto = "Porsche";
        <span class="comentario">// Mostramos por consola el valor de la variable auto adentro del if.</span>
        console.log ('Adentro del if: ', <span class="referencia">auto</span>);
    };
    <span class="comentario">// Mostramos por consola el valor de la variable auto afuera del if.</span>
    console.log ('Afuera del if:', <span class="referencia">auto</span>);
    
    
    <var>if</var> (<span class="referencia">moto</span>) {
        <var>let</var> moto = "Yamaha";

        <span class="comentario">// Mostramos por consola el valor de la variable moto adentro del if.</span>
        console.log ('Adentro del if: ', <span class="referencia">moto</span>);
    };

    <span class="comentario">// Mostramos por consola el valor de la variable moto afuera del if.</span>
    console.log ('Afuera del if:', <span class="referencia">moto</span>);
</code>
</pre>
`;
diferenciasContenedor.innerHTML = diferenciasHTML;

// Retorno

const diferenciasRetornoContenedor = document.querySelector("#diferenciasRetorno");
let retornoDiferenciasHTML = '';

retornoDiferenciasHTML += `
<pre>
<code>
    > Adentro del if:  Porsche
    > Afuera del if: Porsche
    > Adentro del if:  Yamaha
    > Afuera del if: Ducati
</code>
</pre>
`;

diferenciasRetornoContenedor.innerHTML = retornoDiferenciasHTML;