//Funcion  para agregar a la apntalla el valor enviado desde la interfaz de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Funcion que borra o limpia la pantalla de la calculadora
function borrar(){
    document.getElementById('pantalla').value = '';
}

//Funcion para calcular las operaciones indicadas
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    // Primero, manejar el porcentaje
    const expresion = valorPantalla.replace(/(\d+)%/g, (_match, p1) => {
        return p1 / 100;
    });

    try {
        // Evaluar la expresión
        const resultado = eval(expresion);
        document.getElementById('pantalla').value = resultado;
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}