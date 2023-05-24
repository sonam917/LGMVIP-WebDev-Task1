const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function displayDate(){
    let date= new Date()
    date = date.toString().split(" ");
    document.querySelector("#date").innerHTML = date[0]+" "+date[1]+" "+date[2]+" "+date[3]
}

window.onload = function(){
    displayDate()
}


function addTask(){
    if(inputBox.value === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

    // ----------------Code for adding x icon with js-----------------------------------
        let span = document.createElement("span");
        span.innerHTML = "&#x00D7";
        li.appendChild(span);


    }

    inputBox.value = "";
    saveData();
}



listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
