import React, { useEffect, useState } from "react";
import { estilos } from "../estilos.js";

function Reloj({ 
        //Número del estilo usado
        setEstilo,
        estilo, 
        //El estilo actual que el componente usa
        miEstilo
    }) {

    //cuenta regresiva
    var cuentaDesde = 10;
    const [segundos, setSegundos] = useState(cuentaDesde);
    const [segunderos, setSegunderos] = useState([]);
    useEffect(() => {
        var timer = setInterval(() => {
            setSegundos(segundos-1);
            setSegunderos([...segunderos, segundos]);
            if(segundos===1){
                setSegundos(cuentaDesde);
                setSegunderos([]);
                if(estilo===estilos.length-1){
                    setEstilo(0);
                } else {
                    setEstilo(estilo + 1);
                }
            }
        },1000);
        return () => clearInterval(timer);
    });
    return (
        <span id="reloj" className={miEstilo}>
            <p>{segundos}</p>
            {segunderos.map((item, index) =>
                <span key={index} id={'segundero-'+segunderos[index]}>
                </span>
            )}
            <div id="l-1">{segundos}</div>
            <div id="l-2">{segundos}</div>
            <div id="l-3">{segundos}</div>
            <div id="l-4">{segundos}</div>
            <div id="l-5"></div>
            <div id="l-6">
                <span></span>
            </div>
        </span>
    );
}

export {Reloj}