function capturaValoresInput() {
    let capturaNombre = document.getElementById('user_name').value;
    document.getElementById('verNombre').innerHTML = capturaNombre;

    let CapturaCorreo = document.getElementById('user_email').value;
    document.getElementById('verEmail').innerHTML = CapturaCorreo;
}