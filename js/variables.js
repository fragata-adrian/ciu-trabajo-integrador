
/////////////////////
// Como definirlas
/////////////////////

const defVar = document.querySelector('#defVar');
let variables = ''

variables += `
<pre>
<code>
    <span class="comentario">// Variable</span>
    <span class="var">var</span> miVariable = "un valor";

    <span class="comentario">// Constante</span>
    <span class="var">const</span> miConstante = 10;

    <span class="comentario">// let que es una variable con algo especial que veremos mas adelante</span>
    <span class="var">let</span> miVarEspecial = "otro valor";
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
    <span class="var">var</span> auto = <span class="string">"Ferrari"</span>;
    <span class="var">let</span> moto = <span class="string">"Ducati"</span>;
    
    
    <span class="var">if</span> (<span class="referencia">auto</span>) {
        <span class="var">var</span> auto = <span class="string">"Porsche"</span>;
        <span class="comentario">// Mostramos por consola el valor de la variable auto adentro del if.</span>
        console.log (<span class="string">'Adentro del if: '</span>, <span class="referencia">auto</span>);
    };
    <span class="comentario">// Mostramos por consola el valor de la variable auto afuera del if.</span>
    console.log (<span class="string">'Afuera del if:'</span>, <span class="referencia">auto</span>);
    
    
    <span class="var">if</span> (<span class="referencia">moto</span>) {
        <span class="var">let</span> moto = <span class="string">"Yamaha"</span>;

        <span class="comentario">// Mostramos por consola el valor de la variable moto adentro del if.</span>
        console.log (<span class="string">'Adentro del if: '</span>, <span class="referencia">moto</span>);
    };

    <span class="comentario">// Mostramos por consola el valor de la variable moto afuera del if.</span>
    console.log (<span class="string">'Afuera del if:'</span>, <span class="referencia">moto</span>);
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