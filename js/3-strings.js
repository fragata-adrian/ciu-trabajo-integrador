const codeStringContenedor = document.querySelector("#codeString");
const nombre ="${nombre}";
const posicion ="${posicion}";
const numero = 10;
let codeStringHTML = `
<pre>
<code>
    <span class="var">const</span> nombre = <span class="string">"Maradona"</span>;
    <span class="var">const</span> posicion = <span class="string">"10"</span>;

    <span class="comentario">// Primer caso</span>
    console.log (<span class="referencia">nombre</span> + <span class="string">" juega de "</span> + <span class="referencia">posicion</span>);
    
    <span class="comentario">// Segundo caso</span>
    console.log (<span class="string">"${nombre} juega de ${posicion}"</span>);
    
    <span class="comentario">// Tercer caso</span>
    console.log ('<span class="referencia">${nombre}</span> juega de <span class="referencia">${posicion}</span>');
    </code>
</pre>
`;

// Consola Strings
codeStringContenedor.innerHTML = codeStringHTML;

const consoleStringContenedor = document.querySelector("#consoleString");
let consoleStringHTML = `

<pre>
<code>
    > Maradona juega de 10
    > ${nombre} juega de ${posicion}
    > Maradona juega de 10
</code>
</pre>
`;

consoleStringContenedor.innerHTML = consoleStringHTML;

