let quest1 = document.getElementById("quest1")
let quest2 = document.getElementById("quest2")

function Next(){
    quest1.classList.remove("currentQuest")
    quest2.classList.add("currentQuest")
}