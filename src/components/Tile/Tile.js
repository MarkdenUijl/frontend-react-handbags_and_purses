import React from "react";

function Tile ( {image, children} ) {
    if(children) {
        return (
            <section>
                {children}
            </section>
        );
    }

    return (
        <section>
            <img src={image} alt=""/>
        </section>
    );
}

export default Tile;