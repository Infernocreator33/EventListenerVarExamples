function showVal()
{
    console.log(document.getElementById('name').value);
    alert("hello");
}
//first parameter is what command for event listener, then the function which holds the event
document.getElementById('theButton').addEventListener("click", showVal);
var textBox = document.getElementById('name');
textBox.addEventListener("focus", newFunction);

function newFunction()
{
    textBox.style.backgroundColor = "green"
    textBox.style.color = "white";

}

var secondButton = document.getElementById('button2');
secondButton.addEventListener("click", function() {
   var divText = document.getElementById('theDiv').innerHTML;
   divText += "new stuff";
   document.getElementById('theDiv').innerHTML = divText;
   alert(divText);
});

document.getElementById('lists').addEventListener("click", function() {
var listItems = document.getElementsByTagName('li');
var addedItem = document.getElementById('addAnItem').value;
listItems += addedItem;
for(let i = 0; i < listItems.length; i++)
{
    console.log(listItems[i].innerHTML);
}
document.getElementById('theList').innerHTML += "<li>" + addedItem + "</li>";

});