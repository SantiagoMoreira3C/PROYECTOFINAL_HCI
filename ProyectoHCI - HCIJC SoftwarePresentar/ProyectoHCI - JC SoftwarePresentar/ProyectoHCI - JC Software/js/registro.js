 //El siguiente codigo es para validar y registrar usuarios.

    var usuarioRegistro = document.getElementById("txtUsuarioRegistro");
    var contraseñaRegistro = document.getElementById("txtContraseñaUsuarioRegistro");
    var NombreRegistro = document.getElementById("txtNombreusuarioRegistro");
    var ApellidoRegistro = document.getElementById("txtApellidoUsuarioregistro");
    var EdadRegistro = document.getElementById("txtEdadUsuarioRegistro");
    var NacionalidadRegistro = document.getElementById("txtNacionaliadUsuarioRegistro");
    var EmailRegistro = document.getElementById("txtEmailUsaurioRegistro");
    var TelefonoRegistro= document.getElementById("txtTelefonoUsiarioRegistro");
    var btnRegistro = document.getElementById("formRegistro");  

    btnRegistro.addEventListener ('submit', function(event){
        event.preventDefault();
        
        if (usuarioRegistro.value === null || usuarioRegistro.value === "")
        {
           alert("El campo Usuario esta vacío");
            return false;
        }
        if (contraseñaRegistro.value === null || contraseñaRegistro.value === "")
         {
            alert("El campo Contraseña esta  esta vacío");
            return false;
         } 
        if (NombreRegistro.value === null || NombreRegistro.value === "")
        {
            alert("El campo Nombre  esta vacío");
            return false;
        } 
        if (ApellidoRegistro.value === null || ApellidoRegistro.value === "")
        {
            alert("El campo Apellido  esta vacío");
            return false;
        } 
        if (EdadRegistro.value === null || EdadRegistro.value === "")
        {
            alert("El campo Edad  esta vacío");
            return false;
        } 
        if (NacionalidadRegistro.value === null || NacionalidadRegistro.value === "")
        {
            alert("El campo Nacionalidad  esta vacío");
            return false;
        } 
        if (EmailRegistro.value === null || EmailRegistro.value === "")
        {
            alert("El campo Email  esta vacío");
            return false;
        } 
        if (TelefonoRegistro.value === null || TelefonoRegistro.value === "")
        {
            alert("El campo Teléfono  esta vacío");
            return false;
        } 
        else{
            alert("Registro éxitoso");
         location.href="index.html"
        
        } 
        
        });
   