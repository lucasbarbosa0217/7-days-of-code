const laticinios = document.getElementById("input-laticinios").querySelectorAll("input")


const add = document.getElementById("add")
const inputArea = document.getElementById("input-area")
add.addEventListener('click', () => {
    let html = `
    <div class="input-div" id="input-laticinios">
        <button><i class="fa-solid fa-x"></i></button>
        <input type="text" class="text-input" placeholder="Nome de um produto">
    </div>
`;

inputArea.insertAdjacentHTML('afterbegin', html);

  
})

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
    const inputList = Array.from(inputArea.querySelectorAll('#input-laticinios input.text-input'));
    const inputValues = inputList.map(input => {
        return input.value
    })

    window.alert(inputValues)

})