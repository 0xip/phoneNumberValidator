const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener("click", ()=>{
  if(!input.value){
      alert("Please provide a phone number");
}
})

const phoneCheck = str =>{
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
