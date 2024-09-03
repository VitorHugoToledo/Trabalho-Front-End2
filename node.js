const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são benefícios da reciclagem para o meio ambiente?",
        alternativas: [           
            {
                texto: "Redução de resíduos e poluição em aterros sanitários.",
                afirmacao: "Redução de resíduos e poluição em aterros sanitários."
            },
            {
                texto:  "Conserva recursos naturais como madeira e água.",
                afirmacao: "Reciclar papel ajuda a evitar o desmatamento e a perda de habitats."
            }
        ]
    },
  {
        enunciado: "Qual a contribuição das florestas tropicais para o clima global?",
        alternativas: [           
            {
                texto: "Absorvem dióxido de carbono e reduzem o efeito estufa.",
                afirmacao: "Você considera que a absorção de CO2 pelas florestas ajuda a controlar o aquecimento global."
            },
            {
                texto:  " Mantêm a biodiversidade, essencial para o equilíbrio ecológico.",
                afirmacao: "Você considera que a perda de biodiversidade pode desestabilizar ecossistemas e levar à extinção de espécies."
            }
        ]
    },
  {
        enunciado: "Qual causas da poluição dos oceanos?",
        alternativas: [           
            {
                texto: "Descarte inadequado de plástico, prejudicando a vida marinha.",
                afirmacao: "Você acredita que o plástico demora centenas de anos para se decompor, afetando a cadeia alimentar."
            },
            {
                texto:  "Derramamento de petróleo, contaminando a água e a fauna marinha.",
                afirmacao: "Você considera que derramamentos têm efeitos devastadores a longo prazo nos ecossistemas marinhos."
            }
        ]
    },
  ]
    // adicione acima as pergundas substituindo as originais
    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta(); 