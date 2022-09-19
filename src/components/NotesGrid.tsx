import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { useNotesStore } from "../../store/notes";
import { Note } from "../../types";

type NotesGridType = {
  renderNotes: (notes: Note[]) => React.ReactNode[]
}

export default function NotesGrid({ renderNotes}: NotesGridType) {
  const notes = useNotesStore(state => state.notes);
  const [showArchived, setShowArchived] = useState(false);
  const notesToRender = notes.filter(note => showArchived ? note.archived : !note.archived);

  return (
    <div>
      <div className="flex items-center mb-5">
        <p className="min-w-[160px]">{showArchived ? "Hide Archived Notes" : "Show Archived Notes"}</p>
        <Switch
          checked={showArchived}
          onChange={setShowArchived}
          className={`ml-5 ${showArchived ? "bg-blue-500" : "bg-blue-200"}
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`-translate-y-[2px] ${
              showArchived ? "translate-x-7" : "translate-x-0"
            }
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
      {renderNotes(notesToRender)}
    </div>
  );
}
