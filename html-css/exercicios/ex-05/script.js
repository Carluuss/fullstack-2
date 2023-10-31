function Entrar(){
    var login = document.getElementById('Login').value;
    var senha = document.getElementById('Senha').value;
    if(login != '' && senha != ''){
        if(login == 'user123' && senha == '123'){
            alert(`Bem vindo ${login}!!`);
        }else if (login != 'user123' && senha != '123'){
            alert(`Login ou senha incorretos`);
        }
    }else{
        alert('Preencha os campos vazios')
    }
    
}
