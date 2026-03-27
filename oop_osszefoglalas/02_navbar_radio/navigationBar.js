class NavigationBar {
  #viewList = [];
  #container;

  constructor() {
    this.#container = document.createElement("div");
    this.#container.classList.add("navbar");
  }

  appendTo(parent) {
    parent.appendChild(this.#container);
  }

  addViewElement(label, viewElement) {
    this.#viewList.push(viewElement);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "nav";

    const labelEl = document.createElement("label");
    labelEl.textContent = label;

    input.addEventListener("change", () => {
      this.activate(viewElement.getId());
    });

    this.#container.appendChild(input);
    this.#container.appendChild(labelEl);
  }

  activate(id) {
    this.#viewList.forEach(v => v.activate(id));
  }
}