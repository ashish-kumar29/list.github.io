console.log('Welcome to the "To Do List Maker"');
ShowNotes();
let AddBtn=document.getElementById("addbtn");
AddBtn.addEventListener("click",function(e){
    let AddTxt=document.getElementById("Addtxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(AddTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    AddTxt.value="";
    ShowNotes();
})

//fnction to show the node
function ShowNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html += `
            <div class="notecard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text"> ${element}</p>
                    <a id="${index}" onclick="DeleteNode(this.id)" class="btn btn-primary">Delete Notes</a>
                </div>
            </div>`;
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML='nothing to show! Use "add a note "to add notes';
    }

}

//fnction to delete a node 
function DeleteNode(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    ShowNotes();
} 

//function to search a note
let search=document.getElementById("searchtxt");
search.addEventListener("input", function(){
    let inputVal=search.value;
    let notecard=document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function(element){
        let cardtext=element.getElementsByTagName("P")[0].innerText;
        if(cardtext.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display="none";
        }
    })
})