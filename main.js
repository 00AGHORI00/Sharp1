var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//Delete item
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems)

//add item
function addItem(e){
    e.preventDefault();
//get the input value
var newItem = document.getElementById('item').value;

// creat new li element
var li = document.createElement('li');
//add class
li.className = 'list-group-item';
// Add text node with inpt valu
li.appendChild(document.createTextNode(newItem));

//create del button
var delBtn= document.createElement('button')
// add class to delete button
delBtn.className = 'btn btn-danger btn-sm float-right delete'

//Append text node
delBtn.appendChild(document.createTextNode('X'));
//Append del button in li
li.appendChild(delBtn);

//Append li to list
itemList.appendChild(li)
}
//Remove item function
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('are you sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

}

//filter items
function filterItems(e){
    //convrt text to lower case
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName('li')
    //convert to an array
    Array.from(items).forEach(function (item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
})
}