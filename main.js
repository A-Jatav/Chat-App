var nme = "";
function nexto(){
    nme = document.getElementById("naame").value;
    localStorage.setItem("namex", nme);
    window.location = "primary.html";
}