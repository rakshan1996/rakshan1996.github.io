function test(){
    var image=document.getElementsByClassName("profile");
    image[0].style.display="none";
}

function rightFlip(){
    roationDeg=Math.floor(Math.random() * 10);
    var root=document.documentElement;
    if(roationDeg<=2){
        roationDeg=5;
    }
    root.style.setProperty("--rotationDeg",roationDeg*180+"deg");
    var image=document.getElementById("profile");
    image.classList.add("rightFlip");
    image.addEventListener("animationend",function(){
        image.src="./2020.jpg";
        image.classList.remove("rightFlip");
    });
    
}