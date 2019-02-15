var button = document.querySelector("#newbutton");

function addtolist(e) {
  var todolist = document.querySelector('ul')
  var task = document.querySelector("#newtextbox")
//  e.preventDefault()
let newitem = document.createElement('li');
newitem.innerHTML = task.value;
todolist.appendChild(newitem)
document.querySelector('form').reset()
}
button.addEventListener('click', addtolist)

