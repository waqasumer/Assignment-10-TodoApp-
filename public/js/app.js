var main = document.getElementById("main-section");

firebase.database().ref('todos').on('child_added', function (data) {
    
            var row = document.createElement("div");
            row.setAttribute("class", "row");

            var col1 = document.createElement("div");
            col1.setAttribute("class", "col text");
            var task = document.createTextNode(data.val().value);
            col1.appendChild(task);
            row.appendChild(col1);

            var col3 = document.createElement("div");
            col3.setAttribute("class", "col");

            var editBtn = document.createElement("button");
            editBtn.setAttribute("class", "btn btn-success btn-circle btn-sm fa fa-pencil-square-o");
            editBtn.setAttribute("onclick", "editTodo(this)");
            editBtn.setAttribute("id", data.val().key);
            col3.appendChild(editBtn);
            row.appendChild(col3);

            var col4 = document.createElement("div");
            col4.setAttribute("class", "col");

            var deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "btn btn-primary btn-circle btn-sm btn-danger fa fa-remove");
            deleteBtn.setAttribute("onclick", "deleteTodo(this)");
            deleteBtn.setAttribute("id", data.val().key);
            col4.appendChild(deleteBtn);
            row.appendChild(col4);
            main.appendChild(row);
});

function saveData() {
    var todo = document.getElementById("todo-item");
    var dateTime = document.getElementById("date-time");

    if (todo.value === "") {
        alert("Please enter task");
    } else {
        var database = firebase.database().ref('todos');
        var key = database.push().key;
    
        var todo = {
            value: todo.value,
            key: key
        }
        database.child(key).set(todo);
        document.getElementById("todo-item").value = "";
    }
}

function deleteTodo(e) {
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.parentNode.remove();
}

function editTodo(e) {
    var edit = prompt("Enter to edit your task", e.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue);
    if (edit == '') {
        alert("Please enter task");
    } else {
        var editTask = {
            value: edit,
            key: e.id
        }
        firebase.database().ref('todos').child(e.id).set(editTask);
        e.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue = edit;
    }
}

function deleteAll() {
    firebase.database().ref('todos').remove();
    main.innerHTML = "";
}