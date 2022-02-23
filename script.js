// Pegando os id do html e colocando na variavel
const inputElement = document.getElementById('texto-tarefa');
const olElement = document.querySelector('#lista-tarefas');
const btnCreateTarefa = document.querySelector('#criar-tarefa');
const btnClear = document.getElementById('apaga-tudo');
const btnRemoveMark = document.getElementById('remover-finalizados');

// Adicionando eventos nos botões
btnCreateTarefa.addEventListener('click', creatList);
btnClear.addEventListener('click', clearList);
btnRemoveMark.addEventListener('click', removeMark);


// Elemento da lista recebe background cinza quando clicado/selecionado
olElement.addEventListener('click', (event) => {
  console.log(event);
  if (event.target.id !== 'lista-tarefas') {
    for (let i = 0; i < olElement.children.length; i += 1) {
      if (olElement.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        olElement.children[i].style.backgroundColor = '';
      }
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';

  }
})

// Adiciona evento de duplo click na ol; Verifica se contém, remove se tiver e adiciona se não tiver a classe completed
olElement.addEventListener('dblclick', (event) => {
  if (event.target.id !== 'lista-tarefas') { // diferente do id do pai
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');

    } else {
      event.target.classList.add('completed');
    }

  }

})

// Cria elemento li e armazena o valor do input
function creatList() {
  const newLi = document.createElement('li');

  newLi.innerText = inputElement.value;
  olElement.appendChild(newLi)
  inputElement.value = '';
}

// Requisito 10 - Botão apagar
function clearList() {
  //olElement.innerHTML = '';
  for (let i = olElement.children.length - 1; i >= 0; i -= 1) {
    let clear = olElement.children[i];
    olElement.removeChild(clear);
  }
}
