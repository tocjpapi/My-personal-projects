const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value == ''){
        alert("saisissez une text stp")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}