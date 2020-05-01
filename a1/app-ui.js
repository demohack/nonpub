"use strict"

class AppUI {
    constructor() {
        //
        // declare UI global variables
        //

        this.controlBoard = null;

        //
        // for new memes
        //

        this.imageURL = null;
        this.text1 = null;
        this.text2 = null;

        this.previewMEME = null;
        this.previewIMG = null;
        this.previewTXT1 = null;
        this.previewTXT2 = null;

        this.backgroundColor = null;
        this.selectedHexagon = null;
    }

    init() {
        this.controlBoard = document.querySelector("#controlboard");

        this.imageURL = document.querySelector("#imageURL");
        this.text1 = document.querySelector("#text1");
        this.text2 = document.querySelector("#text2");

        this.previewDIV = document.querySelector("#previewDIV");
        this.previewIMG = document.querySelector("#previewIMG img");
        this.previewTXT1 = document.querySelector("#previewTXT1 div");
        this.previewTXT2 = document.querySelector("#previewTXT2 div");

        initResizeMoveElement(document.querySelector("#previewTXT1"));
        initResizeMoveElement(document.querySelector("#previewTXT2"));

        this.selectedHexagon = document.getElementById("selectedHexagon");
        clickColor("#FFFFFF", -110, 108);

        this.imageURL.value = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/30/14/sharpei.jpg";
        this.text1.value = "Cute puppie...";
        this.text2.value = "Let's play!";

        this.previewIMG.src = this.imageURL.value;
        this.previewTXT1.innerHTML = this.text1.value;
        this.previewTXT2.innerHTML = this.text2.value;
    }
}

let appUI = new AppUI();


// todo: iterator protocol
function insertElement(child) {
    dataList.element.appendChild(child);
}

// todo: iterator protocol
function createElement(dataItem) {
    let dataDiv = appUI.previewDIV.cloneNode(true);
    dataDiv.id = dataItem.getKey();

    let divIMG = dataDiv.querySelector("#previewIMG");
    let divTXT1 = dataDiv.querySelector("#previewTXT1");
    let divTXT2 = dataDiv.querySelector("#previewTXT2");

    divIMG.id = `previewIMG-${dataItem.myID}`;
    divTXT1.id = `previewTXT1-${dataItem.myID}`;
    divTXT2.id = `previewTXT2-${dataItem.myID}`;

    return dataDiv;
}

function mouseOverColor(hex) {
    document.body.style.cursor = "pointer";

    appUI.previewTXT1.style.backgroundColor = hex;
    appUI.previewTXT2.style.backgroundColor = hex;
}

function mouseOutMap() {
    document.body.style.cursor = "";

    appUI.previewTXT1.style.backgroundColor = appUI.backgroundColor;
    appUI.previewTXT2.style.backgroundColor = appUI.backgroundColor;
}

function clickColor(hex, seltop, selleft) {
    appUI.backgroundColor = hex;
    appUI.previewTXT1.style.backgroundColor = hex;
    appUI.previewTXT2.style.backgroundColor = hex;

    if ((seltop + 200) > -1 && selleft > -1) {
        appUI.selectedHexagon.style.top = seltop + "px";
        appUI.selectedHexagon.style.left = selleft + "px";
        appUI.selectedHexagon.style.visibility = "visible";
    } else {
        appUI.selectedHexagon.style.visibility = "hidden";
    }
}
