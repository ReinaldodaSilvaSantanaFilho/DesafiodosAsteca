let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "QUETZALCOATL",
        categoria:"PÁSSARO SERPENTE - REPRESENTA A VIDA E A FORÇA ESPIRITUAL"
    },
    palavra002 = {
        nome: "HUITZILOPOCHTLI",
        categoria:"DEUS DA GUERRA E DO ESTADO ASTECA"
    },
    palavra003 = {
        nome: "TLALOC",
        categoria:"DEUS DA CHUVA"
    },
    palavra004 = {
        nome: "XIUHTECUHTLI",
        categoria:"DEUS DO FOGO E DO CALOR"
    },
    palavra005 = {
        nome: "XIPE TOTEC",
        categoria:"DEUS DA FERTILIDADE"
    },
    palavra006 = {
        nome: "ACUECUCYOTICIHUATI",
        categoria:"DEUSA DOS MARES E DAS ÁGUAS DOS RIOS"
    },
    palavra007 = {
        nome: "ATLACOYA",
        categoria:"DEUSA DA SECA"
    },
    palavra008 = {
        nome: "CENTEOTL",
        categoria:"DEUS DO MILHO"
    },
    palavra009 = {
        nome: "CHALCHIUTOTOLIN",
        categoria:"DEUS QUE REPRESENTA AS PESTES, DOENÇAS E PRAGAS"
    },
    palavra010 = {
        nome: "CHALMECACIHUILT",
        categoria:"DEUS DO MUNDO SUBTERRÂNEO E DO SACRIFÍCIO"
    },
    palavra011 = {
        nome: "CHANTICO",
        categoria:"DEUSA DO FOGO DOMÉSTICO E DOS VULCÕES"
    },
    palavra012 = {
        nome: "COATLICUE",
        categoria:"DEUSA TERRESTRE DA VIDA E DA MORTE"
    },
    palavra013 = {
        nome: "OMETEOTL",
        categoria:"DEUS DA CRIAÇÃO"
    },
    palavra014 = {
        nome: "COCHIMETL",
        categoria:"DEUS DAS ATIVIDADES COMERCIAIS E DOS MERCADORES"
    },
    palavra015 = {
        nome: "ILMATECUHTLI",
        categoria:"CRIADORA DAS ESTRELAS, A DEUSA DA BELEZA"
    },
    palavra016 = {
        nome: "XOCHIPILLI",
        categoria:"DEUS DO AMOR, DAS DANÇAS E DAS FLORES"
    },
    palavra017 = {
        nome: "XOLOTL",
        categoria:"DEUS DO RELÂMPAGO E DOS ESPÍRITOS"
    },
    palavra018 = {
        nome: "TEZCATLIPOCA",
        categoria:"DEUS DAS ESTRELAS E DA LUA - SENHOR DA MORTE"
    },
    palavra019 = {
        nome: "CODICES",
        categoria:"LIVROS ESCRITOS PELOS ASTECAS PRÉ-COLOMBIANOS E DA ERA COLONIAL"
    },
    palavra020 = {
        nome: "ALCATIN",
        categoria:"BARCO"
    },
    palavra021 = {
        nome: "CALPULI",
        categoria:"FAMÍLIA - CLÃ"
    },
    palavra022 = {
        nome: "ATLAUA",
        categoria:"DEUS DOS CAÇADORES"
    },
    palavra023 = {
        nome: "EHECATL",
        categoria:"DEUS DO VENTO"
    },
    palavra024 = {
        nome: "IZTOCIUATL",
        categoria:"DEUSA DO SAL"
    },
    palavra025 = {
        nome: "MICTLANCIUATL",
        categoria:"DEUSA DO INFERNO"
    },
    palavra026 = {
        nome: "PATECATL",
        categoria:"DEUS DA SAÚDE"
    },
    palavra027 = {
        nome: "TEOTIHUACAN",
        categoria:"LUGAR ONDE OS DEUSES SE REUNIAM"
    },
    palavra028 = {
        nome: "TEPEYOLOTL",
        categoria:"DEUS DA MONTANHA"
    },
    palavra029 = {
        nome: "TLALOC",
        categoria:"DEUS DA CHUVA"
    },
    palavra030 = {
        nome: "TONATIU",
        categoria:"SOL - DEUS SOL"
    }
];

