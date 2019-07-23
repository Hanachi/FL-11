let rootNode = document.getElementById('root');

let taskInput = document.getElementById('input-action');
let addButton = document.getElementsByTagName('button')[0];
let taskHolder = document.getElementById('incomplete-tasks');
let completedTasksHolder=document.getElementById('completed-tasks');

let createNewElement = function(taskString){
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
	let newSpan = document.createElement('span');
	let editInput = document.createElement('input');
  let editButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  let iconS = document.createElement('i');
  let iconS1 = document.createElement('i');
  iconS.innerText = 'edit';
  iconS1.innerText = 'delete';
  let divItem = document.createElement('div');
  let divLeft = document.createElement('div');
  let divRight = document.createElement('div');
  newSpan.innerText = taskString;
  listItem.setAttribute('draggable','true');
  checkBox.type = 'checkbox';
  editInput.type = 'text';

  divItem.className = 'item';
  divLeft.className = 'left';
  divRight.className = 'right';
  iconS.className = 'edit-list material-icons';
  iconS.id = 'iconka';
  iconS1.className = 'delete-list material-icons';
  deleteButton.className = 'delete';
  editButton.className = 'edit';
  editButton.appendChild(iconS);
  deleteButton.appendChild(iconS1);
  divLeft.appendChild(checkBox);
  divLeft.appendChild(newSpan);
  divLeft.appendChild(editButton);
  divRight.appendChild(deleteButton);
  divItem.appendChild(divLeft);
  divItem.appendChild(divRight);
  listItem.appendChild(divItem);
	return listItem;
}
let checkQuantity = function(){
  let lengthLi = document.getElementsByTagName('li').length;
  let ten = 10;
  if(lengthLi >= ten){
    document.getElementsByTagName('h2')[0].style.display = 'block';
    document.getElementById('input-action').disabled = true;
    document.getElementsByTagName('button')[0].disabled = true;
    return;
  } else {
    document.getElementsByTagName('h2')[0].style.display = 'none';
    document.getElementById('input-action').disabled = false;
    document.getElementsByTagName('button')[0].disabled = false;
  }
}
let checkEmpty = function(){
  if(taskInput.value.length !== 0){
    document.getElementsByTagName('button')[0].disabled = false;
    return true;
  } else {
    document.getElementsByTagName('button')[0].disabled = true;
    return false;
  }
}
let checkBoxCheck = function() {
  let listCheckbox = this.parentNode.parentNode.parentNode; 
  if(listCheckbox.querySelector('input[type=text]')) {
return; 
}
  listCheckbox.querySelector('input[type=checkbox]').checked = true;
}
let cols = document.querySelectorAll('ul li');
let addTask = function(){
  if(checkEmpty()){   
  let listItem = createNewElement(taskInput.value);
  taskHolder.appendChild(listItem);
  cols = document.querySelectorAll('ul li');
  [].forEach.call(cols, addDnDHandlers);
  checkQuantity();
	bindTaskEvents(listItem, taskCompleted);
  taskInput.value = '';
  } else {
 return; 
}
}
let editTask = function(){
  let listItem = this.parentNode;
  let span = listItem.querySelector('span');
  span.style.display = 'none';
  let containsClass = listItem.classList.contains('editMode');
  let x = span.innerText;
if(containsClass){
  listItem.style.display = 'flex';
  span.innerText = listItem.querySelector('input[type=text]').value;
  listItem.querySelector('input[type=text]').type = 'checkbox';
  span.style.display = 'block';
  listItem.parentNode.querySelector('button.delete').style.display = 'block';
  listItem.querySelector('i.edit-list.material-icons').innerText = 'edit';
} else{
    listItem.querySelector('i.edit-list.material-icons').innerText = 'save';
    listItem.querySelector('input[type=checkbox]').type = 'text';
    listItem.querySelector('input[type=text]').value = x;
    let span = listItem.querySelector('span');
    span.style.display = 'none';
    listItem.parentNode.querySelector('button.delete').style.display = 'none';
    
  }
  listItem.classList.toggle('editMode');
}

let deleteTask = function(){
  let listItem = this.parentNode.parentNode.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
  checkQuantity();
}

let taskCompleted = function(){
let listItem = this.parentNode;
completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}
let taskIncomplete = function(){
  let listItem=this.parentNode;
taskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}

addButton.onclick = addTask;

let bindTaskEvents = function(taskListItem){
	let checkBox = taskListItem.querySelector('input[type=checkbox]');
	let editButton = taskListItem.querySelector('button.edit');
	let deleteButton = taskListItem.querySelector('button.delete');

		editButton.onclick = editTask;
		deleteButton.onclick = deleteTask;
		checkBox.onchange=checkBoxCheck;
}
let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

  this.classList.add('dragElem');
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function handleDragLeave() {
  this.classList.remove('over');
}

function handleDrop(e) {

  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl !== this) {
    this.parentNode.removeChild(dragSrcEl);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
    
  }
  this.classList.remove('over');
  return false;
}

function handleDragEnd() {
  this.classList.remove('over');
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}
