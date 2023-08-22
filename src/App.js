import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
/*
* Header 
* - Logo
* - Nav Items
* Body
* - Search
* - Resturant  Container
   - Resturant card
    - Img
    - Name of Res, Star rating, Cuisines, etc.
* Footer
*  - Copyright
*  - Links
*/
 

//App component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
