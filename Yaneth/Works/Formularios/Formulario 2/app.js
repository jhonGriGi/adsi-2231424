function capturaValoresInput(){
    let capturaNombre = document.getElementById('user_name').value;
    document.getElementById('verNombre').innerHTML = capturaNombre;
    
    let capturaEmail = document.getElementById('user_Email').value;
    document.getElementById('verEmail').innerHTML = capturaEmail;
    
    let capturaPass = document.getElementById('user_pass').value;
    document.getElementById('verPass').innerHTML = capturaPass;
    
    let capturaFirst = document.getElementById('first_name').value;
    document.getElementById('verFirst').innerHTML = capturaFirst;

    let capturaLast = document.getElementById('last_name').value;
    document.getElementById('verLast').innerHTML = capturaLast;

    let capturaGender = document.getElementById('user_gender').value;
    document.getElementById('verGender').innerHTML = capturaGender;
}