const getRangeInput = document.getElementById("input-characters");

getRangeInput.addEventListener("input",function(e){
    const updateLength = document.getElementById("update-length");
    updateLength.textContent = e.target.value;
    console.log(e.target.value);
})

const checkInputs = document.querySelector("#check-input");

checkInputs.addEventListener("input",function(e){
    if(e.target.nodeName == "INPUT"){
        const parentElem = e.target.parentElement;
        if (e.target.checked) {
            parentElem.classList.remove("text-light", "border-light");
            parentElem.classList.add("text-brightPurple", "border-brightPurple"); 
        }else{
            parentElem.classList.remove("text-brightPurple", "border-brightPurple"); 
            parentElem.classList.add("text-light", "border-light");
            
        }
        
        console.log(e);
    }   
},true)