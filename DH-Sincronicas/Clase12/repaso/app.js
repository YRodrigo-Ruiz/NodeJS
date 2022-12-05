const tareas = require('./data/todos');
const users = require('./data/users');
const usuarios = require('./data/users');
// function filtro (){
//     for (let i = 0; i < tareas.length; i++) {
//         if((tareas[i].userId==9 && tareas[i].completed==true)){
//             console.log(tareas[i]);
//         }       
//     }
// }
//filtro();

//interpretando el for armo el map

// const tareasMapeadas = tareas.map(function(tarea){
//     if((tarea.completed==true) && (tarea.userId==1)){
//             return tarea;
//     }else{
//         return tarea.id;
//     }
    
//     //return (tarea.userId==9 && tarea.completed==true) ? tarea : null;
// });
// const tareasFiltradas = tareas.filter((e) => e.completed==true)
// console.log(tareasFiltradas);
//console.log(tareasMapeadas);

const usuariosMapeados = users.map((usuario) => {
    return {
        id: usuario.id,
        name: usuario.name,
        email: usuario.email,
        city: usuario.address.city,
        phone: usuario.phone,
    }
});

console.log(usuariosMapeados);