import NoteModal from "./components/NoteModal";
import Layout from "./components/Layout";
import NotesGrid from "./components/NotesGrid";
import { useState } from "react";
import NoteCard from "./components/NoteCard";

function App() {

  return (
    <Layout>
      <main className="main">
        <header className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-500">Todo Notes</h1>
          <NoteModal />
        </header>
        <NotesGrid renderNotes={notes =>
          notes.map((note, idx) => (
            <NoteCard note={note} key={note.id} idx={idx} />
          ))}
          />
      </main>
    </Layout>
  );
}

export default App
