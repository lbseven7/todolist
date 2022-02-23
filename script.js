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
