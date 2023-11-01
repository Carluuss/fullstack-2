var media = 0;
document.getElementById('divRecuperacao').style.display = 'none';
function Calcular(){
    var nota1 = document.getElementById('n1').value;
    var nota2 = document.getElementById('n2').value;
    var nota3 = document.getElementById('n3').value;
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;
    var total = media.toFixed(1)
    if(nota1 >=0 && nota2 >=0 && nota3 >=0 && nota1 <=10 && nota2 <=10 && nota3 <=10 ){
        if( media >= 7){
            document.getElementById('rest').innerHTML = `Parabéns <p class=aprovado>APROVADO!</p> sua média foi: ${total} `;
        }else{
        document.getElementById('rest').innerHTML = `Sua média foi de ${total} você está de <p class=recuperacao>RECUPERAÇÃO!</p>`;
        document.getElementById('divRecuperacao').style.display = 'block';
        }
    
    }else{
        alert('Digite notas validas entre 0 e 10')
    }
    
}

function recuperacao(){
    let mediaAnterior = media;
    let notaRecuperacao = document.getElementById('nr').value;

    let mediaRecuperacao = (parseFloat(mediaAnterior) + parseFloat(notaRecuperacao))/2;

    
    if(mediaRecuperacao >= 5){
        document.getElementById('rest').innerHTML = `Parabéns <p class=aprovado>APROVADO!</p> sua média foi: ${mediaRecuperacao} `;
        situacao = 'APROVADO!';
    }else{
        document.getElementById('rest').innerHTML = ` Sua média foi: ${mediaRecuperacao} <p class=reprovado>REPROVADO!</p>`
        situacao = 'REPROVADO!';
    }
    document.getElementById('mRec').value = mediaRecuperacao;
   document.getElementById('sRec').value = situacao;
    return false;
}
