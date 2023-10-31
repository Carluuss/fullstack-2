function calculo(){
    let p1 = prompt('Você telefonou para a vítima?');
    let p2 = prompt('Você Esteve no local do crime? ');
    let p3 = prompt('Você mora perto da vítima?');
    let p4 = prompt('Você devia para a vítima?');
    let p5 = prompt('Você já trabalhou com a vítima?');

    total = 0;

    if (p1 == 'sim') total++;
    if (p2 == 'sim') total++;
    if (p3 == 'sim') total++;
    if (p4 == 'sim') total++;
    if (p5 == 'sim') total++;
    if (total <= 1){
        document.getElementById('resultado').innerHTML = 'Resultado: Inocente';
    }else if(total == 2){
        document.getElementById('resultado').innerHTML = 'Resultado: Suspeito';
    }else if(total == 3 || total == 4){
        document.getElementById('resultado').innerHTML = 'Resultado: Cumplice';
    }else if(total == 5){
        document.getElementById('resultado').innerHTML = 'Resultado: ASSASINO';
    }
    else{
        alert('Tudo bem');
    }
}
