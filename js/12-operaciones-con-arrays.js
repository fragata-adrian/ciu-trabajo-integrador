// Arreglos Ejemplo

const ejemplos= document.querySelector("#ejemplos");
let ejemplosHTML= `
<pre>
<code>
    <span class="comentario">// Definimos dos arreglos</span>

    heroes = [<span class="string">"Leia"</span>, <span class="string">"Han"</span>, <span class="string">"Luke"</span>];
    villanos = [<span class="string">"Jabba"</span>, <span class="string">"Darth Maul"</span>, <span class="string">"Lord Vader"</span>];
</code>
</pre>
`;

ejemplos.innerHTML = ejemplosHTML;


// Forma tradicional

const concatenar= document.querySelector("#concatenar");
let concatenarHTML= `
<pre>
<code>
    <span class="comentario">// Forma tradicional de concatenarlos</span>

    <span class="var">let</span> combinado = heroes.concat(villanos);
    console.log(<span class="referencia">combinado</span>); 

    <span class="comentario">// Forma nueva</span>

    <span class="var">let</span> combinado_nuevo = [...heroes, ...villanos];
    console.log(<span class="referencia">combinado_nuevo</span>); 
</code>
</pre>
`;

concatenar.innerHTML = concatenarHTML;

// Console concatenar

const consoleConcatenar= document.querySelector("#consoleConcatenar");
let consoleConcatenarHTML= `
<pre>
<code>
    > Array(6)
        0: "Leia"
        1: "Han"
        2: "Luke"
        3: "Jabba"
        4: "Darth Maul"
        5: "Lord Vader"
        length: 6
        > __proto__: Array(0)
    > Array(6)
        0: "Leia"
        1: "Han"
        2: "Luke"
        3: "Jabba"
        4: "Darth Maul"
        5: "Lord Vader"
        length: 6
        > __proto__: Array(0)
</code>
</pre>
`;

consoleConcatenar.innerHTML = consoleConcatenarHTML;

// Duplicar

const duplicar= document.querySelector("#duplicar");
let duplicarHTML= `
<pre>
<code>
    <span class="var">let</span> dupli_heroes = [...<span class="referencia">heroes</span>];

    console.log(<span class="referencia">dupli_heroes</span>);
</code>
</pre>
`;

duplicar.innerHTML = duplicarHTML;


// Console Duplicar

const consoleDuplicar= document.querySelector("#consoleDuplicar");
let consoleDuplicarHTML= `
<pre>
<code>
    > Array(3)
        0: "Leia"
        1: "Han"
        2: "Luke"
        length: 3
        > __proto__: Array(0)
</code>
</pre>
`;

consoleDuplicar.innerHTML = consoleDuplicarHTML;


// Reverse
const reverse= document.querySelector("#reverse");
let reverseHTML= `
<pre>
<code>
    <span class="var">let</span> [editado] = <span class="referencia">heroes</span>.<span class="var">reverse</span>();

    console.log(<span class="referencia">editado</span>);
    console.log(<span class="referencia">heroes</span>);

    <span class="comentario">// Para que no pase esto
    // En este caso no da vuelta el array pero si me devuelve el ultimo</span> 

    <span class="var">let</span> [editado_dos] = [...<span class="referencia">heroes</span>].<span class="var">reverse</span>();

    console.log(<span class="referencia">editado_dos</span>);
    console.log(<span class="referencia">heroes</span>);
</code>
</pre>
`;

reverse.innerHTML = reverseHTML;


// Console Reverse
const consoleReverse= document.querySelector("#consoleReverse");
let consoleReverseHTML= `
<pre>
<code>
    > Luke
    > Array(3)
        0: "Luke"
        1: "Han"
        2: "Leia"
        length: 3
        > __proto__: Array(0)
    >
    > Leia
    > Array(3)
        0: "Luke"
        1: "Han"
        2: "Leia"
        length: 3
        > __proto__: Array(0)
</code>
</pre>
`;

consoleReverse.innerHTML = consoleReverseHTML;

// operaciones

constoperaciones = document.querySelector("#operaciones");
let operacionesHTML= `
<pre>
<code>
    <span class="comentario">// También se usa para operaciones</span>

    <span class="var">let</span> suma =  (<span class="referencia">primero</span>, <span class="referencia">segundo</span>, <span class="referencia">tercero</span>) <span class="var">=></span> {
        console.log(<span class="referencia">primero</span> + <span class="referencia">segundo</span> + <span class="referencia">tercero</span>);
    };

    numeros = [<span class="num">4</span>,<span class="num">5</span>,<span class="num">6</span>];

    <span class="referencia">suma</span>(...<span class="referencia">numeros</span>);
</code>
</pre>
`;

operaciones.innerHTML = operacionesHTML;

// console operaciones

const consoleOperaciones= document.querySelector("#consoleOperaciones");
let consoleOperacionesHTML= `
<pre>
<code>
    > 15
</code>
</pre>
`;

consoleOperaciones.innerHTML = consoleOperacionesHTML;

// Segundo ejemplo

