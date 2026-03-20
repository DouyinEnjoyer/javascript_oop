/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 * 
 * @callback AddElementResultCallback
 * @param {string} resultMessage
 * @returns {void}
 * 
 * @callback ImportResultCallback
 * @param {string} resultMessage
 * @returns {void}
 */

class AuthorManager {
    /** @type {Author[]} */
    #authorList;

    /**
     * @param {TableCallback}
     */
    #tableCallback;

    /**
     * @param {TableCallback} tableCallback
     */
    set tableCallback(value) {
        this.#tableCallback = value;
    }

    /**
     * @type {AddElementResultCallback}
     */
    #addElementResultCallback
    /**
     * @type {ImportResultCallback}
     */
    #importResultCallback
    /**
     * @param {ImportResultCallback} value 
     */
    set importResultCallback(value)
    {
        this.#importResultCallback = value

    }
    /**
     * @param {AddElementResultCallback} value
     */

    set AddElementResultCallback(value)
    {
        this.#addElementResultCallback = value
    }

    constructor() {
        this.#authorList = [];
    }

    /**
     * 
     * @param {import(".").AuthorType} elemnt 
     */
    addElement(element) {
        const author = new Author();
        author.id = this.#authorList.length;
        author.name = element.author;
        author.work = element.work;
        author.concept = element.concept;
        if (author.validate())
        {

        this.#authorList.push(author);
        this.#addElementResultCallback("sikeres elem felvétel")
        }
        else
        {
            this.#addElementResultCallback("sikertelen elem felvetel")
        }
        if (this.#tableCallback) {
            this.#tableCallback(this.#authorList);
        }
    }
    /**
     * 
     * @param {import(".").AuthorType[]} elementList 
     * @returns {void}
     */
    addElementList(elementList)
    {
        for (const elem of elementList)
        {
            const author = new Author()
            author.id = this.#authorList.length
            author.name = elem.author
            author.concept = elem.concept
            author.work = elem.work
            if(author.validate())
            {
                this.#authorList.push(author)
                this.#importResultCallback("sikeres volt a filefeltoltes")


            }
            else
            {
                this.#importResultCallback("nem volt sikeres a filefeltoltes")
                break
            }
        }
    }

    /**
     * @returns {void} 
     */
    getAllElement(){
        if (this.#tableCallback) {
            this.#tableCallback(this.#authorList);
        }
    }
    /**
     * @returns {string}
     */
    getExportContent()
    {
        const result = []
        for(const author of this.#authorList)
        {
            result.push(`${author.name};${author.work};${author.concept}`)

        }
        return result.join("\n")
    }
}

class Author {
    /** @type {string} */
    #id;
    /** @type {string} */
    #name;
    /** @type {string} */
    #work;
    /** @type {string} */
    #concept;

    constructor() {}

    get id() {
        return this.#id;
    }
    set id(value){
        this.#id = value;
    }
    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    get work() {
        return this.#work;
    }
    set work(value) {
        this.#work = value;
    }
    get concept() {
        return this.#concept;
    }
    set concept(value) {
        this.#concept = value;
    }
    /**
     * @returns {boolean}
     */
    validate()
    {
        return this.#id >= 0 && this.#name && this.#concept && this.#work
    }
}

export { AuthorManager }