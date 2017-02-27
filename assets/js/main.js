// console.log("Hello World from main.js!");

// var dog = {
// 	name: "Alfie",
// 	age: 8,
// 	breed: "Chihuahua",
// 	color: "White/Brown",
// }

// function addClient(pet) {
// 	var petList = [
// 		{
// 		name: "Beniji",
// 		age: 8,
// 		breed: "Cat - DMH",
// 		color: "White/Grey",
// 		},
// 		{
// 		name: "Sherlock",
// 		age: 4,
// 		breed: "Cat - DSH",
// 		color: "Brown Tabby/Tux",
// 		},
// 		{
// 		name: "Huggie",
// 		age: 17,
// 		breed: "Cat - DSH",
// 		color: "Black",
// 		},
// 	];
// 	petList.push(pet);
// 	return petList;
// }

// var dog = {
// 	name: "Lassie",
// 	vaccines: true,
// }

// function createNewClient() {
// 	var newClient = dog;
// 	// the var in front of this makes dog a variable specifically for this function and ONLY within this function without interacting or changing the variable "dog" outside of that function
// 	newClient.name = "Alfie";
// 	console.log(addClient(dog));
// }
//  createNewClient();
// console.log( addClient(dog) );



// HIGHER ORDER FUNCTIONS
// 	functions that take another functiona s parameters or return another function as their result

// 	ToDo App
// 		form and input and submit btn
// 		checkboxes to mark items as done
// 		buttons to remove items
// 		counter for how many items exist
// 		a counter for how many items are complete
// 		the ability to edit an item once it's been made
// 		the ability to save the list
//		hide/show completed
//		clear all completed
// 		check out todomvc.com for tutorials n shit

var toDoInputField = document.querySelector(".to-do-input");

toDoInputField.addEventListener("focus", function() {
	toDoInputField.value = null;
	})


function createToDo() {
	
	var	itemText = toDoInputField.value;

	checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.classList.add("checkbox");
	
	var newItemText = document.createElement("p");
		newItemText.innerHTML = itemText;

	var closeButton = document.createElement("button");
		closeButton.classList.add("close-button");
		closeButton.style.height = "1em";
		closeButton.style.width = "1em";
		closeButton.style.fontSize = "1em";
		closeButton.innerHTML = "X";
	
	var newItem = document.createElement("li");
		newItem.classList.add("list-item");
		newItem.appendChild(checkbox);
		newItem.appendChild(newItemText);
		newItem.appendChild(closeButton);


	var listParent = document.querySelector(".to-do-list");
		
		listParent.appendChild(newItem);

	if (!olContainer) {
		var olContainer = document.querySelector(".content ol");
		olContainer.style.border = "solid 2px black"
		olContainer.style.marginTop = "20px"
	}

	toDoInputField.value = "Enter item here...";

}

var form = document.querySelector("form");

form.addEventListener("submit", function(e) {
	e.preventDefault();
	createToDo();
});















