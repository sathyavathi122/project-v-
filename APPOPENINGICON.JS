

function change(){
    
    document.getElementsByClassName("border2")[0].style.transform="rotate(360deg)";
    document.querySelectorAll("b")[0].innerHTML="S"
}
function change1(){
    document.querySelectorAll("b")[1].innerHTML="T"
}
function change2(){
    document.querySelectorAll("b")[2].innerHTML="A"
}
function change3(){
    document.querySelectorAll("b")[3].innerHTML="R"
}
function change4(){
    document.querySelectorAll("b")[4].innerHTML="T"
   
}
function change5(){
 const a=window.open("C:/Users/bobba/OneDrive/Desktop/projact(V)/LOGINFORM.HTML")
 a.opener.close()

 
}


setInterval(change,1000)
setInterval(change1,2000)
setInterval(change2,3000)
setInterval(change3,4000)
setInterval(change4,5000)
setTimeout(change5,6500)