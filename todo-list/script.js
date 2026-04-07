function atualizarTotal() {
    var total = document.getElementById("lista").children.length;
    document.getElementById("total").textContent = "Total de tarefas: " + total;
}

function adicionarTarefa() {
    var tarefaInput = document.getElementById("tarefaInput");
    var dataInput = document.getElementById("dataInput");
    var tarefa = tarefaInput.value;
    var data = dataInput.value;

    if (tarefa === "" || data === "") {
        alert("Preencha a tarefa e a data!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = tarefa + " - " + data + " ";

    var botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.onclick = function() {
        li.remove();
        atualizarTotal();
    };

    li.appendChild(botaoRemover);
    document.getElementById("lista").appendChild(li);

    tarefaInput.value = "";
    dataInput.value = "";

    atualizarTotal();
}

document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);