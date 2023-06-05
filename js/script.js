import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { notNumber } from "./utils.js"

// variáveis

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError){
        AlertError.open()
        return;
    }

    AlertError.close()

    const calc = (weight / ((height / 100) ** 2)).toFixed(2);
    
    const message = `Seu IMC é de ${calc}` 

    Modal.message.innerText = message

    Modal.open()
}


//Fecha a janela de erro ao digitar no campo
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()


