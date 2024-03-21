import { displayToDo } from "./dom-manipulation"

export function saveToDoToLocal({ Title, Description, DueDate, Priority, Checklist }) {
    console.log("Saving object to local storage..");
    localStorage.setItem("Title", document.getElementById("Title").value);
    localStorage.setItem("Description", document.getElementById("Description").value);
    localStorage.setItem("DueDate", document.getElementById("DueDate").value);
    localStorage.setItem("Priority", document.getElementById("Priority").value);
    localStorage.setItem("Checklist", Checklist);
    displayToDo();
    return { Title, Description, DueDate, Priority, Checklist };

}