criarPalavraSecreta(); /*chamar a função*/

function criarPalavraSecreta(){

    const indexPalavra = parseInt(Math.random() * palavras.length) /* Permite mais perguntas*/
    
   /* a palavra sorteada vai ser igual a uma palavra de palavras
    e vai para indexPalavra, pegando a posicao e a categoria */

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria; 

    
      console.log(palavraSecretaSorteada)
      console.log(palavraSecretaCategoria)
}


montarPalavraNaTela();

function montarPalavraNaTela(){

    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

/* Para montar a palavra secreta, vai pegar um dos itens da lista dinamica e comparar com a palavra sorteada */

    for(i = 0; i < palavraSecretaSorteada.length; i++){

        if(listaDinamica[i] == undefined){

            if(palavraSecretaSorteada[i] == " "){

            listaDinamica[i] = " ";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"

            }
            else{

            listaDinamica[i] = "&nbsp;" /* non-breaking space serve para dar o espaço sem quebrar linha e contar
             um espaço em branco como cartactere ex: e &*/
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"

            }

        }else{

            if(palavraSecretaSorteada[i] == " "){


            listaDinamica[i] = " ";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"

            }
            else{

                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"

            }

        }

    }
}

console.log(listaDinamica)

/* O que ta dentro dos () é o id ou classe da div que tem as letras/teclado*/

function verificaLetraEscolhida(letra){  

    document.getElementById("tecla-" + letra).disabled = true; //bloqueia escolher a mesma letra 2x

    if (tentativas > 0 ){

        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }  
}

function mudarStyleLetra(tecla, condicao){

    if(condicao == false){

    document.getElementById(tecla).style.background ="#F5F2F0";
    document.getElementById(tecla).style.color ="#F5F2F0";

    }
    else{


    document.getElementById(tecla).style.background ="#52787A";
    document.getElementById(tecla).style.color ="#62D8DE";

    }
}

function comparalistas(letra){

// pos - posição
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0){

        tentativas-- 

        carregaImagemForca();
        
        if (tentativas == 0){

            abreModal("Tente novamente!", "<center>Preste atenção e boa sorte da próxima vez <br>Jogue novamente clicando no ↺<br> A palavra secreta era:   " + palavraSecretaSorteada + "</center>");

        }
        
        //diminui o numero de tentativas, aparece as imagens da forca, verifica se tem tentativas e exibe uma msg

    }else{

         mudarStyleLetra("tecla-" + letra, true);

        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra){

                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;

        for (i = 0; i < palavraSecretaSorteada.length; i++){

          if(palavraSecretaSorteada[i] != listaDinamica[i]){

            vitoria = false;

            //para ver se a letra esta na palavra secreta e verificar

            }
        }

        if (vitoria == true){

            //mensagem na tela

            tentativas = 0;

            abreModal("Parabéns!", "Você acertou a palavra secreta <br> Jogue novamente clicando no ↺ <br>");

            
        }
}


function carregaImagemForca(){

    switch(tentativas){

        case 5: 
        document.getElementById("imagem").style.background = "url('img/Astecas1.png')";
        break;

        case 4: 
        document.getElementById("imagem").style.background = "url('img/Astecas2.png')";
        break;

        case 3: 
        document.getElementById("imagem").style.background = "url('img/Astecas3.png')";
        break;

        case 2: 
        document.getElementById("imagem").style.background = "url('img/Astecas4.png')";
        break;

        case 1: 
        document.getElementById("imagem").style.background = "url('img/Astecas5.png')";
        break;

        case 0: 
        document.getElementById("imagem").style.background = "url('img/Astecas6.png')";
        break;

        default:  

        document.getElementById("imagem").style.background = "url('img/Astecas.png')";
        break;


    }

}

function abreModal(titulo, mensagem){

    let modalTitulo = document.getElementById("exampleModalLabel")
    modalTitulo.innerHTML = titulo;

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({

        show:true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")

    bntReiniciar.addEventListener("click", function(){

    location.reload(); //atualiza a pagina

});