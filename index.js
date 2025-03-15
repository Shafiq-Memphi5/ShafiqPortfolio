function myMenuFunction(){
    var menu = document.getElementById("navMenu");
    if(menu.className == "navmenu"){
        menu.className+= " responsive";
    }else{
        menu.className = "navmenu";
    }
}

window.onscroll = function(){
    headerShadow()
};
function headerShadow(){
    const navHeader = getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}