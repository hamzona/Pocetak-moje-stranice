import { Routes,Route, Link } from "react-router-dom";
import App from "./App";
import SlidesContextProvider from "./GlobalContext/DataSlides";
import StartQuiz from "./StartSlides/StartQuiz";
import './nav.css'
function Main(){
    return (<SlidesContextProvider>
            <nav className="nav-cont">
                <ul>
                    <Link className="nav-link">home</Link>
                    <Link className="nav-link" to="/">Make quiz</Link>
                    <Link className="nav-link" to="/start">start</Link>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/start" element={<StartQuiz/>}/>
            </Routes>
        </SlidesContextProvider>)
}
export default Main;