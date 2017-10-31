console.log("hello vscode");
class MyClass {
    render(divId, text) {
        var el = document.getElementById(divId);
        el.innerText = text;
    }
}
window.onload = () => {
    var myClass = new MyClass();
    myClass.render("content", "Hello World");
};
//# sourceMappingURL=hello.js.map