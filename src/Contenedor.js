import React from "react";

function Contenedor(props) {
    return (
        <div 
            id="contenedor"
            className={props.estilo}
        >
            {props.children}
        </div>
    );
}

export { Contenedor };