import { Manager } from "./manager.js";



class FormController
{
    #manager

    /**
     * @type {FormField[]} 
     */
    #formFieldElemList = []
    /**
     * 
     * @param {FormFieldType[]} formFields 
     * @param {Manager} manager 
     */

    constructor(formFields,manager)
    {
        this.#manager = manager
        const form = document.createElement("form")
        document.body.appendChild(form)
        for (const a of formFields)
        {
            const formFieldElem = new FormField(a.id, a.label,a.name, a.required, form)
            this.#formFieldElemList.push(formFieldElem)
        }
        //ide maj kell a beviteli mezők
        const button = document.createElement("button")
        button.innerText = "szoveg"
        form.appendChild(button)    
        form.addEventListener("submit", (e) => 
        {
            e.preventDefault()
            //letrehozunk változot elkérjük a beviteli mező alapján
            //hozzáadjuk a managerhez
            const elem = this.#createElem()
            if(elem)
            {
                this.#manager.addElement(elem)
            }
            e.target.reset()
        })
    }
    /**
     * @returns {ColspanType | RowspanType | null}
     */
    #createElem()
    {
        let result = {}
        let valid = true
        for (const field of this.#formFieldElemList)
        {
            if(field.validate())
            {
                result[field.name] = field.value
            }
            else
            {
                valid = false
            }

            /**
             * result: {neve: input tartalma, kor: input tartalma, ...}
             */
        }
        if (valid)
        {
            return result
        }
        else
        {
            return null
        }
    }
}

class FormField
{
    /**
     * @type {HTMLInputElement}
     */
    #input
    /**
     * @type {string}
     */
    #name
    /**
     * @type {HTMLDivElement}
     */
    #errorDiv
    /**
     * @type {boolean}
     */
    #required
    get value()
    {
        return this.#input.value ? this.#input.value : undefined
    }
    get name()
    {
        return this.#name
    }
    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, label, name, required, parent)
    {
        const div = document.createElement("div")
        parent.appendChild(div)
        const labelElem = document.createElement("label")
        labelElem.innerText = label
        
        div.appendChild(labelElem)
        div.appendChild(document.createElement("br"))
        const input = document.createElement("input")
        input.id = id
        input.name = name
        div.appendChild(input)
        this.#input = input
        this.#name = name

        const errorDiv = document.createElement("div")
        errorDiv.classList.add("error")
        div.appendChild(errorDiv)
        this.#errorDiv = errorDiv
        this.#required = required
    }
    validate()
    {
        let result = true
        if (this.#required && !this.value)
        {
            this.#errorDiv.innerText = "kötelező"
            result = false
        }
        else
        {
            this.#errorDiv.innerText = ""
        }
        return result
    }
}

export {FormController}