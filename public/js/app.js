var main = document.getElementById("main-section");

function addTodo() {
    var todoItem = document.getElementById("todo-item").value;
    if (todoItem === "") {
        alert("Please enter task");
    } else {
        var row = document.createElement("div");
        row.setAttribute("class", "row");

        var col1 = document.createElement("div");
        col1.setAttribute("class", "col text");
        var task = document.createTextNode(todoItem);
        col1.appendChild(task);
        row.appendChild(col1);

        var col2 = document.createElement("div");
        col2.setAttribute("class", "col");

        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "btn btn-success btn-circle btn-sm fa fa-pencil-square-o");
        editBtn.setAttribute("onclick", "editTodo(this)");
        col2.appendChild(editBtn);
        row.appendChild(col2);

        var col3 = document.createElement("div");
        col3.setAttribute("class", "col");

        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "btn btn-primary btn-circle btn-sm btn-danger fa fa-remove");

        deleteBtn.setAttribute("onclick", "deleteTodo(this)");
        col3.appendChild(deleteBtn);
        row.appendChild(col3);
        main.appendChild(row);

        document.getElementById("todo-item").value = "";
    }
}

function deleteTodo(e) {
    var p = e.parentNode.parentNode;
    p.parentNode.removeChild(p);
}

function editTodo(e) {

    var editPrompt = prompt("Enter to edit your task", e.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue);

    e.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue = editPrompt;

}

function deleteAll() {
    main.innerHTML = "";
}