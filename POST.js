function txt(){
    document.getElementsByClassName("addimg")[0].style.display="none"
    document.getElementsByClassName("addimg")[1].style.display="none"
    document.getElementsByClassName("addtext")[0].style.display="block"
    document.getElementsByClassName("buttoncontiner")[0].style.display="none"
    document.getElementsByClassName("subpost")[0].style.display="block"
    

}
function img(){
    document.getElementsByClassName("addimg")[0].style.display="block"
    document.getElementsByClassName("addimg")[1].style.display="block"
    document.getElementsByClassName("addtext")[0].style.display="none"
    document.getElementsByClassName("buttoncontiner")[0].style.display="none"
    document.getElementsByClassName("subpost")[0].style.display="block"

}
function homepape(){
    a= window.open("C:/Users/bobba/OneDrive/Desktop/projact(V)/HOMEPAGE.html")
    a.opener.close()
 }
