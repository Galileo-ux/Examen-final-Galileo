var checkbox = document.getElementById('checkfemenino');
var ocupacion = document.getElementById('ocupacion');
var boton = document.getElementById('toggle');

function aplicarCambios(notificar) {
    if (ocupacion == null) {
        return;
    }
    if (checkbox == null) {
        ocupacion.textContent = 'Desarrollador';
    } else {
        if (checkbox.checked === true) {
            ocupacion.textContent = 'Desarrolladora';
        } else {
            ocupacion.textContent = 'Desarrollador';
        }
    }
    if (notificar === true) {
        alert('Se han realizado los cambios.');
    }
}

if (checkbox == null) {

} else {
    checkbox.addEventListener('change', function() {
        aplicarCambios(true);
    });
}

if (boton == null) {

} else {
    boton.addEventListener('click', function() {
        if (checkbox == null) {
            return;
        }
        if (checkbox.checked === true) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
        aplicarCambios(true);
    });
}

aplicarCambios(false);
