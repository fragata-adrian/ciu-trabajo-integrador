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


heroes = ["Leia", "Han", "Luke"];
villanos = ["Jabba", "Darth Maul", "Lord Vader"];

console.log(heroes);
let [editado] = heroes.reverse();

//console.log(editado);
console.log(heroes);

// Para que no pase esto 

let [editado_dos] = [...heroes].reverse();

//console.log(editado_dos);
console.log(heroes);