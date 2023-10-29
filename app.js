let inputFild = document.getElementById("input-fild");
let submitButton = document.getElementById("submit");
let ListContainer = document.getElementById("listContainer");

submitButton.addEventListener("click", function(){
    if(inputFild.value === ''){
        alert("You Must Write Something!");
    }else{
        let li= document.createElement("li");
        li.innerHTML = inputFild.value;
        ListContainer.appendChild(li);

        // Adding a cross icon 
        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }

    inputFild.value ='';
    saveItem();
});

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveItem();


    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveItem();
    }
});

function saveItem(){
    localStorage.setItem("data", ListContainer.innerHTML);

};

function showList(){
    ListContainer.innerHTML= localStorage.getItem("data");
};
showList();