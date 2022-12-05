let = perfil = "invitado";

switch (perfil.toLowerCase()) {
    case "administrador":
        console.log("Ud tiene todo los privilegios del sistema");
        break;
    case "asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    case "invitado":
        console.log("Usted sólo tiene permisos de consultar datos");
        break;
    default: console.log("Debe especificar un perfil válido"); 
         break;
}