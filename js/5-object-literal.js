// Definicio de object literal
const defObjLContenedor = document.querySelector("#defObjL");
let defObjLHTML = `
<pre>
<code>
    <span class="comentario">// Definición de un objeto</span>
    <span class="var">const</span> deportista = {
        <span class="referencia">nombre</span>: <span class="string">"Valentino"</span>,
        <span class="referencia">deporte</span>: <span class="string">"Motociclismo"</span>
    };

    <span class="comentario">// Esto es una definición de algo que no tiene objeto</span>
    <span class="var">let</span> nombreDeportista = <span class="string">"Collin Mc Rae"</span>;
    <span class="var">let</span> nombreDeporte = <span class="string">"rally"</span>;

    <span class="comentario">// Mirar las diferencias en la consola, 
    // Cómo los muestra diferentes.</span>
    console.log(<span class="referencia">deportista</span>);
    console.log(<span class="referencia">nombreDeportista</span>);
    console.log(<span class="referencia">nombreDeporte</span>);
</code>
</pre>
`;

defObjLContenedor.innerHTML = defObjLHTML;

// console object literal
const consoleObjL = document.querySelector("#consoleObjL");
let consoleObjLHTML = `
<pre>
<code>
    > Object
        deporte: "Motociclismo"
        nombre: "Valentino"
        > __proto__: Object
    > Collin Mc Rae
    > rally
</code>
</pre>
`;

consoleObjL.innerHTML = consoleObjLHTML;

// Accediendo a los valores
const valoresObj = document.querySelector("#valoresObj");
let valoresObjHTML = `
<pre>
<code>
    <span class="comentario">// Podemos acceder a los valores colocando nombreObjeto.valor</span>
    console.log(<span class="referencia">deportista</span>.<span class="var">nombre</span>);
    console.log(<span class="referencia">deportista</span>.<span class="var">deporte</span>);

    <span class="comentario">// Otra manera de acceder</span> 
    console.log(<span class="referencia">deportista</span>[<span class="string">'nombre'</span>]);
</code>
</pre>
`;

valoresObj.innerHTML = valoresObjHTML;

// Consola con los valores
const consoleValoresObjL = document.querySelector("#consoleValoresObjL");
let consoleValoresObjLHTML = `
<pre>
<code>
    > Valentino
    > Motociclismo
    > Valentino
</code>
</pre>
`;

consoleValoresObjL.innerHTML = consoleValoresObjLHTML;


// Otro Objeto

const otroObj = document.querySelector("#otroObj");
let otroObjHTML = `
<pre>
<code>
    <span class="var">const</span> deportista_otro = {
        <span class="referencia">nombre</span>: <span class="string">"Cristiano Ronaldo"</span>,
        <span class="referencia">deporte</span>: <span class="string">"Fútbol</span>"
    };

    <span class="comentario">// Accedemos a los valores</span>
    console.log(<span class="referencia">deportista_otro</span>.<span class="var">nombre</span>);
    console.log(<span class="referencia">deportista_otro</span>.<span class="var">deporte</span>);
</code>
</pre>
`;

otroObj.innerHTML = otroObjHTML;

// Consola otro objeto

const consoleOtroObj = document.querySelector("#consoleOtroObj");
let consoleOtroObjHTML = `
<pre>
<code>
    > Cristiano Ronaldo
    > Fútbol
</code>
</pre>
`;

consoleOtroObj.innerHTML = consoleOtroObjHTML;
