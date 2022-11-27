import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="">
			<ToastContainer />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
