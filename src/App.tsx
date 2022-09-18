import AddNote from "./components/AddNote";
import Layout from "./components/Layout";
import NoteCard from "./components/NoteCard";
import { api } from "../services/api";

function App() {
  const notes = api.notes.list();
  return (
    <Layout>
      <main className="main">
        <header className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-500">Todo Notes</h1>
          <AddNote />
        </header>
        {
          notes.map((note, idx) => (
            <NoteCard note={note} key={note.id} idx={idx} />
          ))
        }
      </main>
    </Layout>
  );
}

export default App
