
// Simulada
const simulada= document.querySelector("#simulada");
let simuladaHTML= `
<pre>
<code>
    <span class="var">let</span> darDeBaja = <span class="var">new</span> <span class="num">Promise</span>((<span class="referencia">resolve</span>, <span class="referencia">reject</span>) <span class="var">=></span> {
        <span class="comentario">// Para simular una consulta
        // con timeout y error </span>

        setTimeout(() <span class="var">=></span> {
            <span class="comentario">// La variable "baja" representa si la consulta
            // se realizo correctamente o hubo un fallo</span>
            <span class="var">let</span> baja = <span class="referencia">true</span>;

            <span class="var">if</span> (<span class="referencia">baja</span>) {
                <span class="referencia">resolve</span>(<span class="string">"Se ha dado de baja"</span>);
            } <span class="var">else</span> {
                <span class="referencia">reject</span>(<span class="string">"No se ha podido dar de baja"</span>);
            }
        }, <span class="num">2500</span>);
    });

    console.log (<span class="referencia">darDeBaja</span>);
</code>
</pre>
`;

simulada.innerHTML = simuladaHTML;

// Console simulada

const consoleSimulada= document.querySelector("#consoleSimulada");
let consoleSimuladaHTML= `
<pre>
<code>
    > Promise {< pending >}
</code>
</pre>
`;

consoleSimulada.innerHTML = consoleSimuladaHTML;

// Simulada 2

const simulada2= document.querySelector("#simulada2");
let simulada2HTML= `
<pre>
<code>
    <span class="referencia">darDeBaja</span>.<span class="var">then</span>(<span class="referencia">resultado_consulta</span> <span class="var">=></span> {
        console.log(<span class="referencia">resultado_consulta</span>);
    })
</code>
</pre>
`;

simulada2.innerHTML = simulada2HTML;

// Console simulada 2

const consoleSimulada2= document.querySelector("#consoleSimulada2");
let consoleSimulada2HTML= `
<pre>
<code>
    > Promise {< pending >}
    > Se ha dado de baja
</code>
</pre>
`;

// Real

const real= document.querySelector("#real");
let cantidad ='<span class="referencia">${cantidad}</span>';
let realHTML= `
<pre>
<code>
    <span class="var">const</span> traerUsers = <span class="referencia">cantidad</span> <span class="var">=></span> <span class="var">new</span> <span class="num">Promise</span>((<span class="referencia">resolve</span>, <span class="referencia">reject</span>) <span class="var">=></span> {

        <span class="comentario">// Vamos por partes
        // Primero la url de la api</span>

        <span class="var">const</span> url = <span class="string">'https://randomuser.me/api/?results=${cantidad}&nat=us'</span>;

        <span class="comentario">// Segundo el llamado a AJAX</span>
        <span class="var">const</span> xhr = <span class="var">new</span> <span class="num">XMLHttpRequest</span>();

        <span class="comentario">// Tercero, abrimos la conexión
        // El "true" es si es síncrono</span>

        <span class="referencia">xhr</span>.<span class="var">open</span>(<span class="string">'GET'</span>, <span class="referencia">url</span>, <span class="referencia">true</span>);

        <span class="comentario">// Cuarto, estamos ya trayendo los registros
        // El 200 es el código que todo salió bien
        // El "results" viene del JSON de la API.
        // esta es la parte más compleja.</span>

        <span class="referencia">xhr</span>.<span class="var">onload</span> = () <span class="var">=></span> {
            <span class="var">if</span>(xhr.<span class="var">status</span> === <span class="num">200</span>) {
                <span class="referencia">resolve</span>(JSON.<span class="var">parse</span>(<span class="referencia">xhr</span>.<span class="var">responseText</span>).<span class="var">results</span>);
            }<span class="var">else</span>{
                <span class="referencia">reject</span>(Error(<span class="referencia">xhr</span>.<span class="var">statusText</span>));
            };
        };

        <span class="comentario">// Quinto opcional - On Error</span>
        <span class="referencia">xhr</span>.<span class="var">onerror</span> = (<span class="referencia">error</span>) <span class="var">=></span> <span class="referencia">reject</span>(<span class="referencia">error</span>);

        <span class="comentario">// Quinto o sexto, parte final, enviarlo</span>
        <span class="referencia">xhr</span>.<span class="var">send</span>();
    });

    <span class="comentario">// Y armamos todo para sacarlo por la consola</span>

    <span class="referencia">traerUsers</span>(<span class="num">5</span>).<span class="var">then</span>(
        <span class="referencia">usuarios</span> <span class="var">=></span> console.log(<span class="referencia">usuarios</span>),
        <span class="referencia">error</span> <span class="var">=></span> console.<span class="var">error</span>(
            <span class="var">new</span> <span class="num">Error</span>("Se produjo el error" + <span class="referencia">error</span>),
        )
    );
</code>
</pre>
`;

