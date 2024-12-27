function addtodo() {
    let todovalue = document.getElementById("todovalue").value;
    let tododate = document.getElementById("tododate").value;
    if (tododate.length && todovalue.length > 0) {
        const emptystate=document.querySelector(".empty-state");
        if(emptystate){
            emptystate.remove();
        }
        let adds = document.createElement("li");
        adds.className = "todo-item";
        adds.innerHTML= `
                ${todovalue}
                <span>${tododate}</span>
                <button  class="delete-btn" onclick="deletetodo(this)">delete</button>
            `;
           let todolist=document.getElementById("todoList");
           todolist.appendChild(adds); 
           document.getElementById("todovalue").value="";
           document.getElementById("tododate").value="";
    }
    else{
        alert("plese enter both task and date!");
    }
}
function deletetodo(button) {
    button.parentElement.remove();
    let emptystate=document.getElementById("todoList");
    if(emptystate.childElementCount==0){
        const empty=document.createElement("li");
        empty.className="empty-state";
        empty.innerHTML="No tasks yet. Add a task!";
        emptystate.appendChild(empty);
    }
}