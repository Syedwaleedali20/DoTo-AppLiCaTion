var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    // 
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    // 
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DeLeTE");
    delBtn.setAttribute("class", "btn");
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText);
    // 
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDiT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.setAttribute("class", "editbtn")

    li.appendChild(delBtn);

    li.appendChild(editBtn);

    list.appendChild(li);

    todo_item.value = "";

    // console.log(li);
}

function deleteItem(a) {
    a.parentNode.remove()
}

function editItem(b) {
    var val = b.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)
    b.parentNode.firstChild.nodeValue = editValue
        // console.log(b.parentNode.firstChild)
}

function deleteAll() {
    list.innerHTML = " "
}