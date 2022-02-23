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
