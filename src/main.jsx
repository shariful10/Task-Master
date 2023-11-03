import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import routes from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
);
