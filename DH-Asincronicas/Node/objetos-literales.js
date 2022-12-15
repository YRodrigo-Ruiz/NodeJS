let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho","Javier"],
    horario : "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cursada es " + this.horario;
    }
}
//console.log(curso.notificaciones());

//FUNCION COSTRUCTORA
function Curso (cantidadDeAlumnos, docentes, horario) {
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramcion = new Curso(50, ["Javier", "Gerardo"], "de 19 a 21 hs.");
let cursoDeMarketing = new Curso(45, ["Diego", "Debbie"], " de 17 a 19 hs.");

console.log(cursoDeProgramcion);
console.log(cursoDeMarketing);