import { Manager } from "./manager"

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
        }

        this.#tbody = tbody

        




    }
}