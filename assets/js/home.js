//Burger menu start
var bStatus = false;

function bMenuToggle() {
    var bMenu = document.getElementById("bPanel");
    var content = document.getElementById("content");
    var pageheader = document.getElementById("pageheader");
    document.getElementById("bBtn").classList.toggle("change");
    if (!bStatus) {
        bMenu.className += " opened";
        content.setAttribute("onclick", "bMenuToggle()");
        pageheader.setAttribute("onclick", "bMenuToggle()");
    } else {
        bMenu.className = "panel-wrap";
        content.removeAttribute("onclick");
        pageheader.removeAttribute("onclick");
    }
    bStatus = !bStatus;
}
//Burger menu end
