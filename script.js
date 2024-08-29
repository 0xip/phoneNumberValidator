const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const phoneCheck = str =>{
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }

checkBtn.addEventListener("click", ()=>{
  if(!input.value){
      alert("Please provide a phone number");
}else{
    if(phoneCheck(input.value)){
        result.textContent = `Valid US number:  ${input.value}`
    }else{
        result.textContent = `Invalid US number:  ${input.value}`
    }
}
})

clearBtn.addEventListener("click", ()=>{
    result.textContent = "";
    input.value = "";
  })