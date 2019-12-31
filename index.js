function test(){
    var image=document.getElementsByClassName("profile");
    image[0].style.display="none";
}

function setRotation(){
    roationDeg=Math.floor(Math.random() * 10);
    var root=document.documentElement;
    if(roationDeg<=2){
        roationDeg=5;
    }
    if(roationDeg%2!=0){
        roationDeg++;
    }
    
    return roationDeg;
}
function rightFlip(){
    var rotate=setRotation();
    var root=document.documentElement;
    root.style.setProperty("--rotationDeg",rotate*180+"deg");
    var image=document.getElementById("profile");
    image.classList.add("rightFlip");
    image.addEventListener("animationend",function(){
        image.src="./2020.jpg";
        document.getElementById("instructions").innerHTML="Happy New Year!!"
        image.classList.remove("rightFlip");
        document.getElementById("before").classList.add("before");
        document.getElementById("after").classList.add("after");
    });
    
}
