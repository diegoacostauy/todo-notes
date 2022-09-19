import create from "zustand";
import { devtools, persist } from "zustand/middleware"
import { api } from "../services/api";
import { Note } from "../types";

interface NotesStore {
  notes: Note[],
  tags: string[],
  addNote: (note: Note) => void
  editNote: (noteToEdit: Note) => void,
  deleteNote: (id: number) => void,
  archiveNote: (id: number) => void,
}

const useNotesStore = create<NotesStore>()(
  devtools(
    persist(
      set => ({
        notes: api.notes.list(),
        tags: [],
        addNote: note => set(state => ({ notes: [ note, ...state.notes ] })),
        editNote: noteToEdit => set(state => ({
          notes: state.notes.map(note => {
            if (note.id == noteToEdit.id) {
              console.log(noteToEdit);
              return noteToEdit;
            }
            return note;
          })
        })),
        deleteNote: id => set(state => ({ notes: state.notes.filter(note => note.id !== id) })),
        archiveNote: id => set(state => ({
          notes: state.notes.map(note => {
            if (note.id == id) {
              return {
                ...note,
                lastEdited: String(new Date()),
                archived: !note.archived
              }
            }
            return note;
          })
        }))
      }),
      {
        name: 'notes-storage',
      }
    )
  )
);
export { useNotesStore };
