// funcion Base

const funcionBaseContenedor = document.querySelector("#funcionBase");
let funBaseHTML = `
<pre>
    <code>
    <span class="comentario">// Primero se define</span>
    <span class="var">function</span> hola() {
        console.log(<span class="string">"Acá la función hola"</span>);
    };


    <span class="comentario">// Luego se llama a la función</span>
    <span class="referencia">hola</span>();
    </code>
</pre>
`;


// Consola Base

funcionBaseContenedor.innerHTML = funBaseHTML;

const consolaBaseContenedor = document.querySelector("#consolaBase");
let consolaBaseHTML = `
<pre>
    <code>
    > Acá la función hola
    </code>
</pre>
`;

consolaBaseContenedor.innerHTML = consolaBaseHTML;


// Funcion en Variable

const funEnVarContenedor = document.querySelector("#funEnVariable");
let funEnVarHTML = `
<pre>
    <code>
    <span class="var">let</span> alumno = <span class="var">function</span>(<span class="referencia">apellido</span>) {
    console.log(<span class="string">"Alumno apellido ___"</span>, apellido);
    }

    <span class="referencia">alumno</span>(<span class="string">"Gonzales"</span>);
    </code>
</pre>
`;

funEnVarContenedor.innerHTML = funEnVarHTML;


// Consola funcion en variable

const consolaFunEnVarContenedor = document.querySelector("#consolaFunEnVar");
let consolaFunEnVarHTML = `
<pre>
    <code>
    > Alumno apellido ___ Gonzales
    </code>
</pre>
`;

consolaFunEnVarContenedor.innerHTML = consolaFunEnVarHTML;


// Funcion con return

const funReturnContenedor = document.querySelector("#funReturn");
let funReturnHTML = `
<pre>
    <code>
        <span class="var">function</span> sumar(<span class="referencia">a</span>, <span class="referencia">b</span>) {
            <span class="var">return</span> <span class="referencia">a</span> + <span class="referencia">b</span>;
        }

        console.log(<span class="referencia">sumar</span>(<span class="num">2</span>, <span class="num">5</span>));
    </code>
</pre>
`;

funReturnContenedor.innerHTML = funReturnHTML;


function sumar(a, b) {
    return a + b;
}

console.log(sumar(2,5));


// Consola funcion con return

const consoleReturnContenedor = document.querySelector("#consoleReturn");

let consoleReturnHTML = `
<pre>
    <code>
        > 7
    </code>
</pre>
`;

consoleReturnContenedor.innerHTML = consoleReturnHTML;
