import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './dom-manipulation';
import { saveToDoToLocal } from './local-storage';

//creating an array for ToDo
let toDoArray = [];

//factory function to create todo list
export const createToDo = () => {
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    //Check to see if empty fields exist
    if (Title == "" || Description == "" || DueDate == "") {
        alert("Title, Description, and Due Date are required fields, please try again!");
        return;
    }

    //Check to see if a pre-date was entered
    if (parseISO(DueDate) < startOfToday()) {
        alert("You have enetered a date that has already passed! Please enter a valid date");
        console.log("due date", parseISO(DueDate));
        console.log("date now", startOfToday());
        return;
    }

    //Loop over the nodelist for Checklist items from the DOM and format to string
    const nodeListChecklist = document.querySelectorAll("li");
    let ChecklistArray = [];
    for (let i = 0; i < nodeListChecklist.length; i++) {

        //Strip off the 'x' from end of each li then push to temp array
        let StrippedChecklist = nodeListChecklist[i].textContent.replace("\u00D7", "");
        ChecklistArray.push(StrippedChecklist);
    }

    //Strip off the checklist array and conver to string with commas
    let Checklist = ChecklistArray.join(", ");

    console.log("Called createToDo module.. creating todo now");
    console.log({Title, Description, DueDate, Priority, Checklist});
    console.log("Pushing this object to the toDoArray..");
    //TODO: remove below two lines if array is not needed
    toDoArray.push({Title, Description, DueDate, Priority, Checklist});
    console.log(toDoArray);

    //call storage
    saveToDoToLocal({ Title, Description, DueDate, Priority, Checklist});

    //Reset he form after successful submission
    clearForm();

    return {Title, Description, DueDate, Priority, Checklist};
    
};
