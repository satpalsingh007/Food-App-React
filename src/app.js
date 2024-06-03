import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
/**
 * Header
 * -logo
 * -Nav Items
 * Body
 * -Search
 * -RestrauntContainer
 *  -RestrauntCard
 *      -Img
 *      -Name of Res, Star Rating, Cuisines.
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
