// Exportar

const exportar= document.querySelector("#exportar");
let anio ='<span class="referencia">${anio}</span>';
let circunstancia ='<span class="referencia">${circunstancia}</span>';
let marca ='<span class="referencia">${this.marca}</span>';
let pais ='<span class="referencia">${this.pais}</span>';
let exportarHTML= `
<pre>
<code>
    <span class="comentario">// Yo puedo exportar cosas de un archivo js a otro
    // Por ejemplo una variable
    // y la importo con el mismo nombre en otro js</span>

    <span class="var">export</span> <span class="var">const</span> materia = <span class="string">"Construcción de Interfases de Usuario"</span>;

    <span class="comentario">// También hay una exportación por default
    // que no requiere mantener el nombre</span>

    <span class="var">const</span> universidad = <span class="string">"Universidad Nacional de Hurlingham"</span>;
    <span class="var">export</span> <span class="var">default</span> <span class="referencia">universidad</span>;

    <span class="comentario">// Claro que puedo exportar un objeto</span>

    <span class="var">export</span> <span class="var">const</span> diaClase = {
        <span class="referencia">dia</span>: <span class="string">"Jueves"</span>,
        <span class="referencia">hora</span>: <span class="string">"18:00"</span>
    };


    <span class="comentario">// Y una función entera</span>

    <span class="var">export</span> <span class="var">const</span> recordar = (<span class="referencia">anio</span>, <span class="referencia">circunstancia</span>) <span class="var">=></span> {</span>
        <span class="var">return</span> <span class="string">'El año ${anio} será recordado por ${circunstancia}'</span>;
    };

    <span class="comentario">// Y por supuesto una clase también!</span>

    <span class="var">export</span> <span class="var">class</span> <span class="num">Auto</span> { <span class="var">constructor</span> (<span class="referencia">marca</span>, <span class="referencia">pais</span>) {
            <span class="var">this</span>.<span class="referencia">marca</span> = <span class="referencia">marca</span>;
            <span class="var">this</span>.<span class="referencia">pais</span> = <span class="referencia">pais</span>
        }
    };

    <span class="comentario">// Y por supuesto la clase con método </span>

    <span class="var">export</span> <span class="var">class</span> <span class="num">Moto</span> { <span class="var">constructor</span> (<span class="referencia">marca</span>, <span class="referencia">pais</span>) {
            <span class="var">this</span>.<span class="referencia">marca</span> = <span class="referencia">marca</span>;
            <span class="var">this</span>.<span class="referencia">pais</span>= <span class="referencia">pais</span>
        }
        <span class="var">describir</span>() {
            <span class="var">return</span> <span class="string">'La moto ${marca} es originaria de ${pais}'</span>;
        }
    };
</code>
</pre>
`;

exportar.innerHTML = exportarHTML;

// importar

const importar= document.querySelector("#importar");
let importarHTML= `
<pre>
<code>
    <span class="comentario">// Primero y antes de hacer nada realizamos los import que deseemos</span>

    <span class="var">import</span> <span class="referencia">{materia}</span> <span class="var">from</span> <span class="string">'./exportar.js'</span>;
    <span class="var">import</span> <span class="referencia">miFacu</span> <span class="var">from</span> <span class="string">'./exportar.js'</span>;
    <span class="var">import</span> <span class="referencia">{diaClase}</span> <span class="var">from</span> <span class="string">'./exportar.js'</span>;
    <span class="var">import</span> <span class="referencia">{recordar}</span> <span class="var">from</span> <span class="string">'./exportar.js'</span>;
    <span class="var">import</span> <span class="referencia">{Auto}</span> <span class="var">from</span> <span class="string">'./exportar.js'</span>;
    <span class="var">import</span> <span class="referencia">{Moto}</span> <span class="var">from</span> <span class="string">'./exportar.js'</span>;

    <span class="comentario">// Acá imprimo la variable que traje con el mismo nombre</span>

    console.log(<span class="referencia">materia</span>);

    <span class="comentario">// Y acá importé el default, por eso puedo poner el nombre que quiera</span>

    console.log(<span class="referencia">miFacu</span>);

    <span class="comentario">// Imprimo el objeto importado</span>

    console.log(<span class="referencia">diaClase</span>);

    <span class="comentario">// Uso una función importada</span>

    <span class="var">const</span> anioActual = <span class="var">recordar</span>(<span class="string">"2020"</span>, <span class="string">"pandemia"</span>);
    console.log(<span class="referencia">anioActual</span>);

    <span class="comentario">// Y una clase también</span>

    <span class="var">const</span> auto1 = <span class="var">new</span> <span class="num">Auto</span>(<span class="string">"Ferrari"</span>, <span class="string">"Italia"</span>);
    console.log(<span class="referencia">auto1</span>);


    <span class="comentario">// Y por supuesto una clase con método</span>

    <span class="var">const</span> moto1 = <span class="var">new</span> <span class="num">Moto</span>(<span class="string">"Ducati"</span>, <span class="string">"Italia"</span>);
    <span class="var">const</span> salida = <span class="referencia">moto1</span>.<span class="var">describir</span>();
    console.log(<span class="referencia">salida</span>);
</code>
</pre>
`;

importar.innerHTML = importarHTML;

// Console importar

const consoleImportar= document.querySelector("#consoleImportar");
let consoleImportarHTML= `
<pre>
<code>
    > Construcción de Interfases de Usuario
    > Universidad Nacional de Hurlingham
    > {dia: "Jueves", hora: "18:00"}
    > El año 2020 será recordado por pandemia
    > Auto {marca: "Ferrari", pais: "Italia"}
    > La moto Ducati es originaria de Italia
</code>
</pre>
`;

consoleImportar.innerHTML = consoleImportarHTML;
