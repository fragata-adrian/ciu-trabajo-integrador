let director = "Quentin Tarantino";
    let genero = "Acción";
    let peliculas = ["Kill Bill", "Death Proof", "Jackie Brown"];


    // Creamos el objeto con las variables a la manera antigua

    const quentin = {director, genero, peliculas};
    console.log(quentin);

// Forma antigua
const antigua= document.querySelector("#antigua");
let antiguaHTML= `
<pre>
<code>
    <span class="comentario">// Definimos las variables</span>

    <span class="var">let</span> director = <span class="string">"Quentin Tarantino"</span>;
    <span class="var">let</span> genero = <span class="string">"Acción"</span>;
    <span class="var">let</span> peliculas = [<span class="string">"Kill Bill"</span>, <span class="string">"Death Proof"</span>, <span class="string">"Jackie Brown"</span>];


    <span class="comentario">// Unimos las variables al objeto a la manera antigua</span>

    <span class="var">const</span> quentin = {
        <span class="referencia">nombre</span>: <span class="referencia">director</span>,
        <span class="referencia">genero</span>: <span class="referencia">genero</span>,
        <span class="referencia">pelis</span>: <span class="referencia">peliculas</span>
    };

    console.log(<span class="referencia">quentin</span>);
</code>
</pre>
`;

antigua.innerHTML = antiguaHTML;

// Console forma antigua

const consoleAntigua= document.querySelector("#consoleAntigua");
let consoleAntiguaHTML= `
<pre>
<code>
    > Object
        genero: "Acción"
        nombre: "Quentin Tarantino"
        > pelis: (3) ["Kill Bill", "Death Proof", "Jackie Brown"]
        > __proto__: Object
</code>
</pre>
`;

consoleAntigua.innerHTML = consoleAntiguaHTML;

// Con OLE

const OLE= document.querySelector("#OLE");
let OLEHTML= `
<pre>
<code>
    <span class="comentario">// Definimos las variables</span>

    <span class="var">let</span> director = <span class="string">"Quentin Tarantino"</span>;
    <span class="var">let</span> genero = <span class="string">"Acción"</span>;
    <span class="var">let</span> peliculas = [<span class="string">"Kill Bill"</span>, <span class="string">"Death Proof"</span>, <span class="string">"Jackie Brown"</span>];


    <span class="comentario">// Unimos las variables al objeto con Object Literal Enhacement</span>
    <span class="var">const</span> quentin = {<span class="referencia">director</span>, <span class="referencia">genero</span>, <span class="referencia">peliculas</span>};
    console.log(<span class="referencia">quentin</span>);
</code>
</pre>
`;

OLE.innerHTML = OLEHTML;


// Console OLE

const consoleOLE= document.querySelector("#consoleOLE");
let consoleOLEHTML= `
<pre>
<code>
    > Object
        director: "Quentin Tarantino"
        genero: "Acción"
        > peliculas: (3) ["Kill Bill", "Death Proof", "Jackie Brown"]
        > __proto__: Object
</code>
</pre>
`;

consoleOLE.innerHTML = consoleOLEHTML;



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