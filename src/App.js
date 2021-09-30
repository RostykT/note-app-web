import NodeList from "./components/NodeList";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "This is my first note",
			date: "13/12/19",
		},
		{
			id: nanoid(),
			text: "This is my second note",
			date: "13/12/19",
		},
		{
			id: nanoid(),
			text: "This is my third note",
			date: "13/12/19",
		},
		{
			id: nanoid(),
			text: "This is my fourth note",
			date: "13/12/19",
		},
	]);
	return (
		<div className="container">
			<NodeList notes={notes} />
		</div>
	);
}

export default App;
