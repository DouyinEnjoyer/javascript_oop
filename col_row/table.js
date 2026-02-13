/**
 * @callback tableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */


import { Manager } from "./manager.js"

class Table
{
    /**
     * @type {HTMLTableCaptionElement}
     * @type {Manager} Manager
     */
    #tbody
    #manager
    /**
     * 
     * @param {HeaderArrayType} headerArr 
     * @param {Manager} manager 
     */
    constructor(headerArr, manager)
    {
        this.#manager = manager
        const table = document.createElement("table")
        document.body.appendChild(table)
        const thead = document.createElement("thead")
        table.appendChild(thead)
        const trheader = document.createElement("tr")
        thead.appendChild(trheader)
        for (let a of headerArr)
        {
            const th = document.createElement("th")
            th.innerText = a.name
            if (a.colspan)
            {
                th.colSpan = a.colspan
            }
            trheader.appendChild(th)
        }

        this.#tbody = document.createElement("tbody")
        table.appendChild(this.#tbody)
        

        




    }
    /**
     * 
     * @param {tableCallback} tableCallback 
     */
    setAppendRow(tableCallback)
    {
        this.#manager.addCallback = (element) =>
        {
            tableCallback(this.#tbody, element)
        }
    }
}
export {Table}