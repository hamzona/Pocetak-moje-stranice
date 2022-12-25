import { Routes,Route } from "react-router-dom";
import App from "../Slides/App";
import SlidesContextProvider from "../GlobalContext/DataSlides";
import StartQuiz from "../StartSlides/StartQuiz";
//import NavBar from '../NavBar'
function Main(){
    return (<SlidesContextProvider>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/start" element={<StartQuiz/>}/>
            </Routes>
        </SlidesContextProvider>)
}
export default Main;