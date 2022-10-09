var buttons=document.getElementsByClassName('button');
var display=document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('value');
        if(value=='AC'){
            display.innerText=null;
        }else if(value=='+'){
            operator='+';
            operand1=parseFloat(display.innerText);
            display.innerText=value;
        }else if(value=='-'){
            operator='-';
            operand1=parseFloat(display.innerText);
            display.innerText=value;
        }else if(value=='*'){
            operator='*';
            operand1=parseFloat(display.innerText);
            display.innerText=value;
        }else if(value=='/'){
            operator='/';
            operand1=parseFloat(display.innerText);
            display.innerText=value;
        }else if(value=='='){
            operand2=parseFloat(display.innerText);
            var result=eval(operand1+" "+operator+" "+operand2);
            display.innerText=result;
        }else {
            if(display.innerText=='-'||display.innerText=='*'||display.innerText=='+'||display.innerText==='/'){
                display.innerText=null;
            }
            display.innerText=display.innerText+value;
        }
    });
}