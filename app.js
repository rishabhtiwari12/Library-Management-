console.log("this is index.js");

//constructor for book
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}
//display constructor
function Display(){

}
//Add method to display protrotype
Display.prototype.add=function(book){
  console.log("adding to ui");
  let tablebody=document.getElementById('tablebody');
  let uistring=`<tr>
                        
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                </tr>`; 
    tablebody.innerHTML+=uistring;            
}
Display.prototype.clear=function(){
    let libraryForm=document.getElementById("libraryForm");
    libraryForm.reset();  
}



//add submit event listener
let libraryForm=document.getElementById("libraryForm");
libraryForm.addEventListener('submit',libraryformsubmit);

function libraryformsubmit(e){
    e.preventDefault();
  
    console.log("you have submitted");
    let name=document.getElementById('bookname').value;
    let author=document.getElementById('Author').value
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');
    let type;
    if(fiction.checked){
        type=fiction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(cooking.checked){
        type=cooking.value;
    }

    let book=new Book(name,author,type)
    console.log(book);
    e.preventDefault();
    let display= new Display();
    display.add(book);
    display.clear();
        

    
}