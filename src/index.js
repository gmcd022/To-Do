import { createToDo } from "./create-to-do";
import { blankProjectLoad } from "./blank-project-load";
import { displayDefaultProject, displayTheForm, addItemToChecklist, clearForm} from "./dom-manipulation";
import "./styles.css";

//Call blankProjectLoad on first land
blankProjectLoad();

//Call DOM manipulation to control UI
//initialDomManip();

//Click events Module
let clickEventsModule = (function() {

    //click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    //click event for adding an item to the checklist on the form
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToChecklist);

    //click event to reset form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    //click event to submit a new todo form to project
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
})();

//Call create-to-do.js module file and apply some objects/properties
//const myToDo = createToDo("Grocery Run", "Go get groceries", "15/6/2022", "Low", false)
//const myToDo2 = createToDo("Homework", "Do OP work", "15/6/2022", "Medium", false)
//console.log("show me properties on myToDo from index.js..", myToDo);
//console.log("show me properties on myToDo2 from index.js..", myToDo2);
