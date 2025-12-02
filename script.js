
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
   