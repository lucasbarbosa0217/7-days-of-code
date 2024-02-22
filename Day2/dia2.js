const mensagem = document.getElementById("mensagem");


const nome = window.prompt("- Qual o seu nome?")
const idade = window.prompt("- Quantos anos você tem?")
const linguagem = window.prompt("Qual linguagem de programação você está estudando?")

mensagem.innerText = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`

const like = Number(window.prompt(`Você gosta de estudar ${linguagem}? Respnda com número 1 para SIM ou 2 para NÃO`))

mensagem.innerText += like === 1 ? `\n\nMuito bom! Continue estudando e você terá muito sucesso.` 
                    : like === 2 ? `\n\nhh que pena... Já tentou aprender outras linguagens?` 
                    : "\nERRO"

