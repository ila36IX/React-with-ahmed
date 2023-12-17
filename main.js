// const heading = document.createElement('h1');

// heading.innerHTML = "Hello world!";

// const root = document.getElementById("root");

/*
<div id="parent">
    <h1 class="head"> greeting from react <h1>
            <p>Hello world </p>

</div>
*/

// root.appendChild(heading);
// const heading = React.createElement("h1", { id: "heading", xyz: "attribute" }, "Hello world!");
// JS obejct => html element by render() method
const content = React.createElement("div", { id: "parent" }, // <div> </div>
    [
        React.createElement("h1", { className: "head" }, "greeting from react"),
        React.createElement("p", { className: "paragraph" }, "this my paragraph")
    ]);

console.log(content);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);