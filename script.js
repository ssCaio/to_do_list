const containerTarefa = document.querySelector(".container-tarefa");
const botao = document.querySelector("button");
const tarefa = document.querySelector(".tarefa");

botao.addEventListener("click", () => {
  if (tarefa.value) {
    createList(tarefa.value);
    tarefa.value = "";
    tarefa.focus();
  } else {
    alert("Por favor, preencha o campo de tarefa!");
  }
});

function createList(conteudo) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";
  li.textContent = conteudo;
  containerTarefa.appendChild(ul).appendChild(li).appendChild(removeBtn);

  removeBtn.addEventListener("click", function () {
    ul.remove();
  });
}
