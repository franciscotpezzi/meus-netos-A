let message = document.querySelector('div#msg')
let data = new Date();
let hora = data.getHours();
let min = data.getMinutes();

hora = 21

function comprimento(){
    if (hora >= 5 && hora <= 12) {
        msg.innerHTML = `Bom dia! são ${hora}:${min} horas`
        let audioElement = new Audio('../midias/bom dia002.mp3')
        audioElement.play()
    }if(hora > 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! são ${hora}:${min} horas`
        let audioElement = new Audio('../midias/boatarde002.mp3')
        audioElement.play()
    }if(hora > 18 && hora <= 20) {
        msg.innerHTML = `Bom noite! são ${hora}:${min} horas`
        let audioElement = new Audio('../midias/boanoite002.mp3')
        audioElement.play()
    }if(hora >20){
        msg.innerHTML = `Bom dia! são ${hora}:${min} horas`
        let audioElement = new Audio('../midias/horadedormir002.mp3')
        audioElement.play()
    }
}

function dino(){
    let audioElement = new Audio('../midias/dino.ogg')
        audioElement.play()
}

function bear(){
    let audioElement = new Audio('../midias/bear02.mp3')
        audioElement.play()
}
