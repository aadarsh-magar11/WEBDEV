let username;

document.getElementById("usersubmit").onclick=function(){ //accessing button
    username=document.getElementById('username').value; //accesing value entered
    document.getElementById('greet').textContent=`Hello ${username}`; //greeting the user
}