// captura id do botão criar
let btnCriarTarefa = document.getElementById('criar-tarefa');
// captura id do input
let inputTarefa = document.getElementById('texto-tarefa');

let minhaOl = document.querySelector('#lista-tarefas');
// Atribui evento de click ao botão criar

btnCriarTarefa.addEventListener('click', novaTarefa);
// Função que cria as <li>
function novaTarefa (event) {
  const criaLi = document.createElement('li');

  criaLi.innerText = inputTarefa.value;
  minhaOl.appendChild(criaLi);
  inputTarefa.value = '';

}



