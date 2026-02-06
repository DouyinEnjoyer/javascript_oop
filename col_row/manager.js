/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js";
 */


class Manager
{
    /**
     * @type {RowspanType[] | ColspanType[]}
     * 
     */
    #dataArray
    /**
     * @callback addCallback
     * @param {RowspanType | ColspanType} element
     * @returns {void}
     */

    #addCallback
    set addCallback(nev)
    {
        this.#addCallback = nev
    }
    constructor()
    {
        this.#dataArray = []
    }
    /**
     * @param {ColspanType | RowspanType} param 
     */
    addElement(param)
    {
        this.#dataArray.push(param)
        if (this.#addCallback)
        {
            this.#addCallback(param)
        }
    }


}

export {Manager}