real.innerHTML = realHTML;

// Console Real consoleReal

const consoleReal= document.querySelector("#consoleReal");
let consoleRealHTML= `
<pre>
<code style="size: 10;">
 > Array(5)
  > 0: {gender: "female", name: {…}, location: {…}, email: "elsie.arnold@example.com", login: 
  > 1: {gender: "female", name: {…}, location: {…}, email: "ethel.weaver@example.com", login: 
  > 2: {gender: "male", name: {…}, location: {…}, email: "wyatt.herrera@example.com", login: 
  > 3: {gender: "female", name: {…}, location: {…}, email: "jessie.harris@example.com", login: 
  > 4: {gender: "male", name: {…}, location: {…}, email: "daniel.torres@example.com", login: 
  length: 5
</code>
</pre>
`;

consoleReal.innerHTML = consoleRealHTML;

// mostrar

const mostrar= document.querySelector("#mostrar");
let name = '<span class="referencia">${registro.name.first}</span>';
let lastName = '<span class="referencia">${registro.name.last}</span>';
let pais = '<span class="referencia">${registro.nat}</span>';
let img = '<span class="referencia">${registro.picture.medium}</span>';
let mostrarHTML= `
<pre>
<code>
    <span class="referencia">traerUsers</span>(<span class="num">5</span>).<span class="var">then</span>(
        <span class="referencia">registros</span> <span class="var">=></span> <span class="referencia">generarHTML</span>(<span class="referencia">registros</span>),
        <span class="referencia">error</span> <span class="var">=></span> console.<span class="var">error</span>(
            <span class="var">new</span> <span class="num">Error</span>(<span class="string">"Se produjo el error"</span> + <span class="referencia">error</span>),
        )
    );

    <span class="comentario">// Ahora defino la generarlHTML</span>

    <span class="var">function</span> generarHTML(<span class="referencia">registros</span>) {
        <span class="var">let</span> html_generado = <span class="string">""</span>;    
        <span class="referencia">registros</span>.<span class="var">forEach</span>(<span class="referencia">registro</span> <span class="var">=></span> {
            console.log(<span class="referencia">registro</span>);
            <span class="referencia">html_generado</span> += <span class="string">'
                < li>
                    Nombre: ${name} ${lastName}
                    País: ${pais}
                    Imagen:
                        < img src="${img}" />
                < /li>
                '</span>;

            <span class="comentario">// Acordarse de la lógica "dónde lo ubico, qué ubico"</span>
            <span class="var">const</span> contenedorAPI = document.<span class="var">querySelector</span>(<span class="string">'#app_api'</span>);
            <span class="referencia">contenedorAPI</span>.<span class="var">innerHTML</span> = <span class="referencia">html_generado</span>; 

        })
    };
</code>
</pre>
`;

mostrar.innerHTML = mostrarHTML;

// mostrar Resultado

const htmlMostrar= document.querySelector("#htmlMostrar");
let htmlMostrarHTML= `
<pre>
<code>
    <span class="referencia">< !DOCTYPE html ></span>
    <span class="referencia">< html ></span>
        <span class="referencia">< head ></span>
            <span class="referencia">< meta <span class="num">charset=</span><span class="string">"utf-8"</span> >
            <span class="referencia">< title></span>Users<span class="referencia">< /title ></span>
        <span class="referencia">< /head ></span>
        <span class="referencia">< body ></span>
            <span class="referencia">< div <span class="num">id=</span><span class="string">"app_api"</span> ></div>
            <span class="referencia">< script <span class="num">src=</span><span class="string">"app.js"</span> ></script>
        <span class="referencia">< /body ></span>
    <span class="referencia">< /html ></span>
</code>
</pre>
`;

htmlMostrar.innerHTML = htmlMostrarHTML;


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