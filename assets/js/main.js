var toDoInputField = document.querySelector(".to-do-input");
	var addItem = document.querySelector(".add-item");
	var select = document.querySelector(".select-all");
	var deselect = document.querySelector(".deselect-all");
	var markComplete = document.querySelector(".mark-complete");
	var markIncomplete = document.querySelector(".mark-incomplete");
	var toggleCompleted = document.querySelector(".toggle-completed");
	var deleteCompleted = document.querySelector(".delete-completed");
	var deleteSelected = document.querySelector(".delete-selected")
	var checkbox = document.querySelector(".checkbox");
	var saveList = document.querySelector(".save-list");
	var listItems = document.querySelectorAll(".list-item");
	var numberOfItems = 0;


toDoInputField.addEventListener("focus", function() {
	toDoInputField.value = null;
	})

addItem.addEventListener("click", createToDo);

select.addEventListener("click", selectAllItems);

deselect.addEventListener("click", deselectAllItems);

markComplete.addEventListener("click", markItemsComplete)

markIncomplete.addEventListener("click", markItemsIncomplete)

saveList.addEventListener("click", storeToDoList);

toggleCompleted.addEventListener("click", toggleCompletedItems);

deleteCompleted.addEventListener("click", deleteAllCompleted);

deleteSelected.addEventListener("click", deleteAllSelected);

function createToDo() {

	var	itemText = toDoInputField.value;

	var checkbox = document.createElement("div");
		checkbox.classList.add("checkbox");
	
	var newItemText = document.createElement("div");
		newItemText.classList.add("list-item-text");
		newItemText.innerHTML = itemText;

	var trashcanIcon = document.createElement("div");
		trashcanIcon.classList.add("trashcan-icon");
		trashcanIcon.classList.add("hidden");

	var newItem = document.createElement("li");
		newItem.classList.add("list-item");
		newItem.appendChild(checkbox);
		newItem.appendChild(newItemText);
		newItem.appendChild(trashcanIcon);
		newItemName = "newItem" + numberOfItems;
		newItem.setAttribute("data-name", newItemName);
		newItem.setAttribute("data-checked", "false");
		newItem.setAttribute("data-completed", "false");
		newItem.setAttribute("data-item-text", newItemText.innerHTML);

	trashcanListeners(newItem);

	var listParent = document.querySelector(".to-do-list");
		listParent.appendChild(newItem);

	toDoInputField.value = "Enter item here...";

	checkboxListener(checkbox);

	numberOfItems++;
}

function checkboxListener(checkbox) {
	checkbox.addEventListener("click", toggleCheckbox);
	var listItem = checkbox.parentNode;


	function toggleCheckbox (){

		if ( listItem.dataset.checked == "false"
		&& listItem.dataset.completed == "false") {
			checkbox.innerHTML = "&#10003;";
			listItem.setAttribute("data-checked", "true");
		} else if ( listItem.dataset.completed == "false") {
			checkbox.innerHTML = null;
			listItem.setAttribute("data-checked", "false");
		}
	}
}

function selectAllItems () {
	var allCheckboxes = document.querySelectorAll(".checkbox");

	for (var i = allCheckboxes.length - 1; i >= 0; i--) {

		if ( allCheckboxes[i].parentNode.dataset.checked == "false"
			&& allCheckboxes[i].parentNode.dataset.completed == "false") {
			allCheckboxes[i].innerHTML = "&#10003;";
			allCheckboxes[i].parentNode.setAttribute("data-checked", "true");
		}
	}

}

function deselectAllItems () {
	var allCheckboxes = document.querySelectorAll(".checkbox");

	for (var i = allCheckboxes.length - 1; i >= 0; i--) {

		if ( allCheckboxes[i].parentNode.dataset.checked == "true"
			&& allCheckboxes[i].parentNode.dataset.completed == "false") {
			allCheckboxes[i].innerHTML = "";
			allCheckboxes[i].parentNode.setAttribute("data-checked", "false");
		}
	}
}

