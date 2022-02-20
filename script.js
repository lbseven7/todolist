// captura id do botão criar
let btnCriarTarefa = document.getElementById('criar-tarefa');
// captura id do input
let meuInput = document.getElementById('texto-tarefa');
// Recupera minha Ol
let minhaOl = document.querySelector('#lista-tarefas');
// Atribui evento de click ao botão criar
let btnUp = document.querySelector('#mover-cima');

// comentei porque precisa de outras funções ainda
// Mover pra cima a tarefa
// btnUp.addEventListener('click', moverItemCima);

// function moverItemCima() {
//   let selecionado = document.querySelector('.selected');
//   minhaOl.insertBefore(selecionado, selecionado.previousSibling);
// }

// // Mover pra baixo a tarefa
// btnDown.addEventListener('click', moverItemBaixo);

// function moverItemBaixo() {
//   let selecionado2 = document.querySelector('.selected');
//   minhaOl.insertBefore(selecionado2.nextSibling, selecionado2);
//   if (!selecionado2.nextSibling) {
//     minhaOl.insertBefore(selecionado2, minhaOl.firstChild)
//   } else {
//     minhaOl.insertBefore(selecionado2.nextSibling, selecionado2);
//   }
// }

const btnLimpar = document.getElementById('apaga-tudo'); // limpar tudo
const btnRemoveFinalizados = document.getElementById('remover-finalizados'); // remover finalizados
const btnSaveList = document.querySelector('#salvar-tarefas'); // salvar no local storage
const btnRemoveSelected = document.querySelector('#remover-selecionado') // remover selecionados */

// Função que cria as <li>, pega o texto digitado no input e limpa o input
btnCriarTarefa.addEventListener('click', novaTarefa);

function novaTarefa() {
  const criaLi = document.createElement('li');

  criaLi.innerText = meuInput.value;
  minhaOl.appendChild(criaLi);
  meuInput.value = '';

}
