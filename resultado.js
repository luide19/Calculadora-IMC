const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //imc = peso / (altura*altura)
    
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorimc = ( peso / (altura * altura) ) .toFixed(1);

        let classificacao = "";

        if(valorimc < 18.5){
            classificacao = 'abaixo do peso.';
        }else if(valorimc < 25){
            classificacao = 'com o peso ideal.';
        }else if(valorimc < 30){
            classificacao = 'acima do peso.';
        }else if(valorimc<35){
            classificacao = 'com obesidade grau 1.';
        }else if(valorimc<40){
            classificacao = 'com obesidade grau 2.';
        }else{
            classificacao = 'com obesidade grau 3.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorimc} , você está ${classificacao} `;

    }else{
        resultado.textContent = 'Preencha todos os campos para calcular';
    }

}

calcular.addEventListener('click', imc);


