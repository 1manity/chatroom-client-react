import './App.css';
import {BrowserRouter, Route, Routes,Box} from "react-router-dom";
import ChatRoomMUI from "./pages/ChatRoomMUI";
import ChatRoom from "./pages/ChatRoom";

function App() {
    return (
        <BrowserRouter basename={"/"}>

            <Routes>
                <Route path={"/"} element={<ChatRoomMUI/>}></Route>
                {/*<Route path={"/:id"} element={<TourPage />}></Route>*/}
            </Routes>

        </BrowserRouter>

    );
}

export default App;
