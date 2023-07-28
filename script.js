console.log("Hello!");


let taskList=document.getElementById("taskList");
console.log(taskList);

function add(){
    let taskName=document.getElementById("taskName").value;
    let mark=document.getElementById("mark");
    if(taskName==''){
        alert("Please Enter a Task Name")
    }
    else{
        
        let task=document.createElement("li");
        let done=document.createElement("input");
        done.type="checkbox";
        let edit=document.createElement("button");
        let del=document.createElement("button");
        let name=document.createElement("h1");
        name.innerText=taskName;
        edit.innerText="EDIT";
        del.innerHTML="<img src='cross.png'>";
        
        done.classList.add('done');
        task.classList.add('task');
        edit.classList.add('edit');
        del.classList.add('delete');
        del.classList.add('img');
        task.appendChild(done);
        task.appendChild(name);
        task.appendChild(edit);
        task.appendChild(del);
        if (mark.checked===true){
            task.classList.add('important');
            document.getElementById("taskList").prepend(task);
        }
        else{
            
            document.getElementById("taskList").appendChild(task);
        }
        save();
    }
    
    
}
document.addEventListener("click",func);
function func(e) {
    // console.log(e.target.parentElement);
    if (e.target.className=='delete img'){
        document.getElementById("taskList").removeChild(e.target.parentElement);
        save();
    }
    else if ( e.target.tagName=='IMG'){
        document.getElementById("taskList").removeChild(e.target.parentElement.parentElement);
        save();
    }
    else if (e.target.className=='done' || e.target.className=='done' ){
        
        e.target.parentElement.classList.toggle("done");
        e.target.parentElement.classList.remove("important");
        
        save();
    }
    else if(e.target.className=='edit'){
        edit=e.target;
        edit.classList.add('save');
        edit.innerText='Save';
        let name=edit.previousElementSibling;
        name.classList.add("outline");
        name.contentEditable="true";
        name.focus();
        
    }
    else if(e.target.className=='edit save'){
        edit=e.target;
        let name=edit.previousElementSibling;
        name.contenteditable="false";
        edit.classList.remove('save');
        name.classList.remove('outline');
        edit.innerText='Edit';
        save();
        
    }
}


function save(){
    localStorage.setItem("data",taskList.innerHTML);

}

function show(){
    taskList.innerHTML=localStorage.getItem("data");
}
show();