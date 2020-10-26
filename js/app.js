// Barra de navegacion

const barNav = document.querySelector("#barNav");
const nav = `
<ul class="nav">
	<li><a href="index.html">Inicio</a></li>
	<li><a href="">Temas</a>
		<ul>
            <li><a href="">Primera Unidad</a>
                <ul>
					<li><a href="1-variables.html">Variables</a></li>
			        <li><a href="2-funciones.html">Funciones</a></li>
			        <li><a href="3-strings.html">Representacion de Strings</a></li>
                    <li><a href="4-arrow-function.html">Arrow Function</a></li>
                    <li><a href="5-object-literal.html">Object Literal</a></li>
                    <li><a href="6-object-constructor.html">Object Constructor</a></li>
                    <li><a href="7-prototypes.html">Prototypes</a></li>
				</ul>
            </li>
            <li><a href="">Segunda Unidad</a>
                <ul>
					<li><a href="8-object-destructurin.html">Object Destructuring</a></li>
			        <li><a href="9-obj-literal-enhacement.html">Object literal enhacement</a></li>
                    <li><a href="10-metodos-de-un-objeto.html">Metodos de un Objeto</a></li>
                    <li><a href="11-generar-html.html">Generar HTML con JS</a></li>
                    <li><a href="12-operaciones-con-arrays.html">Operaciones con Arrays</a></li>
                    <li><a href="13-promises.html">Promises</a></li>
                </ul>
            </li>
            <li><a href="">Tercera Unidad</a>
                <ul>
                    <li><a href="14-poo.html">Programacion<br/> Orientada a Objetos</a></li>
                    <li><a href="15-import-export.html">Importar y Exportar</a></li>
                </ul>    
            </li>
		</ul>
	</li>
</ul>
`;

barNav.innerHTML = nav;