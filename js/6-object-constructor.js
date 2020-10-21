// Object contructor
const objC = document.querySelector("#objC");
let objCHTML= `
<pre>
<code>
    <span class="var">function</span> Guerrero(<span class="referencia">nombre</span>, <span class="referencia">bando</span>, <span class="referencia">locacion</span>){
        <span class="var">this</span>.nombre = <span class="referencia">nombre</span>;
        <span class="var">this</span>.bando = <span class="referencia">bando</span>;
        <span class="var">this</span>.locacion = <span class="referencia">locacion</span>;
    }

    <span class="var">const</span> protagonista1 = <span class="var">new</span> <span class="referencia">Guerrero</span>(<span class="string">'Uthred'</span>, <span class="string">'Sajones'</span>, <span class="string">'Bebbanbourg'</span>);
    <span class="var">const</span> protagonista2 = <span class="var">new</span> <span class="referencia">Guerrero</span>(<span class="string">'Kanut'</span>, <span class="string">'Vikingo'</span>);

    console.log (<span class="referencia">protagonista1</span>);
    console.log (<span class="referencia">protagonista2</span>);

    <span class="comentario">// Accediendo a los valores</span>
    console.log(<span class="referencia">protagonista1</span>.<span class="var">nombre</span>);
</code>
</pre>
`;

objC.innerHTML = objCHTML;

// Consola Object Constructor

const consoleObjC= document.querySelector("#consoleObjC");
let consoleObjCHTML = `
<pre>
<code>
    > Guerrero
        bando: "Sajones"
        locacion: "Bebbanbourg"
        nombre: "Uthred"
        > __proto__: Object
    > Guerrero
        bando: "Vikingo"
        locacion: undefined
        nombre: "Kanut"
        >__proto__: Object
    > Uthred
</code>
</pre>
`;

consoleObjC.innerHTML = consoleObjCHTML;

/*
const = document.querySelector("#");
let = `
<pre>
<code>

</code>
</pre>
`;

.innerHTML = ;

*/
