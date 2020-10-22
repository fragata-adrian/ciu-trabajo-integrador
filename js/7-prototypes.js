const prototypes = document.querySelector("#prototypes");
let nombre = '${<span class="var">this</span>.<span class="referencia">nombre</span>}';
let ocupacion = '${<span class="var">this</span>.<span class="referencia">ocupacion</span>}';
let prototypesHTML = `
<pre>
<code>
    <span class="comentario">// Definimos un objeto mediante Object Constructor</span>

    <span class="var">function</span> Personaje(<span class="referencia">nombre</span>, <span class="referencia">ocupacion</span>){
        <span class="var">this</span>.nombre = <span class="referencia">nombre</span>;
        <span class="var">this</span>.ocupacion = <span class="referencia">ocupacion</span>;
    }

    <span class="comentario">// Y armamos un Prototype para este objeto
    // anteponiendo su nombre y "prototype"
    // Tambien podriamos agregarle parametros a la funcion.</span>

    <span class="referencia">Personaje</span>.<span class="var">prototype</span>.<span class="referencia">describirPersonaje</span> = <span class="var">function</span>(){
        <span class="var">return</span> <span class="string">'El personaje es ${nombre} y su ocupación es ${ocupacion}'</span>;
    }

    <span class="comentario">// Instanciamos los objetos</span>
    
    <span class="var">const</span> personaje1 = <span class="var">new</span> <span class="referencia">Personaje</span>(<span class="string">"Dr. Emmet Brown"</span>, <span class="string">"Científico"</span>);
    <span class="var">const</span> personaje2 = <span class="var">new</span> <span class="referencia">Personaje</span>(<span class="string">"Marthy Mc Fly"</span>, <span class="string">"Viajero en el tiempo"</span>);

    <span class="comentario">// Y acá accedemos a los datos a través del Prototype que creamos</span>

    <span class="var">let</span> doc = <span class="referencia">personaje1</span>.<span class="var">describirPersonaje</span>();
    console.log(<span class="referencia">doc</span>);

    <span class="var">let</span> marthy = <span class="referencia">personaje2</span>.<span class="var">describirPersonaje</span>();
    console.log(<span class="referencia">marthy</span>);
</code>
</pre>
`;

prototypes.innerHTML = prototypesHTML;

// Console prototypes
const consolePrototypes = document.querySelector("#consolePrototypes");
let consolePrototypesHTML = `
<pre>
<code>
    > El personaje es Dr. Emmet Brown y su ocupación es Científico
    > El personaje es Marthy Mc Fly y su ocupación es Viajero en el tiempo
</code>
</pre>
`;

consolePrototypes.innerHTML = consolePrototypesHTML;

