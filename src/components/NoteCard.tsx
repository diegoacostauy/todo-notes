import { IoDocumentTextOutline } from "react-icons/io5";
import { FiArchive } from "react-icons/fi";
import { Note } from "../../types/index";
import { useNotesStore } from "../../store/notes";
import DeleteNote from "./DeleteNote";
import NoteModal from "./NoteModal";

function convertDate(date: string) {
  const dateTime = new Date(date);
  return dateTime.toLocaleDateString("es-UY", {
    // weekday: "",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}
interface NoteProps {
  note: Note,
  idx: number
}

export default function NoteCard({ note, idx }: NoteProps) {
  const cardClasses = `px-4 py-6 rounded-md bg-white shadow-sm flex items-center border${idx > 0 ? ' mt-5' : ''}`;
  const archiveNote = useNotesStore(state => state.archiveNote);

  return (
    <article className={cardClasses}>
      <IoDocumentTextOutline className="text-5xl mr-5 text-blue-400"/>
      <div>
        <h3 className="font-bold text-lg mb-1">
        { note.title }
        </h3>
        <p className="text-gray-500 text-sm">
          <b>Last Edited</b>: { convertDate(note.lastEdited) }
        </p>
      </div>
      <div className="flex items-center self-end ml-auto">
        <button className="btn-default" onClick={() => archiveNote(note.id)}>
          <FiArchive className="text-primary-500 text-purple-500 text-lg"/>
          {String(note.archived)}
        </button>
        <NoteModal isEdit={true} note={note} />
        <DeleteNote id={note.id}/>
      </div>
    </article>
  )
}