const ejemplo2= document.querySelector("#ejemplo2");
let ejemplo2HTML= `
<pre>
<code>
    <span class="var">let</span> personalidades = [
        {nombre: <span class="string">"Mozart"</span>, area: <span class="string">"Música"</span>, nacio: <span class="num">1756</span>, pais: <span class="string">"Salzburgo"</span>},
        {nombre: <span class="string">"Einstein"</span>, area: <span class="string">"Física"</span>, nacio: <span class="num">1879</span>, pais: <span class="string">"Alemania"</span>},
        {nombre: <span class="string">"Tesla"</span>, area: <span class="string">"Electricidad"</span>, nacio: <span class="num">1856</span>, pais: "<span class="string">Imperio Austro Húngaro"</span>},
        {nombre: <span class="string">"Ada Lovelace"</span>, area: <span class="string">"Matemática"</span>, nacio: <span class="num">1815</span>, pais: <span class="string">"Inglaterra"</span>},
        {nombre: <span class="string">"Lola Mora"</span>, area: <span class="string">"Escultura"</span>, nacio: <span class="num">1866</span>, pais: <span class="string">"Argentina"</span>},
    ];
</code>
</pre>
`;

ejemplo2.innerHTML = ejemplo2HTML;

// filtrar por año

const filter= document.querySelector("#filter");
let filterHTML= `
<pre>
<code>
    <span class="comentario">// Con filter itera sobre todos los elementos
    // Vamos a filtrar los que el año de nacimiento
    // sea mayor a 1850</span>

    <span class="var">const</span> mayores = <span class="referencia">personalidades</span>.<span class="var">filter</span>(<span class="referencia">personalidad</span> <span class="var">=></span> {
        <span class="var">return</span> <span class="referencia">personalidad</span>.<span class="var">nacio</span> > <span class="num">1850</span>;
    });

    console.log(<span class="referencia">mayores</span>);
</code>
</pre>
`;

filter.innerHTML = filterHTML;

// console filtar por año

const consoleFilter= document.querySelector("#consoleFilter");
let consoleFilterHTML= `
<pre>
<code>
    > Array(3)
        0:{
            nombre: "Einstein", 
            area: "Física", 
            nacio: 1879, 
            pais: "Alemania"
        }
        1:{
            nombre: "Tesla", 
            area: "Electricidad", 
            nacio: 1856, 
            pais: "Imperio Austro Húngaro"
        }
        2:{
            nombre: "Lola Mora", 
            area: "Escultura", 
            nacio: 1866, 
            pais: "Argentina"
        }
        length: 3
        > __proto__: Array(0)

</code>
</pre>
`;

consoleFilter.innerHTML = consoleFilterHTML;

// Extraer datos

const extraer= document.querySelector("#extraer");
let extraerHTML= `
<pre>
<code>
    <span class="comentario">// Extraigo todos los datos de Tesla</span>
    
    <span class="var">const</span> tesla = <span class="referencia">personalidades</span>.<span class="var">find</span>(<span class="referencia">personalidad</span> <span class="var">=></span> {
        <span class="var">return</span> <span class="referencia">personalidad</span>.<span class="var">nombre</span> <span class="num">===</span> <span class="string">"Tesla"</span>;
    });

    <span class="comentario">// Pido solo el area</span>
    console.log(<span class="string">"Nikola tesla se dedicó al área de "</span> + <span class="referencia">tesla</span>.<span class="var">area</span>);
</code>
</pre>
`;

extraer.innerHTML = extraerHTML;

// Console extraer
const consoleExtraer= document.querySelector("#consoleExtraer");
let consoleExtraerHTML= `
<pre>
<code>
    > Nikola tesla se dedicó al área de Electricidad
</code>
</pre>
`;

consoleExtraer.innerHTML = consoleExtraerHTML;

// Reduce

const reduce= document.querySelector("#reduce");
let reduceHTML= `
<pre>
<code>
    <span class="var">let</span> total_anios = <span class="referencia">personalidades</span>.<span class="var">reduce</span>((<span class="referencia">anios_total</span>, <span class="referencia">personalidad</span>) <span class="var">=></span> {
        <span class="var">return</span> <span class="referencia">anios_total</span> + <span class="referencia">personalidad</span>.<span class="var">nacio</span>;
    }, <span class="num">0</span>);

    console.log (<span class="string">"Si sumamos los años de nacimiento de todxs nos da "</span> + <span class="referencia">total_anios</span> );
    console.log(<span class="string">"El año promedio de nacimiento es "</span> + (<span class="referencia">total_anios</span>/<span class="referencia">personalidades</span>.<span class="var">length</span>));
</code>
</pre>
`;

reduce.innerHTML = reduceHTML;

// console reduce

const consoleReduce= document.querySelector("#consoleReduce");
let consoleReduceHTML= `
<pre>
<code>
    > Si sumamos los años de nacimiento de todxs nos da 9172
    > El año promedio de nacimiento es 1834.4
</code>
</pre>
`;

consoleReduce.innerHTML = consoleReduceHTML;

