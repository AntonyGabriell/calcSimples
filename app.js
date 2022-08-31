'use strict'

const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const resultado = document.getElementById('resultado')

function soma (){
let soma = parseFloat(numero1.value) + parseFloat(numero2.value)
resultado.textContent = soma



 


}

const ButtonSomar = document.getElementById('buttonsoma').addEventListener('click', soma)
