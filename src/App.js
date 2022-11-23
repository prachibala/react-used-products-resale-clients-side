import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import "./App.css";

function App() {
    return (
        <div className="">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
