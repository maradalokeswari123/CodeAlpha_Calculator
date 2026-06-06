const display=document.getElementById("display");
const buttons=document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const value=button.textContent;
        if(value==="AC"){
            display.value=" ";
        }
        else if(value==="⌫"){
            display.value=display.value.slice(0,-1);
        }
        else if(value==="="){
            try{
                let expression=display.value
                .replace(/×/g,"*")
                .replace(/÷/g,"/");
                display.value=eval(expression);
            }
            catch{
                display.value="ERROR";
            }
        }
        else{
            display.value+=value;
        }
       
    });
    
});
document.addEventListener("keydown",(event)=>{
    if("0123456789+-*/".includes(event.key)){
        display.value+=event.key;
    }
    else if(event.key==="Enter"){
       try
       {display.value=eval(display.value);

       } 
        catch{
            display.value="ERROR";
        }
    }
    else if(event.key==="Backspace"){
        display.value=display.value.slice(0,-1);
    }
});