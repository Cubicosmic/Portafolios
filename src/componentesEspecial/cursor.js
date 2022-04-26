import React, { useState } from "react";

function Cursor({
    //El estilo actual que el componente usa
    estilo
}){ 
    //coordenadar de este div para que siga al cursor
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    //se esta haciendo hover?
    const [hover, setHover] = useState(false);
    const clickeables = document.querySelectorAll('a, button, #reloj');

    const onMouseOver = () => {
        setHover(true);
    }
    const offMouseOver = () => {
        setHover(false);
    }

    window.addEventListener('mousemove',(e) => {
        
        //coordenadas .cursor
        setCursorX(e.pageX);
        setCursorY(e.pageY);

        //detectar hovers
        clickeables.forEach(clickeable => {
            clickeable.addEventListener('mouseover', onMouseOver);
            clickeable.addEventListener('mouseout', offMouseOver);
        });
    })

    return (
        <div 
            className={estilo + `${hover ? ' active':' no-active'}`}
            style={{
                top: cursorY + 'px',
                left: cursorX + 'px'
            }}
        >
        </div>
    );
}

export {Cursor}