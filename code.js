let cbtn_crip = document.querySelector('#click_criptografar');
let cbtn_desc = document.querySelector('#click_descriptografar');

let div_textoCrip = document.getElementById("visualizacao_texto-texto_crip-paragrafo");

let confereTextarea = document.getElementById("manipulacao_texto-area_de_digitacao");
let textareaBorda = document.getElementById("manipulacao_texto-area_de_digitacao");
let botaoCopia = document.getElementById("visualizacao_texto-botoes-botao-copia")
var estiloAntigo = textareaBorda.style.border;
let textoDaArea = "";

let cbtn_save = document.querySelector("#visualizacao_texto-botoes-botao-save");



function printClickCrip() {
    let texto = document.querySelector('textarea');
    variavel = texto.value;
    console.log(variavel);
    textoDaArea = variavel;

    var regex = /^[a-z\s]+$/;
    
    if (!regex.test(variavel)) {
        variavel = ""
        textareaBorda.style.border = "5px solid red";
        setTimeout(function() { 
        textareaBorda.style.border = estiloAntigo;
        }, 500);

        let campoVisualizacaoON = document.getElementById("visualizacao_texto")
        campoVisualizacaoON.style.display = "flex";

        let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta")
        campoVisualizacaoOF.style.display = "none";

    } else if (!variavel!==true) {
        let campoVisualizacaoON = document.getElementById("visualizacao_texto")
        campoVisualizacaoON.style.display = "none";

        let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta")
        campoVisualizacaoOF.style.display = "flex";

        numeroLimite = textoDaArea.length
        novaFrase = "";

        for (var i = 0; i < numeroLimite; i++){
            if (textoDaArea[i]=="e") {
                textoDaArea[i]--;
                novaFrase += "enter";
            } 

            if (textoDaArea[i]=="i") {
                textoDaArea[i] = "";
                novaFrase += "imes";
            } 

            if (textoDaArea[i]=="a") {
                textoDaArea[i]--;
                novaFrase += "ai";
            } 

            if (textoDaArea[i]=="o") {
                textoDaArea[i]--;
                novaFrase += "ober";
            }

            if (textoDaArea[i]=="u") {
                textoDaArea[i]--;
                novaFrase += "ufat";
            } 
            
            if (textoDaArea[i]!='a' && textoDaArea[i]!='e' && textoDaArea[i]!='i' && textoDaArea[i]!='o' && textoDaArea[i]!='u'){
                novaFrase += textoDaArea[i];
            }
            
        }

        div_textoCrip.innerHTML = novaFrase;
        textoDaArea = novaFrase;

        function copiaOTexto(){
            navigator.clipboard.writeText(textoDaArea).then( () => {
            })}
        
        botaoCopia.addEventListener("click", function() {
            copiaOTexto();
        });
    }   

    else {
        let campoVisualizacaoON = document.getElementById("visualizacao_texto");
        campoVisualizacaoON.style.display = "flex";

        let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta");
        campoVisualizacaoOF.style.display = "none";
    }
}

function printClickDes() {
    let texto = document.querySelector('textarea');
    variavel = texto.value;
    textoDaArea = variavel;

    var regex = /^[a-z\s]+$/;
    
    if (!regex.test(variavel)) {
        variavel = ""
        textareaBorda.style.border = "5px solid red";
        setTimeout(function() { 
        textareaBorda.style.border = estiloAntigo;
        }, 500);

        let campoVisualizacaoON = document.getElementById("visualizacao_texto")
        campoVisualizacaoON.style.display = "flex";

        let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta")
        campoVisualizacaoOF.style.display = "none";

    } else if (!variavel==false) {
        if (!variavel!==true) {
            let campoVisualizacaoON = document.getElementById("visualizacao_texto")
            campoVisualizacaoON.style.display = "none";

            let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta")
            campoVisualizacaoOF.style.display = "flex";

            let novoTexto = variavel.replace(/ai/g, 'a');
            novoTexto = novoTexto.replace(/enter/g, 'e');
            novoTexto = novoTexto.replace(/imes/g, 'i');
            novoTexto = novoTexto.replace(/ober/g, 'o');
            novoTexto = novoTexto.replace(/ufat/g, 'u');

            div_textoCrip.innerHTML = novoTexto;
            textoDaArea = novoTexto;

            function copiaOTexto(){
                navigator.clipboard.writeText(textoDaArea).then( () => {
                })}
            
            botaoCopia.addEventListener("click", function() {
            });
        }
    }

    else {
        let campoVisualizacaoON = document.getElementById("visualizacao_texto")
        campoVisualizacaoON.style.display = "flex";

        let campoVisualizacaoOF = document.getElementById("visualizacao_texto-oculta")
        campoVisualizacaoOF.style.display = "none";
    }
} 


