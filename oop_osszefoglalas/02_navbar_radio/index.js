const app = document.body;

const nav = new NavigationBar();
nav.appendTo(app);

const a = new ClassA("classA");
const b = new ClassB("classB");

a.appendTo(app);
b.appendTo(app);

nav.addViewElement("ClassA oldala", a);
nav.addViewElement("ClassB oldala", b);

// alapértelmezett
nav.activate("classA");