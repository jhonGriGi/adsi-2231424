function capturaValoresInput(){
    let capturaNombre = document.getElementById('user_name').value;
    document.getElementById('verNombre').innerHTML = capturaNombre;
    
    let capturaDocumento = document.getElementById('person_id').value;
    document.getElementById('verDocumento').innerHTML = capturaDocumento;
    
    let capturaEmail = document.getElementById('user_email').value;
    document.getElementById('verEmail').innerHTML = capturaEmail;
    
    let capturaTel = document.getElementById('user_tel').value;
    document.getElementById('verTel1').innerHTML = capturaTel;
    
    let capturalTel2 = document.getElementById('user_tel2').value;
    document.getElementById('verTel2').innerHTML = capturalTel2;
    
    let capturaTel3 = document.getElementById('user_tel3').value;
    document.getElementById('verTel3').innerHTML = capturaTel3;

    let capturaPostal = document.getElementById('postal_id').value;
    document.getElementById('verPostal').innerHTML = capturaPostal;

    let capturaDir1 = document.getElementById('user_dir1').value;
    document.getElementById('verDir1').innerHTML = capturaDir1;

    let capturaDir2 = document.getElementById('user_dir2').value;
    document.getElementById('verDir2').innerHTML = capturaDir2;

    let capturaDir3 = document.getElementById('user_dir3').value;
    document.getElementById('verDir3').innerHTML = capturaDir3;

	let capturaOption = document.getElementById('optional_dir').value;
    document.getElementById('verOption').innerHTML = capturaOption;

    let capturaOption2 = document.getElementById('optional_dir2').value;
    document.getElementById('verOption').innerHTML = capturaOption2;


}