document.querySelectorAll("button")[0].addEventListener ("click",function() {


    var randomnumber1=Math.floor((Math.random()*6)+1);
    var randomnumber2=Math.floor((Math.random()*6)+1);
    var image1="dice" + randomnumber1 + ".png";
    var image2="dice" + randomnumber2 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src",image1);
    document.querySelectorAll("img")[1].setAttribute("src",image2);
    if(randomnumber1>randomnumber2){
        document.querySelector("h1").innerHTML="player 1 win";
    }
    else if(randomnumber2>randomnumber1){
        document.querySelector("h1").innerHTML="player 2 win";
    }
    else{
        document.querySelector("h1").innerHTML="draw!";
    }
    var date= Date();
    document.querySelectorAll("p")[3].innerHTML=date;


}
);