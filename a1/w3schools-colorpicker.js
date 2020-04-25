var color = "#FF0000";
var colorObj = w3color(color);

function mouseOverColor(hex) {
    document.body.style.cursor = "pointer";

    appUI.previewTXT1.style.backgroundColor = hex;
    appUI.previewTXT2.style.backgroundColor = hex;
}

function mouseOutMap() {
    document.body.style.cursor = "";

    appUI.previewTXT1.style.backgroundColor = colorObj.toHexString();
    appUI.previewTXT2.style.backgroundColor = colorObj.toHexString();
}

function clickColor(hex, seltop, selleft, html5) {
    colorObj = w3color(hex);
}