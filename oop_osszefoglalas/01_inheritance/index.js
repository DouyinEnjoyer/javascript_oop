import { ClassA } from "./classA.js";
import { ClassB } from "./classB.js";

class ParentViewElementClass
{
    #div
    #id
    constructor(id)
    {
        this.#id = id
        this.#div = document.createElement("div")
        this.#div.id = id
        this.#div.classList.add("card")
    }
    getDiv()
    {
        return this.#div
    }
    appendTo(parent)
    {
        parent.appendChild(this.#div)
    }
}

const app = document.getElementById("app");

const childA = new ClassA("childA", "ChildA");
const childB = new ClassB("childB", "ChildB");

childA.appendTo(app);
childB.appendTo(app);

export {ParentViewElementClass}