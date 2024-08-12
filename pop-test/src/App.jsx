import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home";
import { Pregunta } from "./components/Pregunta/Pregunta";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Pregunta />} />
      </Routes>
    </Router>
  )
}

export default App
