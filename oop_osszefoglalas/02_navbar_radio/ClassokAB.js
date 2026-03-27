class ClassA extends ViewElement {
  constructor(id) {
    super(id);

    this.getDiv().textContent = "ClassA oldala";
  }
}

class ClassB extends ViewElement {
  constructor(id) {
    super(id);

    this.getDiv().textContent = "ClassB oldala";
  }
}