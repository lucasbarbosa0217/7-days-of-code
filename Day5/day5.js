const laticinios = document.getElementById("input-laticinios").querySelectorAll("input")


const add = document.getElementById("add")
const inputArea = document.getElementById("input-area")
const listList = document.getElementById("listList")


const listas = JSON.parse(localStorage.getItem("minhaListaDeListas"))

listas?.forEach((objeto, index) => {
    listList.insertAdjacentHTML("beforeend", 
    `
        <div class="productList" onclick="mostrar(${index+1})">
        <i class="fa-solid fa-x"></i><p>Lista número ${index+1}</p> <p>${objeto[0].produto}...</p>
        </div>
    `)
})

const formatador = new Intl.ListFormat('pt', {
    style: "long",
    type: "conjunction"
})

function mostrar(index){
    var nomes = listas[index-1].map(objeto => objeto.produto);
    console.log(nomes)
    window.alert(formatador.format(nomes))
}
function remover(event){
     if(event.target.parentNode.tagName ==="BUTTON"){
        event.target.parentNode.parentNode.remove();
     }else{
        event.target.parentNode.remove();
     }
}
add.addEventListener('click', () => {
    let html = `
    <div class="input-div" id="input-laticinios">
        <button onClick="remover(event)"><i class="fa-solid fa-x" onClick="()"></i></button>
        <input type="text" class="text-input" placeholder="Nome de um produto">
    </div>
`;

inputArea.insertAdjacentHTML('afterbegin', html);
const inputList = Array.from(inputArea.querySelectorAll('#input-laticinios input.text-input'));
inputList[0].focus()
  
})

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
    const inputList = Array.from(inputArea.querySelectorAll('#input-laticinios input.text-input'));
    const objetosProdutos = inputList.filter((valor, indice) => valor.value != "")
    .map((valor, index) => {return {id: index+1, produto:valor.value}})
    if(objetosProdutos.length === 0){return}
    let lista = []
    if(localStorage.getItem('minhaListaDeListas')){
        lista = JSON.parse(localStorage.getItem('minhaListaDeListas'))
    }else{
        lista = []
    };
    lista.push(objetosProdutos)
    var jsonList = JSON.stringify(lista)
    console.log(lista)
    if(lista){localStorage.setItem('minhaListaDeListas', jsonList);}


    listas.push(objetosProdutos)
        listList.insertAdjacentHTML("beforeend", 
        `
            <div class="productList" onclick="mostrar(${listas.length+1})">
            <i class="fa-solid fa-x"></i><p>Lista número ${listas.length+1}</p> <p>${objetosProdutos[0].produto}...</p>
            </div>
        `)
   
})