cbtn_crip.addEventListener('click', printClickCrip);
cbtn_desc.addEventListener('click', printClickDes);
const audioElement = document.querySelector('body audio'); 
const buttonElement = document.querySelector('#switch button');

audioElement.play();

const html = document.documentElement;

function toggleModePink() {
    html.classList.remove("yellow");
    html.classList.remove("blue");
    html.classList.add("pink");

    const video = document.querySelector('#primeira_secao video');
    const img = document.querySelector('#visualizacao_texto img');
    const alura = document.querySelector('header img');
    const oracle = document.querySelector('footer img');
    const audio = document.querySelector('body audio');

    if (html.classList.contains('pink')) {

        video.setAttribute('src', './assets/videos/pink_background_video.mp4');
        img.setAttribute('src','./assets/img/Red - Sem Código.png');
        alura.setAttribute('src', './assets/img/alura pink.png');
        oracle.setAttribute('src', './assets/img/oracle logo/pink logo oracle.png');
        audio.setAttribute('src', './assets/audios/Marvel & Miles.mp3');
        buttonElement.style.backgroundImage = 'url("./assets/gifs/gifs audio/animation audio pink.gif")'
    }
}

function toggleModeBlue() {
    html.classList.remove("pink");
    html.classList.remove("yellow");
    html.classList.add("blue");

    const video = document.querySelector('#primeira_secao video');
    const img = document.querySelector('#visualizacao_texto img');
    const alura = document.querySelector('header img');
    const oracle = document.querySelector('footer img');
    const audio = document.querySelector('body audio');

    if (html.classList.contains('blue')) {

        video.setAttribute('src', './assets/videos/blue_background_video.mp4');
        img.setAttribute('src','./assets/img/Blue - Sem Código.png');
        alura.setAttribute('src', './assets/img/alura azul.png');
        oracle.setAttribute('src', './assets/img/oracle logo/blue logo oracle.png');
        audio.setAttribute('src', './assets/audios/sonic.mp3');
        buttonElement.style.backgroundImage = 'url("./assets/gifs/gifs audio/animation audio blue.gif")'
    }
}

function toggleModeYellow() {
    html.classList.remove("pink");
    html.classList.remove("blue");
    html.classList.add("yellow");

    const video = document.querySelector('#primeira_secao video');
    const img = document.querySelector('#visualizacao_texto img');
    const alura = document.querySelector('header img');
    const oracle = document.querySelector('footer img');
    const audio = document.querySelector('body audio');

    if (html.classList.contains('yellow')) {

        video.setAttribute('src', './assets/videos/yellow_background_video.mp4');
        img.setAttribute('src','./assets/img/Yellow - Sem Código.png');
        alura.setAttribute('src', './assets/img/alura laranja.png');
        oracle.setAttribute('src', './assets/img/oracle logo/yellow logo oracle.png');
        audio.setAttribute('src', './assets/audios/STRAY Lofi + Cyberpunk.mp3');
        buttonElement.style.backgroundImage = 'url("./assets/gifs/gifs audio/animation audio yellow.gif")'
    }
}

function toggleMode() {

    if (!audioElement.paused) {
        audioElement.pause(); 
        buttonElement.style.backgroundImage = 'url("./assets/gifs/gifs audio/animation audio muted.gif")';
        } else {
            audioElement.play();
            if (html.classList.contains("pink")) {
                buttonElement.style.backgroundImage = 'url("./assets/gifs/gifs audio/animation audio pink.gif")';
            } else if (html.classList.contains("blue")) {
                buttonElement.style.backgroundImage = 'url("./assets/gifs/gifs audio/animation audio blue.gif")';
            } else if (html.classList.contains("yellow")) {
                buttonElement.style.backgroundImage = 'url("./assets/gifs/gifs audio/animation audio yellow.gif")';
            }
        }
}