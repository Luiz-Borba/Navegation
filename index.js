function login(){
    document.getElementById("card").style.visibility="visible"
    document.getElementById("card").style.zIndex = "999"
    document.getElementById("card").style.filter = "blur(0px)"
    document.getElementById("card").style.transition="all 0.2s"
    //document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    document.getElementById("todo").style.filter= "blur(10px)"
    
}
function btnRegister (){
    document.getElementById("Register").style.visibility="visible"
    document.getElementById("Register").style.zIndex = "999"
    document.getElementById("Register").style.transition="all 0.2s"
    document.getElementById("Register").style.filter = "blur(0px)"
    //document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    document.getElementById("todo").style.filter= "blur(10px)"
}
function btnFecharRegister(){
    document.getElementById("Register").style.visibility="hidden"
    document.getElementById("Register").style.transition="all 0.2s"
    document.body.style.background="none"
    document.getElementById("todo").style.filter= "blur(0px)"
}

function fecharLogin(){
    document.getElementById("card").style.transition="all 0.2s"
    document.getElementById("card").style.visibility="hidden"
    document.body.style.background="none"
    document.getElementById("todo").style.filter= "blur(0px)"
}
function btnAbrir(){
    document.getElementById("btnMobile").style.height="100%"
    document.getElementById("btnMobile").style.visibility = "visible"
    document.getElementById("btnMobile").style.transition = "all 0.5s"
    //document.getElementById("todo").style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    document.getElementById("todo").style.backgroundColor = "rgba(0, 0, 0, 0.9)"
    document.getElementById('mobile').style.opacity = "0.0,8"
    
}
function btnClose(){
    document.getElementById("btnMobile").style.height="0%"
    document.getElementById("btnMobile").style.visibility = "hidden"
    document.getElementById("btnMobile").style.transition = "all 0.5s"
    document.getElementById("todo").style.backgroundColor = "rgba(0, 0, 0, 0)"
}

