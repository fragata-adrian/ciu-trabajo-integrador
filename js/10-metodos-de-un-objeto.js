
// Metodos

const metodos= document.querySelector("#metodos");
let nombre = '<span class="referencia">${<span class="var">this</span>.nombre}</span>';
let titulo = '<span class="referencia">${<span class="var">this</span>.titulo}</span>';
let arma = '<span class="referencia">${<span class="var">this</span>.arma}</span>';
let metodosHTML= `
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

    <span class="referencia">obiWan</span>.<span class="var">descripcion</span>();
</code>
</pre>
`;

metodos.innerHTML = metodosHTML;

// Console metodos

const consoleMetodos= document.querySelector("#consoleMetodos");
let consoleMetodosHTML= `
<pre>
<code>
    > El personaje Obi Wan Kenobi es Master Jedi y está armado con Sable laser
</code>
</pre>
`;

consoleMetodos.innerHTML = consoleMetodosHTML;

// Extra

const extra= document.querySelector("#extra");
let extraHTML= `
<pre>
<code>
    <span class="referencia">descripcion</span>: <span class="var">function</span>(){
        console.log(
            <span class="string">'El personaje ${nombre} es ${titulo} y está armado con ${arma}'</span>
        );
    }
</code>
</pre>
`;

extra.innerHTML = extraHTML;

