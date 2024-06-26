import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import Certificates from "./pages/Certificates";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/Portfolio" element={<Homepage />} />
				<Route path="/Portfolio/about" element={<About />} />
				<Route path="/Portfolio/projects" element={<Projects />} />
				<Route path="/Portfolio/contact" element={<Contact />} />
				<Route
					path="/Portfolio/certificates"
					element={<Certificates />}
				/>
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
