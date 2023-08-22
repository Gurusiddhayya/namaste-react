import React from "react";
import ReactDOM from "react-dom/client";

//React Component
//Class based Component -- OLD
//Functional Component -- NEW

const title = (
    <h1 className="head" tabIndex="5">
        Namaste react JSX
    </h1>
);
//React Functional Component
const HeadingComponent = ()  => {

    return <h1>Namaste react functional Component</h1>;
}

// Above and below are same 
const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;

//Component Composition
const HeadingComponent3 = () => (
    <div id="container">
        {title}
        <HeadingComponent />
        <h1 className="heading">Namaste React</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent3 />);
