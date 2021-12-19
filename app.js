// TODO APP


// -------------------------------------add new item-----------------------------------------
document.getElementById('button1').addEventListener('click',addNew)
function addNew(){
  let text = document.getElementById("text").value;

  // li creation
  let li = document.createElement("li");
  // add bootstrap class to li
  li.setAttribute("class", "list-group-item");

  // create span element
  let span=document.createElement('span')
  
  // add text coming from input to the span
  span.appendChild(document.createTextNode(text))

  // append span into li
  li.appendChild(span);

  // delete button creation
  let button1 = document.createElement("button");
  // add bootstrap class to button
  button1.setAttribute("class", "btn btn-danger float-end delete-item");

  // append text inside button
  button1.appendChild(document.createTextNode("delete"));

  // details button creation
  let button2 = document.createElement("button");
  // add bootstrap class to button
  button2.setAttribute("class", "btn btn-warning mx-2 float-end show-item");

  // append text inside button
  button2.appendChild(document.createTextNode("show"));

  // append button inside li
  li.appendChild(button1);
  li.appendChild(button2);

  // append li to ul parent list
  document.getElementById("parent").appendChild(li);

  // clear the input field
   document.getElementById("text").value=''
}



// -------------------------------------delete item-----------------------------------------

document.getElementById('parent').addEventListener('click',function(e){

  if(e.target.classList.contains('delete-item'))
  {
    console.log('delete button');
    e.target.parentElement.remove()
  }

})



// -------------------------------------show item in input-----------------------------------------

document.getElementById("parent").addEventListener("click", function (e) {
  if (e.target.classList.contains("show-item")) {
    // get text from span
    let text=e.target.parentElement.firstElementChild.innerText;

    // add this text in input
     document.getElementById("text").value=text


    //  show edit button and hide add button
     document.getElementById("button2").classList.remove('d-none')
     document.getElementById('button1').classList.add('d-none')


    //  get index of parent element 

  //  first we select all li from ul with querySelectorAll
  //  which allows u to create table of li
    let lis=document.querySelectorAll('li')

    // get index of current li by this method below
    let index= Array.prototype.indexOf.call(lis,e.target.parentElement)

    document.getElementById('hidden').value=index
  }
});




// -------------------------------------update item item-----------------------------------------

document.getElementById('button2').addEventListener('click',function(){

  let text = document.getElementById("text").value;
  let index = document.getElementById("hidden").value;

  document.getElementById("parent").children[index].firstElementChild.innerText = text;

  //  show edit button and hide add button
  document.getElementById("button2").classList.add("d-none");
  document.getElementById("button1").classList.remove("d-none");


  // clear input
   document.getElementById("text").value = "";

})


