import { ParentViewElementClass } from "./index.js";


class ClassA extends ParentViewElementClass {
  constructor(id, text) {
    super(id);

    const head = document.createElement("div");
    head.classList.add("head");
    head.textContent = `id: ${id}`;

    const body = document.createElement("div");
    body.textContent = text;

    this.getDiv().appendChild(head);
    this.getDiv().appendChild(body);
  }
}
export {ClassA}