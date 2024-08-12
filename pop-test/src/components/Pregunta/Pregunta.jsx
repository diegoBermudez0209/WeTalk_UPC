    import { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { Timer } from '../Timer/Timer'
    import './Pregunta.css'
    import preguntas from '../../preguntas';
    import backgrounds from '../../backgrounds';
    import characters from '../../characters';

    export const Pregunta = () => {
        const navigate = useNavigate();

        // Estado para el número de pregunta
        const [currentQuestion, setCurrentQuestion] = useState(0);

        // Estado para la opción seleccionada
        const [selectedOption, setSelectedOption] = useState(null);

        // Estado para la puntuación
        const [score, setScore] = useState(0);



        const imageSrc = characters[currentQuestion].image ; // Imágen por defecto si currentQuestion excede el índice del array



        // Manejando la selección de una opción
        const handleOptionSelect = (option) => {
            setSelectedOption(option);
        };
        // Cambiando de pregunta
        const handleAnswerSubmit = () => {
            const isOptionSelected = selectedOption !== null;
            const isLastQuestion = currentQuestion === preguntas.length - 1;
            const isCorrectAnswer = isOptionSelected && preguntas[currentQuestion].opciones[selectedOption].isCorrect;

            // Actualizar el puntaje total
            const puntajeFinal = isCorrectAnswer ? score + 1 : score;
            setScore(puntajeFinal);

            // Reiniciar la opción seleccionada
            setSelectedOption(null);

            // Siguiente pregunta
            if (isLastQuestion) {
                navigate(`/resultado?score=${score}`);
            } else {
                setCurrentQuestion(currentQuestion + 1);
            }
        };

        // Manejo del tiempo agotado
        const handleTimeUp = () => {
            handleAnswerSubmit();
        };


        return (
            <div
                className="sectionq"
                style={{ backgroundImage: backgrounds[currentQuestion].image }}
            >
                <div className="containerq">
                    <Timer onTimeUp={handleTimeUp} reset={currentQuestion} />
                    <div className="question">
                        <div className="box">
                            <div className="title">Trivia de Cultura Pop</div>
                            <div className="contentq">
                                <div className="imagenq">
                                    <img src={imageSrc} alt={`Imagen para la pregunta ${currentQuestion}`} />
                                </div>
                                <div className="info">
                                    <div className='infoq'>
                                        {preguntas[currentQuestion].titulo.split('\n').map((linea, index) => (
                                            <div key={index}>
                                                {linea}
                                                <br />
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`options ${preguntas[currentQuestion].answerImage ? 'row' : ''}`}>
                                        {preguntas[currentQuestion].opciones.map((respuesta, index) => (
                                            <label
                                                className={`option ${selectedOption === index ? 'selected' : ''} ${preguntas[currentQuestion].answerImage ? 'justify-center' : ''}`}
                                                key={respuesta.textoRespuesta}>
                                                <input
                                                    type="radio"
                                                    name="option"
                                                    value={index}
                                                    checked={selectedOption === index}
                                                    onChange={() => handleOptionSelect(index)}
                                                />
                                                <div className="option-content">
                                                    {preguntas[currentQuestion].answerImage ? (
                                                        <img src={respuesta.textoRespuesta} />
                                                    ) : (
                                                        respuesta.textoRespuesta
                                                    )}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="buttonContainer">
                    <a
                        className={`button ${selectedOption === null ? 'disabled' : ''}`}
                        disabled={selectedOption === null}
                        onClick={handleAnswerSubmit}
                    >{currentQuestion === preguntas.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </a>
                </div>
                </div>
            </div>
        )
    }
