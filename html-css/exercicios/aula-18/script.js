function soma(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let soma = parseFloat (n1) + parseFloat (n2);

    document.getElementById('resultado').value = `${soma}`;
}

function sub(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let sub = parseFloat(n1) - parseFloat(n2);

    document.getElementById('resultado').value = `${sub}`;
}