document.getElementById('red2-button').onclick=function(){
    var score = document.getElementById("score").innerHTML;
    score++;
    document.getElementById("score").innerHTML = score;

    if(score >= 150){ // upgrades the users button
        var score = document.getElementById("score").innerHTML;
        score++;
        document.getElementById("score").innerHTML = score + 1;
    }
    else{
        //do nothing
    }
}