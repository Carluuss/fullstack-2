function Entrar(){
    var login = document.getElementById('Login').value;
    var senha = document.getElementById('Senha').value;
    if(login == 'user123' && senha == '123'){
        alert(`Bem vindo ${login}!!`);
    }else{
        alert(`Verifique usuario ou senha e tente novamente `);
    }
}
