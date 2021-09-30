import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import { useState } from "react";
import Search from "./components/Search";

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

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const [SearchText, setSearchText] = useState("");

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	return (
		<div className="container">
			<Search handleSearchNote={setSearchText} />
			<NoteList
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(SearchText)
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
		</div>
	);
}

export default App;
