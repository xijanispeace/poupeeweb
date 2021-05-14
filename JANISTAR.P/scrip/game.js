(function() {
    `use strict`;
    var input = document.querySelector(`#input`),
        number1 = document.querySelector(`#number1`),
        number3 = document.querySelector(`#number3`),
        number4 = document.querySelector(`#number4`),
        button1 = document.querySelector(`#CHECK`);
       
// ------------------------------------------------------
function random(){
    number1.textContent = Math.floor(Math.random() * 10);
    number2.textContent = Math.floor(Math.random() * 10);
    number3.textContent = Math.floor(Math.random() * 10);
    number4.textContent = Math.floor(Math.random() * 10);
}
function CHECK(){
    var inputValue = input.value; //ตัวเเปลเก็บค่าในช่อง input
    var res = inputValue.toString().split("");
    var sum = 0 , sum1=0;
    var data = 0 , datalast = null;
    var last ;
    if(inputValue != ''){
        for( var i=0; i<res.length; i++ ) {   
            if((res[i]).match(/^([0-9])+$/i)){
                data = Number(res[i]);
            if((datalast != null))
            {
                         if(last == '+'){ sum1 = datalast + data; }
                    else if(last == '-'){ sum1 = datalast - data; }
                    else if(last == 'x'){ sum1 = datalast * data; }
                    else if(last == '/'){ sum1 = datalast / data; }
                    datalast = sum1;
            }
             else{datalast = data;}   
            }
            else{
                if(res[i] == '+'){  last= '+'; }
           else if(res[i] == '-'){  last= '-'; }
           else if(res[i] == 'x'){  last= 'x'; }
           else if(res[i] == '/'){  last= '/'; }
            }
        }
        // --------------------------------------------------------
             
        if(datalast == 24){
            alert('Yeahhhh !!!! You are correct.');
            window.location='game.html';
        }
        else{
            alert('You are wrong T-T ');
            window.location='game.html';
        }
    }
    else{
        alert('The wrong value was entered. Enter the new value again.');  
        window.location='game.html';
    }
        
}    
random();

          
     button1.addEventListener(`click`, CHECK, false);//ทำงานเมือกดปุ่ม
        
        
})();