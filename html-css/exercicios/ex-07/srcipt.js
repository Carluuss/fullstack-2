function Calcular(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    var calculo = parseFloat(peso)/Math.pow((parseFloat(altura)), 2)
    var imc = calculo.toFixed(1)


    if(calculo < 18.5){
        alert(`Seu Imc é de ${imc.toString().replace('.', ',')} você está abaixo do peso`);
    }else if(calculo >= 18.5  && calculo <=25){
        alert(`Seu Imc é de ${imc.toString().replace('.', ',')} você está com pes normal`);
    }else if(calculo  >= 25 && calculo <= 30){
        alert(`Seu Imc é de ${imc.toString().replace('.', ',')} você está com sbre-peso`)
    }else if(calculo >= 30 && calculo <= 35){
        alert(`Seu Imc é de ${imc.toString().replace('.', ',')} você está com obesidade grau 1`);
    }else if(calculo >= 35 && calculo <= 40){
        alert(`Seu Imc é de ${imc.toString().replace('.', ',')} você está com obesidade grau 2`);
    }else if(calculo >= 40){
        alert(`Seu Imc é de ${imc.toString().replace('.', ',')} você está com obesidade grau 3`);
    }


}