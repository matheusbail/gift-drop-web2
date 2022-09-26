let paraOMenu = document.querySelector("#menuAcessar");
paraOMenu.addEventListener('click', function(){
    window.location.href ='http://127.0.0.1:5500/gift-drop/showcase.html'
})

let anuncio = setInterval(testeAnuncio, 3000);

function testeAnuncio(){
    window.confirm("AAA");
    
    if(window.confirm = true){
        clearInterval();
    }
 }