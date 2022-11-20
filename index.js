function login(){
    document.getElementById("card").style.visibility="visible"
    document.getElementById("card").style.zIndex = "999"
    document.getElementById("card").style.filter = "blur(0px)"
    //document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    document.body.style.filter= "blur(8px)"
    
}
function fecharLogin(){
    document.getElementById("card").style.visibility="hidden"
    document.body.style.background="none"
    document.body.style.filter= "blur(0px)"
}

