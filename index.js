var introText = " Hi, I am Rakshan and this is my story so far ...";
var i = 0;
var speed= 150;
window.onload =function(){
    type();
};


function type(){
    if(i < introText.length){
        document.getElementById("typing").innerHTML += introText.charAt(i);
        i++;
        setTimeout(type, speed);
    }
    
};