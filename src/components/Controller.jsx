import React from "react";
import Country from "./Country";
import Category from "./Category";

const Controller = (props) => {
    const getData = (data) => {
        props.onChange1(data);
    }
    const getData2 = (data) => {
        props.onChange2(data);
    }

    return (
        <div className="controller1">
            <Country onChange={getData} />
            <Category onChange={getData2} />
            <button className="ok" onClick={(e) => props.onChange3(e)}>OK</button>
        </div>
    )
}


export default Controller;