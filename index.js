function TodoList(title, description, dueDate, selectedPriroty) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.selectedPriroty = selectedPriroty;
}
let todolistArray = [];
let list = JSON.parse(localStorage.getItem("todo"));
todolistArray = list;

const bookList = document.querySelector("#tableBody");
bookList.textContent = "";
function deletea(i) {
  todolistArray.splice(i);
  localStorage.setItem("todo", JSON.stringify(todolistArray));
}
function showTodoData() {
  for (let i = 0; i < todolistArray.length; i++) {
    let tableBody = document.getElementById("tableBody");

    console.log(todolistArray[i]);
    let uiString = `<tr>
          <td>${todolistArray[i].title}</td>
          <td>${todolistArray[i].description}</td>
          <td>${todolistArray[i].dueDate}</td> 
          <td>${todolistArray[i].selectedPriroty}</td> 
          <td><button onclick="deletea(${i})">Delete</button></td>                    
          </tr>`;
    tableBody.innerHTML += uiString;
  }
}

function todo() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("Description").value;
  let dueDate = document.getElementById("duedate").value;
  let selectedPriroty = document.getElementById("getPririty").value;
  if (selectedPriroty == 1) {
    selectedPriroty = "High";
  } else if (selectedPriroty == 2) {
    selectedPriroty = "Medium";
  } else {
    selectedPriroty = "Low";
  }
  let todoList = new TodoList(title, description, dueDate, selectedPriroty);
  console.log(todoList);
  todolistArray.push(todoList);
  console.log();
  localStorage.setItem("todo", JSON.stringify(todolistArray));
  showTodoData();
}