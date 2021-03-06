"use strict"

class DataItem {
    constructor() {
        this.myID = null; // long integer value of this ID

        this.nextItemID = null; // long integer value of the next ID in a linked list
        this.nextItem = null; // pointer to the next dataItem in linked list

        this.element = null; // object reference to be assigned this dataItem's HTML element

        this.imageURL = null;
        this.text1 = null;
        this.text2 = null;
        this.textBackgroundColor = null;

        this.selected = null; // boolean has dataItem been selected?

        // iterator protocol requirement
        this.value = null;
    }

    // todo: iterator protocol
    done(boolean) {

    }

    init(myID, imageURL, text1, text2, textBackgroundColor) {
        this.myID = myID;

        this.imageURL = imageURL;
        this.text1 = text1;
        this.text2 = text2;
        this.textBackgroundColor = textBackgroundColor;
    }

    getKey() {
        return `dataItemID-${this.myID}`;
    }

    remove() {
        localStorage.removeItem(this.getKey());
        return;
    }

    store() {
        let tmpItem = this.nextItem;
        let tmpElement = this.element;

        this.nextItem = null;
        this.element = null;

        let s = JSON.stringify(this);

        this.nextItem = tmpItem;
        this.element = tmpElement;

        localStorage.setItem(this.getKey(), s);
        return;
    }

    restore(id) {
        this.myID = id;
        let s = localStorage.getItem(this.getKey());

        if (s == null) {
            return;
        }

        let temp = JSON.parse(s);

        this.nextItemID = temp.nextItemID;

        this.imageURL = temp.imageURL;
        this.text1 = temp.text1;
        this.text2 = temp.text2;

        this.selected = temp.selected;

        return this;
    }
}
