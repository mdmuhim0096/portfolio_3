

$(document).ready(function(){
    $('#selector').animatedHeadline({
        animationType: 'clip'
    });

    $('#right').click(function(){
        $(this).css({
            "z-index" : "33"
        });
    $('#left').css({
        "transition-delay" : "1s",
        "z-index" : "33"
    });
        $('.container_two').css({
            "left" : "0rem"
        });
    });

    $('#left').click(function(){
        $('.container_two').css({
            "left" : "150rem"
        });
        $(this).css({
            "z-index" : "-55" 
        });
    });

    $('#skills .container').hover(function(){

        let num = document.getElementById("in_vaild");
let coun = 0;
setInterval(() =>{
    if(coun == 100){
        clearInterval();
    }
    else{
        coun += 1;
         num.innerHTML = coun +"%";
    }
}, 19 );
        
let number = document.getElementById("number");
let counter = 0;
setInterval(() =>{
    if(counter == 85){
        clearInterval();
    }
    else{
         counter += 1;
         number.innerHTML = counter +"%";
    }
}, 19 );

        
let number_2 = document.getElementById("number_2");
let counter_2 = 0;
setInterval(() =>{
    if(counter_2 == 93){
        clearInterval();
    }
    else{
         counter_2 += 1;
         number_2.innerHTML = counter +"%";
    }
}, 20 );


let number_3 = document.getElementById("number_3");
let counter_3 = 0;
setInterval(() =>{
    if(counter_3 == 75){
        clearInterval();
    }
    else{
         counter_3 += 1;
         number_3.innerHTML = counter +"%";
    }
}, 20 );




let number_4 = document.getElementById("number_4");
let counter_4 = 0;
setInterval(() =>{
    if(counter_4 == 70){
        clearInterval();
    }
    else{
         counter_4 += 1;
         number_4.innerHTML = counter +"%";
    }
}, 20 );
    });

    });






