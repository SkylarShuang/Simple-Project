
var removeSvg =' <svg version="1.1" class="nofill"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 486.4 486.4" style="enable-background:new 0 0 486.4 486.4;" xml:space="preserve"> <g><g><path d="M446,70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5,0-53.5,24-53.5,53.5V70H40.4c-7.5,0-13.5,6-13.5,13.5 S32.9,97,40.4,97h24.4v317.2c0,39.8,32.4,72.2,72.2,72.2h212.4c39.8,0,72.2-32.4,72.2-72.2V97H446c7.5,0,13.5-6,13.5-13.5S453.5,70,446,70z M168.6,53.5c0-14.6,11.9-26.5,26.5-26.5h96.2c14.6,0,26.5,11.9,26.5,26.5V70H168.6V53.5z M394.6,414.2c0,24.9-20.3,45.2-45.2,45.2H137c-24.9,0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z"/><path d="M243.2,411c7.5,0,13.5-6,13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v238.5C229.7,404.9,235.7,411,243.2,411z"/><path d="M155.1,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9C141.6,390.1,147.7,396.1,155.1,396.1z"/><path d="M331.3,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9C317.8,390.1,323.8,396.1,331.3,396.1z"/> </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> <g></g><g></g><g></g><g></g><g></g><g> </g> <g></g></svg>';
var completeSvg =  ' <svg version="1.1"  class="doit" viewBox="0 0 512 512"x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><g><g><g><path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,490.667 C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667 z"/><path d="M387.125,152.458L202.667,336.917l-99.125-99.125c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l106.667,106.667c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l192-192c4.167-4.167,4.167-10.917,0-15.083C398.042,148.292,391.292,148.292,387.125,152.458z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

let addBtn = document.getElementById("add");

addBtn.addEventListener('click',addItem);

function addItem(){
  var value = document.getElementById("item").value;
  if(value){
      console.log('hello');
    addItemTodo(value);
  }
}
function removeItem(){
   var item = this.parentNode.parentNode;
   var parent = item.parentNode;
   parent.removeChild(item);
}
function completedItem(){
    var item = this.parentNode.parentNode;
   var parent = item.parentNode;
   var target = (parent.id==="completed")?document.getElementById('todo'):document.getElementById('completed');
   parent.removeChild(item);
   target.insertBefore(item,target.childNodes[0]);
}
// Add 
function addItemTodo(text){
    var todoList = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSvg;

// click event for moving item

    remove.addEventListener('click',removeItem);

//add click event for completed
    var compelet = document.createElement('button');
    compelet.classList.add('complete');
    compelet.innerHTML = completeSvg ;
    compelet.addEventListener('click',completedItem);

    buttons.appendChild(remove);
    buttons.appendChild(compelet);
    item.appendChild(buttons);
    
    todoList.appendChild(item);
}