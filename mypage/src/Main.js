import { Routes,Route } from "react-router-dom";
import App from "./App";
import SlidesContextProvider from "./GlobalContext/DataSlides";
import StartQuiz from "./StartSlides/StartQuiz";

function Main(){
    return (<SlidesContextProvider>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/start" element={<StartQuiz/>}/>
            </Routes>
        </SlidesContextProvider>)
}
export default Main;