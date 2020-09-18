var usuarioLogin = document.getElementById("txtLoginUser");
var contraseñaLogin = document.getElementById("txtContraUser");
var btnLogin = document.getElementById("form");

btnLogin.addEventListener ('submit', function(event)
{
    event.preventDefault();
    if (usuarioLogin.value ==='Cantos@gmail.com' && contraseñaLogin.value === '12345')
    {
        alert("Inicio de sesión éxitoso");
        window.location.href="paginaCliente.html";
     }
     else if
      (usuarioLogin.value ==='admin' && contraseñaLogin.value === 'admin')
      {
        alert("Inicio de sesión éxitoso");
        window.location.href="paginaAdministrador.html";
     }
     else
     {
       alert("Los datos son incorrectos");
       return false;
     }
    

});


 