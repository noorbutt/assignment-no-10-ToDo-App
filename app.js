var list = document.getElementById("list");



function addTodo(){


var todo_item = document.getElementById("todo-item" )


// create li text with text node 
var li = document.createElement("ul","li" )
var liText = document.createTextNode(todo_item.value,)  
li.appendChild(liText)


// create edit button 
var editBtn = document.createElement("button")
var editText = document.createTextNode("Edit")
editBtn.appendChild(editText)
editBtn.setAttribute("class", "btn btn-secondary")
editBtn.setAttribute("onclick" , "editItem(this)")
li.appendChild(editBtn)



// create delete button with text node
var delbtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delbtn.setAttribute("class", "btn btn btn-light")
delbtn.setAttribute("onclick" , "deleteItem(this)")
delbtn.appendChild(delText)
li.appendChild(delbtn)



list.appendChild(li)
todo_item.value = ""
}


//btn btn-danger

function editItem (e){
    var  val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}



function deleteItem (e){
    e.parentNode.remove()   
}





function deleteAll(){
    list.innerHTML = " "

}











