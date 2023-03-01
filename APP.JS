//MENU LATERAL
var menu_visible = false;
let menu= document.getElementById("nav");
function mostrarocultarmenu(){
    if(menu_visible==false){
        menu.style.display="block";
        menu_visible=true;
    }
    else{
        menu.style.display="none";
        menu_visible=false;
    }

}
//al seleccionar una opción oculto el menú
let links=document.querySelectorAll ("nav a");
for(var x=0; x<links.length;x++){
    links[x].onclick=function(){
        menu.style.display="none";
        menu_visible=false;
    }
}


document.getElementById ('botonemail1').addEventListener('click',function(){
    console.log ("Email:elainerigas@wsp.com");
    document.getElementById("email").innerHTML="elainerigas@wsp.com"                                            
    });
document.getElementById ('botonemail2').addEventListener('click',function(){
    console.log ("Email:jlruano@sws.com");
    document.getElementById("email2").innerHTML="jlruano@sws.com"
    });
document.getElementById ('botonemail3').addEventListener('click',function(){
    console.log ("Email:salvarez@westerngeco.com");
    document.getElementById("email3").innerHTML="salvarez@westerngeco.com"
    });