const escolhas = [] 
escolhas.push(window.prompt("Você quer seguir para área de 'Front-End' ou seguir para a área de 'Back-End'?"))

if(escolhas[0] === "Front-End"){
    escolhas.push(window.prompt("Você quer aprender 'React' ou aprender 'Vue'?"));
}
else if(escolhas[0] === "Back-End"){
    escolhas.push(window.prompt(("Você quer aprender 'C#' ou aprender 'Java'?"))) 
} else {window.prompt("Erro")}

let fullstack = window.prompt(`Você quer continuar se especializando em ${escolhas[0]} ou quer seguir se desenvolvendo para se tornar fullstack? 1- Manter Escolha, 2- Fullstack`)

const listTecnologia = []
let addTec = true;
let i = 0;
while (addTec){
    listTecnologia.push(window.prompt("Digite uma tecnologia que você quer aprender!"))
    addTec = window.confirm(`Uau! Eu adoro essa tecnologia ${listTecnologia[i]}. Tem outra tecnologia que você quer adicionar?`)
    i++
}


const mensagem = document.getElementById("mensagem");

mensagem.innerText = `
                     Atualmente você prefere ${escolhas[0]}
                     \n e quer aprender ${escolhas[1]}!
                     \n ${fullstack < 2 ? "Você não quer ser Fullstack!" : "Você quer ser Fullstack!"}
                    \n Lista de tecnologias que você quer aprender:
                    \n ${listTecnologia}
                    `

                    