import React from "react";

function Button( {textValue, disbledValue} ) {
    return (
        <button
            onClick={ () => {
                console.log(textValue)} }
            disabled={disbledValue}
        >{textValue}</button>
    );
}

export default Button;