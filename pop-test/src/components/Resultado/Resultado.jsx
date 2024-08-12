import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react';
import './Resultado.css';

export const Resultado = () => {
    const [searchParams] = useSearchParams();
    const score = parseInt(searchParams.get('score'), 10);

    const [nivel, setNivel] = useState('BÁSICO');

    useEffect(() => {
        if (score >= 5 && score <= 8) {
            setNivel('INTERMEDIO');
        } else if (score >= 9) {
            setNivel('AVANZADO');
        }
    }, [score]); // Cambiado a `score`

    return (
        <div className="section">
            <div className="logo"><img src="/logo/logo.svg" alt="logo" /></div>
            <div className="containerF">
                <div className="information">
                    <div className="titlef">Trivia de Cultura Pop</div>
                    <div className="subtitle">¡Has completado nuestra Trivia WeTALK!</div>
                    <div className="results">
                        <div className="resultN">
                            <div className="textf">Tu nivel de inglés es:</div>
                            <div className="resultn">{nivel}</div> {/* Mostrar el nivel aquí */}
                        </div>
                        <div className="border"></div>
                        <div className="resultP">
                            <div className="textf">Has obtenido:</div>
                            <div className="resultp">{score} puntos</div> {/* Mostrar el puntaje aquí */}
                        </div>
                    </div>
                    <div className="info">
                        Si quieres mejorar tu inglés, inscríbete hoy a WeTALK
                    </div>
                    <div className="buttonF">Conoce más sobre WeTALK aquí
                        <div className="edge"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
