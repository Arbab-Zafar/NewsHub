import React from "react";

const Category = (props) =>{
    return (
        <select name="category" className="category select" onChange={(e)=> props.onChange(e.target.value)}>
            {/* <option value="select">Category</option> */}
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
    )
}

export default Category;