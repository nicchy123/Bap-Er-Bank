document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email == 'nasirchy252@gmail.com' && password == 'NdNr@952' ){
        window.location.href = 'bank.html';
    }else{
        alert('password janos na hala? chinos amre')
    };
})