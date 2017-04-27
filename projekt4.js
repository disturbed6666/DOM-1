function PromjenaBoje() {
    document.getElementById("id1").style.color = "blue";
}
function DodajSliku() {
    var pict = document.getElementById("id4").src="slika2.jpg";
    document.getElementById("id0").innerHTML = "Prikaži sliku.";
}
function CopyPaste() {
    var element1 = document.getElementById("id1").innerHTML;
    document.getElementById("id2").innerHTML = element1;
}
function DeleteElement() {
    document.getElementById("id4").src = "";
    document.getElementById("id0").innerHTML = "Sakri sliku";
}