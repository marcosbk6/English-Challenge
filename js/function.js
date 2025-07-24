var engine = {
    "cores": ['green','purple','pink', 'red', 'yellow', 'orange', 'grey', 'black'],
    "hexadecimais":{
        'green': '#02ef00',
        'purple': '#790093',
        'pink':'#f02a7e',
        'red': '#e90808',
        'yellow': '#e7d703',
        'orange': '#f16529',
        'grey': '#ebebeb',
        'black': '#141414',
    },
    
    imagens: {
        '#02ef00': '../img/luigi.png',
        '#790093': '../img/waluigi.png',
        '#f02a7e': '../img/princesa-peach.png',
        '#e90808': '../img/mario.png',
        '#e7d703': '../img/wario.png',
        '#f16529': '../img/bowser.png',
        '#ebebeb': '../img/chain-chomp.png',
        '#141414': '../img/banzai-bil.png'
    },

    "moedas":0
}

const audioMoeda = new Audio('audio/audio_moeda.mp3');
const audioErrou = new Audio('audio/audio_errou.mp3');

function sortearCor(){
    var indexCorSorteada = Math.floor(Math.random() * engine.cores.length);
    var nomeCorSorteada= engine.cores[indexCorSorteada];
    var legendaCorDaCaixa = document.getElementById('cor-na-caixa');

    legendaCorDaCaixa.innerText = engine.cores[indexCorSorteada].toUpperCase();

    return engine.hexadecimais[nomeCorSorteada];
}


function aplicarCorNaCaixa(nomeDaCor){
    var caixaDasCores = document.getElementById('cor-atual');
    var fundoCor = document.getElementById('fundo');
    var personagem = document.getElementById('personagem');

    var corHex = engine.hexadecimais[nomeDaCor];

    caixaDasCores.style.backgroundColor = nomeDaCor;
    caixaDasCores.style.backgroundImage = "url('/img/caixa-fechada.png')";
    caixaDasCores.style.backgroundSize= "100%";

    fundoCor.style.backgroundColor = nomeDaCor;

    let imagemPersonagem = engine.imagens[nomeDaCor];
    personagem.style.backgroundImage = `url('${imagemPersonagem}')`;
    personagem.style.backgroundSize = "contain";
    personagem.style.backgroundRepeat = "no-repeat";
    personagem.style.backgroundPosition = "center";
}

function atualizaPontuacao(valor){
    var pontuacao = document.getElementById('pontuacao-atual');

    engine.moedas += valor;

    if(valor < 0){
        audioErrou.play();
    }else{
        audioMoeda.play();
    }
    pontuacao.innerText = engine.moedas;
}

aplicarCorNaCaixa(sortearCor())

//api de reconhecimento de voz


var btnGravador = document.getElementById("btn-responder");
var trasncricaoAudio = "";
var respostaCorreta = "";
if(window.SpeechRecognition || window.webkitSpeechRecognition){
    var SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    var gravador = new SpeechAPI()

    gravador .continuos = false;
    gravador,lang = "en-US";

    gravador.onstart = function(){
        btnGravador.innerHTML = "Estou Ouvindo";

        btnGravador.style.backgroundColor = "white";
        btnGravador.style.color = "black";
    }

    gravador.onend = function(){

        btnGravador.innerHTML = "Responder";

        btnGravador.style.backgroundColor = "tranparent";
        btnGravador.style.color = "black";
    }

var resposta = document.getElementById("pronuncia");

    gravador.onresult = function(event){
        trasncricaoAudio = event.results[0][0].transcript.toUpperCase();
        respostaCorreta = document.getElementById('cor-na-caixa').innerText.toUpperCase();

        resposta.innerHTML = trasncricaoAudio;

        console.log(trasncricaoAudio);
        console.log(respostaCorreta);
        if(trasncricaoAudio === respostaCorreta){
            atualizaPontuacao(1);
        }else{
            atualizaPontuacao(-1);
        }
        
        aplicarCorNaCaixa(sortearCor());
        
    }
}else{
    alert('não tem suporte');
}

btnGravador.addEventListener('click', function(e){
    gravador.start();
})