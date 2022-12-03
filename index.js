class Operacoes{
    features(){
        document.getElementById("todo-list").style.height="180px"
        document.getElementById("up").style.transform="rotate(180deg)"
        document.getElementById("up").style.transition = "all 0.5s"
        document.getElementById("todo-list").style.transition = "all 0.5s"
        this.contenFeatures()
    }
    contenFeatures(){
        document.getElementById("item1").style.visibility = "visible"
        document.getElementById("item2").style.visibility = "visible"
        document.getElementById("item3").style.visibility = "visible"
        document.getElementById("item4").style.visibility = "visible"
    }
    fecharFeatures(){
        document.getElementById("todo-list").style.height="0px"
        document.getElementById("up").style.transform="rotate(180deg)"
        document.getElementById("up").style.transition = "all 0.5s"
        document.getElementById("todo-list").style.transition = "all 0.5s"
        document.getElementById("item1").style.visibility = "hidden"
        document.getElementById("item2").style.visibility = "hidden"
        document.getElementById("item3").style.visibility = "hidden"
        document.getElementById("item4").style.visibility = "hidden"
    }
}

const todo = new Operacoes;