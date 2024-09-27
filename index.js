const btn = document.querySelector("#btn");
const menu = document.querySelector(".respon-flex");

var tf = true;

btn.addEventListener("click" , ((e)=>{
    if (tf) {
        menu.classList.remove("respon-flex")
        menu.classList.add("menu-none");
        tf=false;
    } else if(!tf) {
        menu.classList.remove("menu-none");
        menu.classList.add("respon-flex");
        tf=true;
    }
}))