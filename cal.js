const display = document.getElementById("display");
const BtnSection = document.getElementById("BtnSection");
const DelBtn = document.getElementById("DelBtn");
const ResetBtn =document.getElementById("ResetBtn");
const EqualBtn =document.getElementById("EqualBtn");

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {button.addEventListener("click", ()=> {display.value += button.textContent;});
});
ResetBtn.addEventListener("click", ()=>{
  display.value="";
});

DelBtn.addEventListener("click", () =>{
  display.value=
  display.value.slice(0,-1);
});
EqualBtn.addEventListener("click", ()=>
  {
  try{
    let expression = display.value;
    if(expression.trim()===""){
      return;
    }
  
  expression=expression.replace(/X/g, "*");
  const answer=eval(expression);
  if(!Number.isFinite(answer)){display.value="Error";}
  else{
    display.value= answer;
  }
 } catch (error){
    display.value = "Error";
  }
});
 