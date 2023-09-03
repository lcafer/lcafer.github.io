//create
function adicionarTarefa(){
  let tarefa = prompt("Insira a tarefa a ser adicionada")
  localStorage.setItem(tarefa, tarefa)
  return tarefa
}

//delete
function removerTarefa(tarefa){
  localStorage.removeItem(tarefa)
  const tarefaHolder = document.getElementById(tarefa)
  tarefaHolder.remove();
}

//update
function alterarTarefa(tarefa){
  let procuraItem = localStorage.getItem(tarefa)
  let newTarefa = prompt("Insira a nova tarefa")
  localStorage.removeItem(procuraItem)
  localStorage.setItem(newTarefa, newTarefa)
  removerTarefa(tarefa)
  checkList()
}


function addListenerBtnAdicionar(){
  const tarefasHolder = document.getElementById("tarefas-holder")
  let tarefa = adicionarTarefa()
  let newItem = document.createElement("li")
  let newTitle  = document.createElement("span")
  let newBtnAdd  = document.createElement("span")
  let newBtnRemover = document.createElement("span")
  let newDiv = document.createElement("div")
  tarefasHolder.appendChild(newItem)
  newItem.className += "tarefas-item"
  newItem.setAttribute('id', `${tarefa}`)
  newItem.appendChild(newTitle) 
  newItem.appendChild(newDiv)
  newDiv.appendChild(newBtnAdd)
  newDiv.appendChild(newBtnRemover)
  newDiv.setAttribute('id', "box")
  newTitle.className += `tarefas-titulo text`
  newBtnAdd.className += "alterar btn-nav text menu-list end-text-tarefas"
  newBtnRemover.className += "remover btn-nav text menu-list"
  newBtnAdd.setAttribute('onclick', `alterarTarefa("${tarefa}")`)
  newBtnRemover.setAttribute('onclick', `removerTarefa("${tarefa}")`)
  newTitle.innerHTML = tarefa
  newBtnAdd.innerHTML = "Alterar"
  newBtnRemover.innerHTML = "Remover"
}

//read
function checkList(){
  for (let i = 0; i < localStorage.length; i++){
    const tarefasHolder = document.getElementById("tarefas-holder")
    let newItem = document.createElement("li")
    let newTitle  = document.createElement("span")
    let newBtnAdd  = document.createElement("span")
    let newBtnRemover = document.createElement("span")
    let newDiv = document.createElement("div")
    tarefasHolder.appendChild(newItem)
    newItem.className += "tarefas-item"
    newItem.setAttribute('id',`${Object.values(localStorage)[i]}`)
    newItem.appendChild(newDiv)
    newItem.appendChild(newTitle) 
    newDiv.appendChild(newBtnAdd)
    newDiv.appendChild(newBtnRemover)
    newDiv.setAttribute('id', "box")
    newTitle.className += `tarefas-titulo text`
    newBtnAdd.className += "alterar btn-nav text menu-list end-text-tarefas"
    newBtnRemover.className += "remover btn-nav text menu-list "
    newBtnAdd.setAttribute('onclick', `alterarTarefa("${Object.values(localStorage)[i]}")`)
    newBtnRemover.setAttribute('onclick', `removerTarefa("${Object.values(localStorage)[i]}")`)
    newTitle.innerHTML = Object.values(localStorage)[i]
    newBtnAdd.innerHTML = "Alterar"
    newBtnRemover.innerHTML = "Remover"
  }
}

checkList()