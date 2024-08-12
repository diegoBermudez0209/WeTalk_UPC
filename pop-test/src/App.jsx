import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home";
import { Pregunta } from "./components/Pregunta/Pregunta";
import { Resultado } from "./components/Resultado/Resultado";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Pregunta />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  )
}

export default App
