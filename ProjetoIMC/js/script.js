const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao  = document.querySelector('#btn')
const imcFinal = document.querySelector('#imc')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click',calcularIMC)

function calcularIMC(event){
    event.preventDefault()
    if(nome.value!=='' && peso.value!=='' && altura.value!==''){
        let imc = peso.value/(altura.value*altura.value)
        imcFinal.value = imc.toFixed(2)
    }else{
        resultado.innerHTML = "Preencha os dados corretamente "
    }

    if(imcFinal.value<18.5 && imcFinal.value!==''){
        resultado.innerHTML = "Abaixo do peso"
    }else if(imcFinal.value>18.5 && imcFinal.value<=24.9){
        resultado.innerHTML = "Peso ideal(Parabens)"
    }else if(imcFinal.value>24.9 && imcFinal.value<=29.9){
        resultado.innerHTML = "Levemente acima do peso"
    }else if(imcFinal.value>29.9 && imcFinal.value<=34.9){
        resultado.innerHTML = "Obesidadde grau 1"
    }else if(imcFinal.value>34.9 && imcFinal.value <= 39.9){
        resultado.innerHTML = "Obesidade grau 2(Severa)"
    }else if(imcFinal.value>39.9){ 
        resultado.innerHTML = "Obesidade grau 3(Morbida)"
    }
}