let message = document.querySelector('div#msg')
let data = new Date();
let hora = data.getHours();
let min = data.getMinutes();

//hora = 17

function comprimento(){
    if (hora >= 5 && hora <= 12) {
        msg.innerHTML = `Bom dia! são ${hora}:${min} horas`
        let audioElement = new Audio('bom dia001.ogg')
        audioElement.play()
    }if(hora > 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! são ${hora}:${min} horas`
        let audioElement = new Audio('boatarde001.ogg')
        audioElement.play()
    }if(hora > 18 && hora <= 20) {
        msg.innerHTML = `Bom noite! são ${hora}:${min} horas`
        let audioElement = new Audio('boanoite001.ogg')
        audioElement.play()
    }if(hora >20){
        msg.innerHTML = `Bom dia! são ${hora}:${min} horas`
        let audioElement = new Audio('horadedormir.ogg')
        audioElement.play()
    }
}

function dino(){
    let audioElement = new Audio('dino.ogg')
        audioElement.play()
}

function bear(){
    let audioElement = new Audio('Bear.mp3')
        audioElement.play()
}
