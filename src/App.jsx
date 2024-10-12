import "./App.css";
import Home from "./components/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<>
			<main>
				<Home />
			</main>
			<Analytics />
		</>
	);
}

export default App;
