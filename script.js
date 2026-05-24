// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");
    if(name === "" || email === "" || message === "") {
        formMessage.innerHTML = "Please fill all fields!";
        formMessage.style.color = "red";
    }
    else {
        formMessage.innerHTML = "Form Submitted Successfully!";
        formMessage.style.color = "green";
    }
});
// Dynamic To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;
    if(taskText === "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
function removeTask(button) {
    button.parentElement.remove();
}