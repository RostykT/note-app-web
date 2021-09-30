import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({ notes, addNote }) => {
	return (
		<div className="notes-list">
			{notes.map((note) => (
				<Note key={note.id} text={note.text} date={note.date} />
			))}
			<AddNote addNote={addNote} />
		</div>
	);
};

export default NoteList;
