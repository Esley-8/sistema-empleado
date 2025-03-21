class Empleado {
    constructor( nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    calcularSalarioAnual() {
        return this.salario * 12 ;
    }

    mostrarDetalles() {
        return 'Nombre: ${this.nombre}, salario Mensual: $${this.salario}' ;
    }
}

Module.exports = Empleado; 


