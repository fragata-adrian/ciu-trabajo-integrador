// Forma clasica
const ObjD = document.querySelector("#ObjD");
let primeraComputadora = '<span class="referencia">${primeraComputadora}</span>';
let deseada = '<span class="referencia">${deseada}</span>';
let ObjDHTML = `
<pre>
<code>
    <span class="comentario">// Definimos el objeto</span>
    <span class="var">const</span> computadorasOchentosas = {
        <span class="referencia">sinclair</span>: {
            <span class="referencia">inicial</span>: <span class="string">"zx-81"</span>,
            <span class="referencia">evolucion</span>: <span class="string">"spectrum"</span>,
            <span class="referencia">final</span>: <span class="string">"2068"</span>
        },
        <span class="referencia">otras</span>: [<span class="string">"Commodore 64"</span>, <span class="string">"Atari Amiga"</span>, <span class="string">"Texas TI-99 4A"</span>]
    }

    <span class="comentario">// Acá vemos cómo se ha definido el objeto</span>
    console.log (<span class="referencia">computadorasOchentosas</span>);

    <span class="comentario">// Y accedemos</span>

    <span class="var">let</span> primeraComputadora = computadorasOchentosas.<span class="referencia">sinclair</span>.<span class="referencia">inicial</span>;
    <span class="var">let</span> deseada = computadorasOchentosas.<span class="referencia">otras</span>[0];

    console.log(<span class="string">'Mi primera computadora fue una ${primeraComputadora} y todos deseábamos
    la ${deseada}'</span>);
</code>
</pre>
`;

ObjD.innerHTML = ObjDHTML;

// Consola forma clasica

const consoleObjD= document.querySelector("#consoleObjD");
let consoleObjDHTML= `
<pre>
<code>
    > Object
        > otras: (3) ["Commodore 64", "Atari Amiga", "Texas TI-99 4A"]
        > sinclair: {inicial: "zx-81", evolucion: "spectrum", final: "2068"}
        > __proto__: Object
    > Mi primera computadora fue una zx-81 y todos deseábamos la Commodore 64
</code>
</pre>
`;

consoleObjD.innerHTML = consoleObjDHTML;

// Con Object Destructuring

const ObjDM= document.querySelector("#ObjDM");
let inicial ='<span class="referencia">${inicial}</span>';
let ObjDMHTML= `
<pre>
<code>
    <span class="var">let</span> <span class="referencia">{inicial}</span> = computadorasOchentosas.<span class="referencia">sinclair</span>;
    console.log(<span class="string">'Esto es usando Object Destructuring y traigo ${inicial}'</span>);
</code>
</pre>
`;

ObjDM.innerHTML = ObjDMHTML;

// Console Object Destructuring

const consoleObjDM= document.querySelector("#consoleObjDM");
let consoleObjDMHTML= `
<pre>
<code>
    > Esto es usando Object Destructuring y traigo zx-81
</code>
</pre>
`;

consoleObjDM.innerHTML = consoleObjDMHTML;
