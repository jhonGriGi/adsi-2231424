function capturaValoresInput(){
    let capturaNombre = document.getElementById('user_name').value;
    document.getElementById('verNombre').innerHTML = capturaNombre;

    let capturaApellido = document.getElementById('user_last').value;
    document.getElementById('verApellido').innerHTML = capturaApellido;

    let capturaCorreo = document.getElementById('user_email').value;
    document.getElementById('verEmail').innerHTML = capturaCorreo;
}