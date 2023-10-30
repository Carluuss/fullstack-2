function Calcular(){
    var nota1 = document.getElementById('n1').value;
    var nota2 = document.getElementById('n2').value;
    var nota3 = document.getElementById('n3').value;
    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;
    var total = media.toFixed(1)
    if(nota1 >=0 && nota2 >=0 && nota3 >=0 && nota1 <=10 && nota2 <=10 && nota3 <=10 ){
        if( media >= 7){
            document.getElementById('rest').innerHTML = `Parabéns <p class=aprovado>APROVADO!</p> sua média foi: ${total} `;
        }else if(media < 7 && media >=4){
        document.getElementById('rest').innerHTML = `Sua média foi de ${total} você está de <p class=recuperacao>RECUPERAÇÃO!</p>`;
        }else if(media < 4){
            document.getElementById('rest').innerHTML = `Sua média foi de ${total} você está <p class=reprovado>REPROVADO!!</p>`;
        }
    
    }else{
        alert('Digite notas validas entre 0 e 10')
    }
    
}