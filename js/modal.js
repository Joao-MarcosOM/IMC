export const Modal = {

    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open() {Modal.wrapper.classList.add("open")},
    close() {Modal.wrapper.classList.remove("open")}
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}


//Adiciona função para caso digite a tecla Esc do teclado, fechar o popup
window.addEventListener("keydown", event => {
    if( event.key === "Escape"){
        Modal.close()
    }
})
