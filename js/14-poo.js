// Ejemplo Jugador
const jugador= document.querySelector("#jugador");
let jugadorHTML= `
<pre>
<code>
    <span class="comentario">// Creamos una clase</span>

    <span class="var">class</span> <span class="num">Jugador</span> { <span class="var">constructor</span> (<span class="referencia">nombre</span>, <span class="referencia">posicion</span>) {
            <span class="var">this</span>.<span class="referencia">nombre</span> = <span class="referencia">nombre</span>;
            <span class="var">this</span>.<span class="referencia">posicion</span> = <span class="referencia">posicion</span>
        }
    };

    <span class="comentario">// Instanciamos varios objetos</span>

    <span class="var">let</span> jugador1 = <span class="var">new</span> <span class="num">Jugador</span>(<span class="string">"Lionel Messi"</span>, <span class="string">"10"</span>);
    <span class="var">let</span> jugador2 = <span class="var">new</span> <span class="num">Jugador</span>(<span class="string">"Cristiano Ronaldo"</span>, <span class="string">"7"</span>);
    <span class="var">let</span> jugador3 = <span class="var">new</span> <span class="num">Jugador</span>(<span class="string">"Franco Armani"</span>, <span class="string">"Arquero"</span>);

    console.log (<span class="referencia">jugador1</span>);
    console.log (<span class="referencia">jugador2</span>);
    console.log (<span class="referencia">jugador3</span>);
</code>
</pre>
`;

jugador.innerHTML = jugadorHTML;


// Consola Ejemplo jugador 

const consoleJugador= document.querySelector("#consoleJugador");
let consoleJugadorHTML= `
<pre>
<code>
    > Jugador
        nombre: "Lionel Messi"
        posicion: "10"
    > Jugador
        nombre: "Cristiano Ronaldo"
        posicion: "7"
    > Jugador
        nombre: "Franco Armani"
        posicion: "Arquero"
</code>
</pre>
`;

consoleJugador.innerHTML = consoleJugadorHTML;

// Ejemplo jugador leyenda

const leyenda= document.querySelector("#leyenda");
let nombre ='<span class="referencia">${this.nombre}</span>';
let posicion = '<span class="referencia">${this.posicion}</span>';
let leyendaHTML= `
<pre>
<code>
    <span class="var">class</span> <span class="num">JugadorLeyenda</span> { <span class="var">constructor</span> (<span class="referencia">nombre</span>, <span class="referencia">posicion</span>) {
            <span class="var">this</span>.<span class="referencia">nombre</span> = <span class="referencia">nombre</span>;
            <span class="var">this</span>.<span class="referencia">posicion</span> = <span class="referencia">posicion</span>;
        }
        <span class="var">mostrar</span>() {
            <span class="var">return</span> <span class="string">'La leyenda ${nombre} jugaba de ${posicion}'</span>;
        }
    };

    <span class="var">let</span> jugadorLeyenda1 = <span class="var">new</span> <span class="num">JugadorLeyenda</span>(<span class="string">"Diego Maradona"</span>, <span class="string">"El 10 eterno"</span>);
    console.log(<span class="referencia">jugadorLeyenda1</span>);
    console.log (<span class="referencia">jugadorLeyenda1</span>.<span class="var">mostrar</span>());
</code>
</pre>
`;

leyenda.innerHTML = leyendaHTML;

// Console ejemplo jugadpr leyenda

const consoleLeyenda= document.querySelector("#consoleLeyenda");
let consoleLeyendaHTML= `
<pre>
<code>
    > JugadorLeyenda
        nombre: "Diego Maradona"
        posicion: "El 10 eterno"
        > __proto__:
            constructor: class JugadorLeyenda
            mostrar: ƒ mostrar()
            __proto__: Object
    > La leyenda Diego Maradona jugaba de El 10 eterno
</code>
</pre>
`;

consoleLeyenda.innerHTML = consoleLeyendaHTML;

// herencia

const herencia= document.querySelector("#herencia");
let epoca ='<span class="referencia">${this.epoca}</span>';
let herenciaHTML= `
<pre>
<code>
    <span class="var">class</span> <span class="num">JugadorFracasado</span> <span class="var">extends</span> <span class="num">JugadorLeyenda</span><span class="referencia"> {</span>
        <span class="var">constructor</span>(<span class="referencia">nombre</span>, <span class="referencia">posicion</span>, <span class="referencia">epoca</span>) {
            <span class="num">super</span>(<span class="referencia">nombre</span>, <span class="referencia">posicion</span>);
            <span class="var">this</span>.<span class="referencia">epoca</span> = <span class="referencia">epoca</span>;
        };
        <span class="var">saludar</span>(){
            <span class="var">return</span> <span class="string">'Hola ${nombre}, fracasado!. Te vi una vez ${epoca}.'</span>;
        }

    }

    <span class="comentario">//Creo una instancia de esta nueva clase</span>
    <span class="var">let</span> fracasado = <span class="var">new</span> <span class="num">JugadorFracasado</span>(<span class="string">'Javier Castrillo'</span>, <span class="string">'El último 11'</span>, <span class="string">'en los 80'</span>);


    <span class="comentario">// Ya heredo los métodos</span>
    console.log(<span class="referencia">fracasado</span>.<span class="var">mostrar</span>());

    <span class="comentario">// Y uso el nuevo</span>
    console.log(<span class="referencia">fracasado</span>.<span class="var">saludar</span>());
</code>
</pre>
`;

herencia.innerHTML = herenciaHTML;

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