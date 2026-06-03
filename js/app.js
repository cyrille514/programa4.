// ==========================================
// 1. FUNCIÓN CORRESPONDIENTE (LÓGICA PURA)
// ==========================================

/**
 * Función flecha encargada de repetir un texto agregando un espacio de separación.
 * Trabaja de forma aislada recibiendo datos estrictamente por parámetro.
 * 
 * @param {string} textoBase - La cadena de texto recibida por parámetro.
 * @param {number} cantidadVeces - El número de repeticiones recibido por parámetro.
 * @returns {string} Devuelve la cadena repetida generada usando la sentencia return de forma explícita.
 */
const repetirTextoConEspacio = (textoBase, cantidadVeces) => {
    // Creamos un array vacío con el tamaño indicado, lo rellenamos con el texto y lo unimos con espacios.
    // Esto evita que quede un espacio en blanco flotando al final de la última palabra.
    const resultadoTexto = Array(cantidadVeces).fill(textoBase).join(" ");
    
    // Devuelve el texto generado usando return
    return resultadoTexto;
};


// ==========================================
// 2. FUNCIÓN CONTROLADORA CENTRAL (MAIN)
// ==========================================

/**
 * Función Main: Motor central de la aplicación.
 * Se activa únicamente al hacer clic en el botón Ejecutar. Valida y renderiza los datos.
 */
const main = () => {
    // Captura de los elementos de la pantalla (DOM)
    const inputTexto = document.getElementById("input-texto");
    const inputVeces = document.getElementById("input-veces");
    const resultadoPantalla = document.getElementById("resultado-pantalla");
    const contenedorResultado = document.getElementById("contenedor-resultado");
    const tituloResultado = document.getElementById("titulo-resultado");

    // REQUISITO A: Lectura de los datos desde la interfaz gráfica
    const textoLeido = inputTexto.value;
    const vecesLeidasRaw = inputVeces.value;

    // Restablecer estilos visuales base antes de cada procesamiento
    contenedorResultado.className = "border border-gray-200 bg-gray-50 rounded-lg p-4 font-mono";
    tituloResultado.textContent = "Resultado por Pantalla:";
    tituloResultado.className = "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1";

    // REQUISITO B: Validación estricta de los datos de entrada
    // Validación 1: El texto principal no puede estar vacío
    if (textoLeido.trim() === "") {
        resultadoPantalla.textContent = "Error: El texto original no puede estar vacío.";
        contenedorResultado.classList.add("border-red-300", "bg-red-50");
        tituloResultado.classList.add("text-red-400");
        return; // Frena el flujo del programa debido a datos inválidos
    }

    // Validación 2: El campo numérico de repeticiones no puede estar vacío
    if (vecesLeidasRaw.trim() === "") {
        resultadoPantalla.textContent = "Error: Introduce el número de repeticiones.";
        contenedorResultado.classList.add("border-red-300", "bg-red-50");
        tituloResultado.classList.add("text-red-400");
        return;
    }

    const numeroVeces = parseInt(vecesLeidasRaw);

    // Validación 3: El número de repeticiones debe ser un número positivo mayor a 0
    if (numeroVeces <= 0) {
        resultadoPantalla.textContent = "Error: El número de repeticiones debe ser mayor que 0.";
        contenedorResultado.classList.add("border-red-300", "bg-red-50");
        tituloResultado.classList.add("text-red-400");
        return;
    }

    // REQUISITO C: Pasa los datos validados por parámetro a la función correspondiente
    // REQUISITO D: Recibe el resultado y lo almacena estrictamente en una variable
    const resultadoRecibido = repetirTextoConEspacio(textoLeido, numeroVeces);

    // REQUISITO E: Muestra la variable que contiene el resultado por pantalla
    resultadoPantalla.textContent = resultadoRecibido;
};


// ==========================================
// 3. ENTORNO DE ARRANQUE Y ESCUCHADORES (LISTENERS)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const btnProcesar = document.getElementById("btn-procesar");
    const btnLimpiar = document.getElementById("btn-limpiar");
    const inputTexto = document.getElementById("input-texto");
    const inputVeces = document.getElementById("input-veces");
    const resultadoPantalla = document.getElementById("resultado-pantalla");

    /**
     * Resetea el formulario de la interfaz a su estado limpio original
     */
    const limpiarCamposFormulario = () => {
        inputTexto.value = "";
        inputVeces.value = "";
        resultadoPantalla.textContent = "...";
        
        const contenedor = document.getElementById("contenedor-resultado");
        const titulo = document.getElementById("titulo-resultado");
        contenedor.className = "border border-gray-200 bg-gray-50 rounded-lg p-4 font-mono";
        titulo.className = "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1";
        titulo.textContent = "Resultado por Pantalla:";
    };

    // --- ASIGNACIÓN DE LOS ESCUCHADORES NATIVOS ÚNICOS AL CLIC ---
    
    // Vinculación exclusiva al botón Ejecutar (No procesa datos mientras escribes)
    btnProcesar.addEventListener("click", main);
    
    // Vinculación para vaciar la interfaz
    btnLimpiar.addEventListener("click", limpiarCamposFormulario);
});
