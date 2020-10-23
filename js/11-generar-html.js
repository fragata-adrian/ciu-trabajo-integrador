// Tradicional
const tradicional= document.querySelector("#tradicional");
let deporte ='${deporte}';
let tradicionalHTML= `
<pre>
<code>
    <span class="var">let</span> deportes_olimpicos = [<span class="string">"Remo"</span>, <span class="string">"Lucha Libre"</span>, <span class="string">"Tenis de mesa"</span>];

    <span class="comentario">// Vemos el array</span>
    console.log(<span class="referencia">deportes_olimpicos</span>);

    <span class="comentario">// Defino un contenedor, lo apunto según el id que le puse en el documento html</span>

    <span class="var">const</span> contenedor = document.<span class="var">querySelector</span>(<span class="string">"#app"</span>);

    <span class="comentario">// Defino el contenido, primero como una cadena vacía</span>

    <span class="var">let</span> html = <span class="string">''</span>;

    <span class="comentario">// Y luego creo la cadena, iterando sobre el array
    // Hay varias maneras, (while - for)
    // Vamos a usar por ejemplo el forEach
    // Itera sobre los elementos del array y la variable "deporte" va tomando el valor
    // de esos elementos.</span>

    <span class="referencia">deportes_olimpicos</span>.<span class="var">forEach</span>(<span class="referencia">deporte</span> <span class="var">=></span> {
        <span class="referencia">html</span> += <span class="string">'< li> ${deporte} < /li>'</span>;
    });

    <span class="comentario">// Y luego lo "renderizamos" con innerHTML</span>

    <span class="referencia">contenedor</span>.<span class="var">innerHTML</span> = <span class="referencia">html</span>;
</code>
</pre>
`;

tradicional.innerHTML = tradicionalHTML;

// Utilizando .map

const map= document.querySelector("#map");
let mapHTML= `
<pre>
<code>
    <span class="comentario">// Creo la cadena, iterando sobre el array</span>
    <span class="referencia">deportes_olimpicos</span>.<span class="var">map</span>(<span class="referencia">deporte</span> <span class="var">=></span> {
        <span class="referencia">html</span> += <span class="string">'< li> ${deporte} < /li>'</span>;
    });
</code>
</pre>
`;

map.innerHTML = mapHTML;


const ObjK= document.querySelector("#ObjK");
let nombre = '<span class="referencia">${<span class="var">this</span>.nombre}</span>';
let titulo = '<span class="referencia">${<span class="var">this</span>.titulo}</span>';
let arma = '<span class="referencia">${<span class="var">this</span>.arma}</span>';
let ObjKHTML= `
<pre>
<code>
    <span class="var">const</span> obiWan = {
        <span class="referencia">nombre</span>: <span class="string">"Obi Wan Kenobi"</span>,
        <span class="referencia">titulo</span>: <span class="string">"Master Jedi"</span>,
        <span class="referencia">armado</span>: <span class="referencia">true</span>,
        <span class="referencia">arma</span>: <span class="string">"Sable laser"</span>,
        <span class="var">descripcion</span>(){
            console.log(
                <span class="string">'El personaje ${nombre} es ${titulo} y está armado con ${arma}'</span>
            );
        }
    }
    
    <span class="comentario">// Pido solo las claves</span>
    console.log(<span class="num">Object</span>.<span class="var">keys</span>(<span class="referencia">obiWan</span>));
</code>
</pre>
`;

ObjK.innerHTML = ObjKHTML;

// Console 

const consoleObjK= document.querySelector("#consoleObjK");
let consoleObjKHTML= `
<pre>
<code>
    > Array(5)
        0: "nombre"
        1: "titulo"
        2: "armado"
        3: "arma"
        4: "descripcion"
        length: 5
        __proto__: Array(0)
</code>
</pre>
`;

consoleObjK.innerHTML = consoleObjKHTML;






const obiWan = {
    nombre: "Obi Wan Kenobi",
    titulo: "Master Jedi",
    armado: true,
    arma: "Sable laser",
    descripcion(){
        console.log(`El personaje ${this.nombre} es ${this.titulo} y está armado con ${this.arma}`);
    }
} 

console.log(Object.keys(obiWan));
