import { Link } from "react-router-dom"
export const Home = () => {
    return (
        <>
            <section className="section" >
                <div className="logo"><img src="/logo/logo.svg" alt="logo" /></div>
                <div className="container">
                    <div className="information">
                        <div className="title">Trivia de Cultura Pop</div>
                        <div className="text">A continuación encontrarás una serie de preguntas para evaluar de forma general tu nivel de inglés.</div>
                        <div className="data">
                            <div className="points">
                                <div className="point"><img src="/images/Vector.png" alt="vector" /></div>
                                <div className="info">Son preguntas de selección simple.</div>
                            </div>
                            <div className="points">
                                <div className="point"><img src="/images/Vector.png" alt="vector" /></div>
                                <div className="info">Tendrás 1 minuto para responder cada pregunta.</div>
                            </div>
                            <div className="points">
                                <div className="point"><img src="/images/Vector.png" alt="vector" /></div>
                                <div className="info">Esta prueba no sustituye el Placement Test para ingresar a WeTALK.</div>
                            </div>
                            <div className="points">
                                <div className="point"><img src="/images/Vector.png" alt="vector" /></div>
                                <div className="info">Tendrás una idea general sobre tu nivel de inglés: Básico, Intermedio o Avanzado.</div>

                            </div>
                        </div>
                        <Link to={'/test'}>
                            <div className="button">
                                Iniciar Trivia
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
