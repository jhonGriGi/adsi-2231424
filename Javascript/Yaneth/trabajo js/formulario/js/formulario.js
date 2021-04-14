function capturaValoresInput(){
    let capturaNombre = document.getElementById('user_name').value;
    document.getElementById('verNombre').innerHTML = capturaNombre;
    let capturaEdad = document.getElementById('user_age').value;
    document.getElementById('verEdad').innerHTML = capturaEdad;
    let capturaTel = document.getElementById('user_tel').value;
    document.getElementById('verTel').innerHTML = capturaTel;
    let capturaEmail = document.getElementById('user_email').value;
    document.getElementById('verEmail').innerHTML = capturaEmail;
}