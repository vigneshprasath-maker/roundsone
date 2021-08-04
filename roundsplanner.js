function openSidebar() {
    document.getElementById('list-items').style.display='block';
    document.getElementById('menubar').style.display='none';
    document.getElementById('close').style.display='block';
    document.getElementById("list-items").style.animation = "Open 2s linear 1";
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
function closeSidebar() {

    document.getElementById('list-items').style.display='none';
    document.getElementById('menubar').style.display='block';
    document.getElementById('close').style.display='none';
    window.onscroll=function(){};
}


