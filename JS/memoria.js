function tocar1() {
    let audioElement = new Audio('../midias/The Wheels On The Bus - The Green Orbs.mp3')
        audioElement.play()
}
function tocar2() {
    let audioElement = new Audio('../midias/Bear02.mp3')
        audioElement.play()
}
function tocar3() {
    let audioElement = new Audio('../midias/dino.ogg')
    audioElement.play()
}
    const baralho = [
        { 
            nome: "elefante",
            img:"../imagens/elefantes200.jpg"
        },
        { 
            nome: "esquilo",
            img:"../imagens/esquilo200.jpg"
        },
        { 
            nome: "pintada",
            img:"../imagens/pintada200.jpg"
        },
        { 
            nome: "simios",
            img:"../imagens/simios200.jpg"
        },
        {
            nome: "tigres",
            img:"../imagens/tigres200.jpg"
        },
        {
            nome: "urso",
            img:"../imagens/urso200.jpg"
        },
        { 
            nome: "elefante",
            img:"../imagens/elefantes200.jpg"
        },
        { 
            nome: "esquilo",
            img:"../imagens/esquilo200.jpg"
        },
        { 
            nome: "pintada",
            img:"../imagens/pintada200.jpg"
        },
        {
            nome: "urso",
            img:"../imagens/urso200.jpg"
        },
        { 
            nome: "simios",
            img:"../imagens/simios200.jpg"
        },
        {
            nome: "tigres",
            img:"../imagens/tigres200.jpg"
        }
    ];

    baralho.sort(()=>{
        return 0.5 - Math.random();
    })

    const grade = document.querySelector("#grade");

    const pontuacao = document.querySelector("#pontos");
    let ponto;
    pontuacao.innerText = ponto;
    let escolhidas = []

    function criarGrade(){
        ponto = 0;
        pontuacao .innerText = ponto;
        for(let i=0; i < baralho.length; i++){
            let carta = document.createElement("img");
            carta.id = i;
            carta.name = baralho[i].nome;
            carta.src = "../imagens/carta200.jpg"
            carta.addEventListener("click", escolherCarta);
            grade.appendChild(carta);

        }
    }
    function escolherCarta() {
        let carta = this;
        carta.src = baralho[carta.id].img;
        escolhidas.push(carta);

        if(escolhidas.length == 2) {
            setTimeout(()=>{
            let carta1 = escolhidas[0];
            let carta2 = escolhidas[1];
            if(carta1.name == carta2.name){
                carta1.src = "../imagens/verde200.jpg";
                carta2.src = "../imagens/verde200.jpg";
                carta1.removeEventListener("click", escolherCarta);
                carta2.removeEventListener("click",escolherCarta);
                ponto++;
                pontuacao.innerText= ponto;
            }else{
                carta1.src = "../imagens/carta200.jpg";
                carta2.src = "../imagens/carta200.jpg";
            }
            if(ponto == baralho.length / 2){
                grade.innerHTML=" ";
                tocar3();
                criarGrade();
            }
            escolhidas = [];
        }, 1000);
        }
    }