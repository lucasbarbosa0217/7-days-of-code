let valorParaSerAdvinhado = Math.floor(Math.random() * (10 - 1 + 1) + 1)

const div = document.getElementById("mensagem");
const sucesso = document.getElementById("sucesso")
let guesses = 0;
const form = document.getElementById('Enviar');
const textInput = document.getElementById("text-input")

form.addEventListener('click', (event) => {
    event.preventDefault();
    sucesso.innerHTML = ""
    if(textInput.value == valorParaSerAdvinhado){
        sucesso.innerHTML = 
        `
        Você acertou o número! Realmente era o número ${valorParaSerAdvinhado}. Jogo Reiniciado
        `;
        valorParaSerAdvinhado = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  
    }else{
        guesses++
        if(guesses > 2){
            sucesso.innerHTML = `Você infelizmente errou mais de 3 vezes... o número era: ${valorParaSerAdvinhado}. Jogo Reiniciado.`
            valorParaSerAdvinhado = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            guesses = 0
        }else{sucesso.innerHTML = "Tentativas: " + guesses}
        
    }
    textInput.value = ""
});
