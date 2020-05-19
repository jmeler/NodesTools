
function copyCode() {
    var copyText = document.getElementById("codi-html");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    alert("Codi copiat al porta-retalls. Ara podeu enganxar-lo a l'article o pàgina del vostre NODES dins de la pestanya 'text' ");
}
