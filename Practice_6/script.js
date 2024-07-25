let tieneHijos = prompt('tienes hijos? responde si o no')

if (tieneHijos == 'si') {
     tieneHijos = true
}
else if (tieneHijos == 'no') {
     tieneHijos = false
}
else {
    alert ('no es una respuesta valida')
}

alert(tieneHijos)

let Salario = prompt('¿Cuál es tu salario?');

while (!Salario || isNaN(Salario) || Number(Salario) <= 0) {
    alert('No es un salario válido');
    Salario = prompt('¿Cuál es tu salario?');
}

if (Salario > 0) {
    let Salario_anual = Number(Salario) * 12;
    alert('Tu salario anual es de: $' + Salario_anual);
}

 


