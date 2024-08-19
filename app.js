const letrasComChaves = 
{ "e" : "enter", 
  "i" : "imes",
  "a" : "ai",  // alterar a ordem resolve o bug do i
  "o" : "ober" ,
  "u" : "ufat"  
};
let chavesComLetras = gerarArrayChaveValorInverso(letrasComChaves);
console.log(chavesComLetras);
let textoCodificado ;



function getTextoOriginal(){
    let textoOriginal = document.querySelector("textarea").value;
    return textoOriginal;
    
}

function codificarTexto(){ 
     let texto = getTextoOriginal();
     exibirTexto(texto);

     let textoCodificado = document.querySelector("#textoCodificado");
     textoCodificado.textContent = allReplace(texto, letrasComChaves);

     limparCampo();
     tornarVisivel("textoCodificado");
     tornarInvisivel("textoDecodificado");
}

function decodificarTexto(){
    let texto = getTextoOriginal();
    exibirTexto(texto);
    
    let textoDecodificado = document.querySelector("#textoDecodificado");
    textoDecodificado.textContent = allReplace(texto, chavesComLetras);

    limparCampo();
    tornarVisivel("textoDecodificado");
    tornarInvisivel("textoCodificado");

}
function gerarArrayChaveValorInverso(letrasChaves){
    let inverso = {};
    for (let chave in letrasChaves){
        inverso[letrasChaves[chave]] = chave;
    }
    console.log(inverso)
    return inverso;

}

function allReplace(texto, letrasChaves){
    for(let x in letrasChaves){
        let valor = letrasChaves[x];
        texto = texto.replace(new RegExp(x, "g"), letrasChaves[x]);
    }
    return texto;

}
function limparCampo(){
    texto = document.querySelector("textarea");
    texto.value ="";
    
}

document.addEventListener("DOMContentLoaded", function copiar(){
    const botao = document.getElementById("botaoCopiar");
        
        if (!botao.hasAttribute('data-event-added')) {
            botao.addEventListener("click", async function() {
                botao.disabled = true;
        try {
            console.log("Botão clicado");
            
            let texto;
            const textoCodificado = document.getElementById("textoCodificado");
            const textoDecodificado = document.getElementById("textoDecodificado");
    
           
                if (textoCodificado.style.display == "block") {
                    texto = textoCodificado.innerText;
                } else if (textoDecodificado.style.display == "block") {
                    texto = textoDecodificado.innerText;
                } else {
                    throw new Error('Nenhum texto encontrado para copiar.');
                }
            
            await navigator.clipboard.writeText(texto);
            alert("Texto copiado!");
        } catch (err) {
            console.error('Falha ao copiar o texto: ', err);
        } finally {
        botao.disabled = false;
        }
    
    });
    botao.setAttribute('data-event-added', 'true');
        }
});

function exibirTexto(){
    
    let paragrafoTextoOriginal = document.querySelector("#textoOriginal");
    paragrafoTextoOriginal.textContent = getTextoOriginal();
    tornarInvisivel("bloco2");
    tornarVisivel("resultadoTexto");
}

function tornarInvisivel(object){
    document.getElementById(object).style.display = "none";
}

function tornarVisivel(object){
    document.getElementById(object).style.display = "block";
}

tornarInvisivel("resultadoTexto");

//exibirTexto();
