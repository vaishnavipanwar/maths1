function addUser(){
    var player1=document.getElementById("player1").value;
    var player2=document.getElementById("player2").value;
    localStorage.setItem( "player1" , player1);
    localStorage.setItem("player2" , player2);
    window.location="quiz_game.html";
}

