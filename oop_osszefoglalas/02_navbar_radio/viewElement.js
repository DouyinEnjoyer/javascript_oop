class ViewElement {
  #id;
  #div;

  constructor(id) {
    this.#id = id;
    this.#div = document.createElement("div");
    this.#div.id = id;
  }

  appendTo(parent) {
    parent.appendChild(this.#div);
  }

  getId() {
    return this.#id;
  }

  getDiv() {
    return this.#div;
  }

  activate(activeId) {
    if (this.#id === activeId) {
      this.#div.style.display = "block";
    } else {
      this.#div.style.display = "none";
    }
  }
}