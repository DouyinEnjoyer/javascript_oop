/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]


class Table 
{
    #tbody
    get tbody()
    {
        return this.#tbody
    }
    
    constructor(headerArr)
    {
        this.#tbody = makeTableBodyWithHeader(headerArr)
    }
    /**
     * @callback RenderRowCallback
     * @param {HTMLTableSectionElement}  
     */
    appendRow(callback)
    {
        callback(this.#tbody)
    }
}
class ColSpanTable extends Table
{
    constructor(headerArr)
    {
        super(headerArr)
    }
    render(ColspanRowType)
    {
        renderColspanBody(this.tbody, ColspanRowType)
    }
}
class RowSpanTable extends Table
{
    constructor(headerArr)
    {
        super(headerArr)
    }
    render(RowspanRowType)
    {
        renderRowspanBody(this.tbody, RowspanRowType)
    }
}

const colSpan = new ColSpanTable(colspanHeaderArr)
colSpan.render(colspanBodyArr)

const rowSpan = new RowSpanTable(rowspanHeaderArr)
rowSpan.render(rowspanBodyArr)
/**
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 */

/**
 * @param {TableCallback} callback
 */
function doSomething(callback) {
    const table = document.createElement("table")
    const tbody = document.createElement("tbody")

    table.appendChild(tbody)
    document.body.appendChild(table)

    callback(tbody)
}

doSomething(function (tableBody) {
    const tr = document.createElement("tr")
    tableBody.appendChild(tr)
})

const button = document.createElement("button")
button.innerText = "rowspan hozzáadás"
document.body.appendChild(button)
/**
 * 
 * @param {*} e 
 * @this {} a táblázat példány
 */
function onclickbutton(e)
{
    //implementalom a bindet ha hazaértek nem igazán volt idom megérteni

    e.addEventListener("click", function () {
    const tbody = rowSpan.tbody;
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = "a";
    tr.appendChild(td1);
    tbody.appendChild(tr);
    
})
}





// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)
