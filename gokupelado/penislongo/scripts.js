const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nossa você tem brawl stars?",
        alternativas: [
            {
                texto: "Sim, eu amo brawl stars!",
                afirmacao: "Eu tambem amo!"
            },
            {
                texto: "Não, esse jogo é uma bosta!",
                afirmacao: "Então vai tomar no seu cu sua vagabunda!"
            }
        ]
    },
    {
        enunciado: "Que jogos você joga?",
        alternativas: [
            {
                texto: "Eu jogo varios jogos, valorant, league of legends e minecraft é um deles!",
                afirmacao: "Que legal, você é uma pessoa muito divertida!"
            },
            {
                texto: "Eu não jogo nada alem de Tarkov e CS:GO",
                afirmacao: "Ahh, então você só joga esses jogos de MACHO ALFA!!"
            }
        ]
    },
    {
        enunciado: "Nesses jogos ai, com quais personagens você gosta de jogar? Ou que armas?",
        alternativas: [
            {
                texto: "No valorant eu jogo de Jett com a vandal, no lol eu jogo de Ahri!",
                afirmacao: "Nossa que legal, so personagens de homem"
            },
            {
                texto: "No Tarkov eu gosto de jogar de AK-47 e no CS eu jogo de AWP, pq sou macho!",
                afirmacao: "Armas de viadinho hein, mas gostei!"
            }
        ]
    },
    {
        enunciado: "Quer jogar comigo final de semana?",
        alternativas: [
            {
                texto: "Quero sim! eba vamos jogar felize!",
                afirmacao: "Estou muito feliz que poderemos jogar juntos!!!!"
            },
            {
                texto: "Acho melhor não, você não é capaz de jogar do jeito que eu jogo e meu QI avançado ira fazer eu ficar extremamente irritado com todas essas suas atividdades que com total certeza serão atitudes de NOOOOB e que me farão ficar irritaddo.",
                afirmacao: "Ata, então é isso."
            }
        ]
    },
    {
        enunciado: "Mas é isso, vou ter que ir, foi um prazer te conehcer, você gostou de falar comigo? ",
        alternativas: [
            {
                texto: "Tchau, o prazer foi meu, amanhã vamos jogar bastante.",
                afirmacao: "Sim, tchau até amanhã."
            },
            {
                texto: "Tchau, nunca mais quero te ver.",
                afirmacao: "Tchau então seu escroto, espero nunca mais te ver!!!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();