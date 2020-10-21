// Funcion Tradicional
const funTradicionalContenedor = document.querySelector("#funTradicional");
const pintor = '${pintor}';
let funTradicionalHTML = `
<pre>
<code>
    tradicional = <span class="var">function</span>(<span class="referencia">pintor</span>){
        console.log(<span class="string">'Mi pintor favorito es <span class="referencia">${pintor}</span>'</span>);
    }

    tradicional(<span class="string">"Michelangelo Buonarotti"</span>);
</code>
</pre>
`;

funTradicionalContenedor.innerHTML = funTradicionalHTML;

// Console

const consoleTradicionalContenedor = document.querySelector("#consoleTradicional");
let consoleTradicionalHTML = `
<pre>
<code>
    > Mi pintor favorito es Michelangelo Buonarotti
</code>
</pre>
`;

consoleTradicionalContenedor.innerHTML = consoleTradicionalHTML;

// Arrow Function

const funArrowContenedor = document.querySelector("#funArrow");
let funArrowHTML = `
<pre>
<code>
    <span class="comentario">// La función pierde el nombre y se manda solo el parámetro</span>
    <span class="comentario">// si es un solo parámetro, puede ir sin paréntesis</span>
    <span class="comentario">// Nuestro parametro aqui es "pintor" y el "=>" indica que es una funcion.</span>

    <span class="var">let</span> obra = <span class="referencia">pintor</span> <span class="var">=></span> {
        <span class="var">return</span> <span class="string">'Mi pintor favorito es <span class="referencia">${pintor}</span>'</span>;
    }

    <span class="comentario">// Opcion 1</span>
    <span class="var">let</span> favorito = <span class="referencia">obra</span>(<span class="string">"Álvaro Castagnet"</span>);
    console.log(<span class="referencia">favorito</span>); 

    <span class="comentario">// Opcion 2</span>
    console.log(<span class="referencia">obra</span>(<span class="string">"Leonardo da Vinci"</span>));
</code>
</pre>
`;

funArrowContenedor.innerHTML = funArrowHTML;

// Console

const consoleArrowContenedor = document.querySelector("#consoleArrow");
let consoleArrowHTML = `
<pre>
<code>
    > Mi pintor favorito es Álvaro Castagnet
    > Mi pintor favorito es Leonardo da Vinci
</code>
</pre>
`;

// function en una linea 

const funUnaLineaContenedor = document.querySelector("#funUnaLinea");
let eleccion = '${eleccion}';
let funUnaLineaHTML = `
<pre>
<code>
    <span class="comentario">// para hacer más simple, se sacan las llaves</span>

    <span class="var">let</span> ciudad_favorita = <span class="referencia">eleccion</span> <span class="var">=></span> console.log(<span class="string">'Me encantaría vivir en <span class="referencia">${eleccion}</span>'</span>);

    <span class="comentario">// Opcion 1</span>
    <span class="referencia">ciudad_favorita</span>(<span class="string">"Roma"</span>);

    <span class="comentario">// Opcion 2</span>
    <span class="var">let</span> elegida = <span class="referencia">ciudad_favorita</span>(<span class="string">"Florencia"</span>);
</code>
</pre>
`;

funUnaLineaContenedor.innerHTML = funUnaLineaHTML;

// Console una linea

const consoleUnaLineaContenedor = document.querySelector("#consoleUnaLinea");
let consoleUnaLineaHTLM = `
<pre>
<code>
    > Me encantaría vivir en Roma
    > Me encantaría vivir en Florencia
</code>
</pre>

`;

consoleUnaLineaContenedor.innerHTML = consoleUnaLineaHTLM;

// Arrow function con mas de un parametro y sin parametros.
const extraContenedor = document.querySelector("#extra");
let eleccion1 = "${eleccion1}";
let eleccion2 = "${eleccion2}";
let extraHTML = `
<pre>
<code>
    <span class="comentario">// Con dos o mas parametros</span>
    <span class="var">let</span> favorita_city = (<span class="referencia">eleccion1</span>, <span class="referencia">eleccion2</span>) <span class="var">=></span> console.log(
        <span class="string">'Me encantaría vivir en <span class="referencia">${eleccion1}</span> o en <span class="referencia">${eleccion2}</span>'</span>
        );
    
    <span class="referencia">favorita_city</span>(<span class="string">"Montevideo", "Berlín"</span>);

    <span class="comentario">// Sin parametros</span>
    <span class="var">let</span> favorita = () <span class="var">=></span> console.log(<span class="string">'Me encantaria vivir en Buenos Aires'</span>);

    <span class="referencia">favorita</span>();
</code>
</pre>
`;

extraContenedor.innerHTML = extraHTML;

// Console extra

const consoleExtraContenedor = document.querySelector("#consoleExtra");
let consoleExtraHTML = `
<pre>
<code>
    > Me encantaría vivir en Montevideo o en Berlín
    > Me encantaria vivir en Buenos Aires
</code>
</pre>
`;

consoleExtraContenedor.innerHTML = consoleExtraHTML;









