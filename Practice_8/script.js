/* function get_login() {
    let user_email = prompt('Ingrese su correo', '');
    while(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user_email)) {
        alert('No es un email válido');
        user_email = prompt('Ingrese su correo nuevamente', '');
    }
    
    alert(`Su correo ${user_email} es válido`);
}

function get_password() {
    let user_password = prompt('Ingrese su contraseña', '');
    while (!(user_password.length >= 6 && /[A-Z]/.test(user_password))) {
        alert('Ingrese una contraseña de mínimo 6 caracteres y al menos 1 mayúscula');
        user_password = prompt('Ingrese su contraseña nuevamente', '');
    }
    
    alert('Su contraseña es válida');
}

get_login();
get_password();
 */


    function validarEmail(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    }
    function validarPassword(password) {
        return (  Boolean(password) && password.length > 6 && password != password.toLowerCase() )
    }
    
   function validarOperacion(operacion) {
     return( operacion === '+' || operacion === '-')}

    
    function obtenerDato (data){
    
        let dato = prompt(data.mensaje)
        while(!data.validacion(dato)){
            dato = prompt(data.error)
        }
        alert(data.msg_success)
        return dato
    }

    obtenerDato(
        {
            mensaje: 'Bienvenido, por favor ingrese su email: ',
            error: 'Error, por favor ingrese un email valido: ',
            msg_success: 'Su email es válido',
            validacion: validarEmail
           
        }   )

   obtenerDato(
  {
      mensaje: 'Bienvenido, por favor ingrese su password: ',
      error: 'Error, por favor ingrese un password valido: ',
      msg_success: 'Su password es válida',
      validacion: validarPassword
     
  }   
    ) 

    obtenerDato(
        {
            mensaje: 'Bienvenido, por favor ingrese su Operacion a realizar: ',
            error: 'Error, por favor ingrese un Operacion valida: ',
            msg_success: 'Su operacion es válida',
            validacion: validarOperacion
           
        }   
          ) 
      

          
function renderizarHistorial (historialRecibido){

    let listaStrHistorial = ''
    for (const item of historialRecibido){

        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
    }
    return listaStrHistorial
    
} 



function agregarAlHistorial(elementoHistorial){
    const historial = obtenerHistorial() //historial previo o []
    historial.push(elementoHistorial)
    const historialStr = JSON.stringify(historial)
    localStorage.setItem('historial', historialStr)
}

function obtenerHistorial() {
    let historialString = localStorage.getItem('historial');
    return JSON.parse(historialString)
}


/* Verificando que un usuario que entra por primera vez tenga un historial */
if(obtenerHistorial() === null){
    /* Si no hay historial, se guarde el historial como array vacio */
    localStorage.setItem('historial', JSON.stringify([]))
}

/* 
agregarAlHistorial( {
    accion: 'CALCULAR',
    operacion: '*',
    a: 1,
    b: 2,
    resultado: 2
})
 */

/* console.log(obtenerHistorial())

 */

console.log(renderizarHistorial(obtenerHistorial()))