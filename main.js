$('form').on('submit', function(e){
    e.preventDefault();

    const nomeDaTarefa = $('#nome-da-tarefa').val();
    const novaTarefa = $('<li style=cursor: pointer ;></li>').text(nomeDaTarefa);

    $(nomeDaTarefa).appendTo('novaTarefa');
    $(novaTarefa).appendTo('ul');
    $('#nome-da-tarefa').val('')
})

$("#tarefas").on('click', 'li', function() {
    $(this).toggleClass('remover-tarefa');
})

$('#limpar').click(function(){
    $("ul").empty();
})