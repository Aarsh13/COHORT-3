function deleteTodo(index) {
    let todoEle = document.getElementById("todo" + index);
    let parentEl = todoEle.parentNode;
    parentEl.removeChild(todoEle);
}

let ctr = 3;

function addTodo() {
    let parentEl = document.querySelector(".todos");
    let todoDiv = document.createElement("div");
    let text = document.getElementById("inpBox").value.trim();
    let head = document.createElement("h4");
    if (text === "") {
        alert("Please add some task");
        return;
    }
    head.innerHTML = text;

    let check=document.createElement("img");
    check.src="resources/check.svg"
    check.style.display="none";
    // check.style.width="100px"

    let deleteButton = document.createElement("img");
    deleteButton.src = "resources/last_5_recent_loss.svg";
    deleteButton.setAttribute("onclick", "deleteTodo(" + ctr + ")");

    

    todoDiv.appendChild(check);
    todoDiv.appendChild(head);
    todoDiv.appendChild(deleteButton);
    

    todoDiv.setAttribute("id", "todo" + ctr);
    todoDiv.setAttribute("class", "todoEl");
    todoDiv.setAttribute("onclick", "changeClass(" + ctr + ")");

    parentEl.appendChild(todoDiv);
    document.getElementById("inpBox").value = "";

    ctr++;
}

function changeClass(index) {
    let todoEle = document.getElementById("todo" + index);
    let checkMark = todoEle.querySelector("img[src='resources/check.svg']");

    if (todoEle.className === "todoEl-checked") {
        todoEle.className = "todoEl";
        checkMark.style.display = "none"; // Hide the checkmark when unchecked
    } else if (todoEle.className === "todoEl") {
        todoEle.className = "todoEl-checked";
        checkMark.style.display = "inline"; // Show the checkmark when checked
    }
}