function markItemsComplete () {
	var allListItemTexts = document.querySelectorAll(".list-item-text");
	var allCheckboxes = document.querySelectorAll(".checkbox");

	for (var i = allCheckboxes.length - 1; i >= 0; i--) {
		if ( allCheckboxes[i].parentNode.dataset.checked == "true"
			&& allCheckboxes[i].parentNode.dataset.completed == "false") {
			allListItemTexts[i].classList.add("completed");
			allCheckboxes[i].classList.add("completed");
			allCheckboxes[i].parentNode.setAttribute("data-completed", "true");
			console.log("added completed");
		} 
	}
}


function markItemsIncomplete() {
	var allCheckboxes = document.querySelectorAll(".checkbox");
	var allListItemTexts = document.querySelectorAll(".list-item-text");

	for (var i = allCheckboxes.length - 1; i >= 0; i--) {
		if (allCheckboxes[i].parentNode.dataset.completed == "true") {
				allCheckboxes[i].classList.add("checked");
				allCheckboxes[i].classList.remove("completed");
				allListItemTexts[i].classList.remove("completed");
				allCheckboxes[i].parentNode.setAttribute("data-checked", "true");
				allCheckboxes[i].parentNode.setAttribute("data-completed", "false");
			}
	}
}

function toggleCompletedItems() {
	var completedItems = document.querySelectorAll(".completed");
	for (var i = completedItems.length - 1; i >= 0; i--) {
		if ( !completedItems[i].classList.contains("hidden")) {
			completedItems[i].classList.add("hidden");
		} else if ( completedItems[i].classList.contains("hidden") ){
			completedItems[i].classList.remove("hidden");
		}
	}
}

function storeToDoList () {
	var listItems = document.querySelectorAll(".list-item")
	for (var i = listItems.length - 1; i >= 0; i--) {
		var itemName = listItems[i].dataset.name;
		var itemInfo = listItems[i].dataset;
		localStorage.setItem(itemName, itemInfo);
	}
}

function deleteAllCompleted() {
	var listItems = document.querySelectorAll(".list-item");

	for (var i = listItems.length - 1; i >= 0; i--) {
		if (listItems[i].dataset.completed == "true") {
				listItems[i].parentNode.removeChild(listItems[i]);
			}
	}
}

function deleteAllSelected() {
	var listItems = document.querySelectorAll(".list-item");

	for (var i = listItems.length - 1; i >= 0; i--) {
		console.log("function running");
		if ( listItems[i].dataset.checked == "true"
			&& listItems[i].dataset.completed == "false") {
				listItems[i].parentNode.removeChild(listItems[i]);
				console.log("deleteThisItem");
			}
	}
}


function trashcanListeners(e) {

	e.addEventListener("mouseover", revealTrashcanIcon);
	e.addEventListener("mouseout", hideTrashcanIcon);


	var trashcanIcon = e.lastChild;
	
	trashcanIcon.addEventListener("click", deleteThisItem);

	function revealTrashcanIcon() {	
		if ( trashcanIcon.classList.contains("hidden")) {
			trashcanIcon.classList.remove("hidden");
		}
	}

	function hideTrashcanIcon() {
		if ( !trashcanIcon.classList.contains("hidden") ) {
			trashcanIcon.classList.add("hidden");
		}

	}

	function deleteThisItem() {
		e.parentNode.removeChild(e);
	}
}
// window.onLoad = loadSavedToDoList();

// function loadSavedToDoList() {
// 	savedList = localStorage.getItem("listItem");
// 	console.log(savedList);
// }

console.log(document.querySelectorAll(".list-item"));

// FOR MORNING: 
// The ability to save list locally

// Grab localStorage and display saved items on page load

// Mark all as complete

// Hide/show completed

// Delete all completed

//item counter





