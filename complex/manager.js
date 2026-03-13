/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 * 
 * @callback AddElementResultCallback
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
     * @returns {void} 
     */
    getAllElement(){
        if (this.#tableCallback) {
            this.#tableCallback(this.#authorList);
        }
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