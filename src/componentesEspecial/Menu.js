import React from "react";

function Menu({
    //El estilo actual que el componente usa
    estilo,
    //cambiar estado del menu
    menuActivo,
    setMenuActivo
}) {
    const onMenu = () => {
        setMenuActivo(!menuActivo);
    }

    return (
        <div id="menu" className={estilo}>
            <button className={estilo} onClick={onMenu}>
                <div></div>
            </button>
        </div>
    );
}

export { Menu };