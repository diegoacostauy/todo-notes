import { useState, Fragment, SyntheticEvent } from 'react'
import { MdEdit } from "react-icons/md";
import { Dialog, Transition } from '@headlessui/react'
import { IoCloseOutline } from "react-icons/io5";
import { useNotesStore } from '../../store/notes';
import { Note } from '../../types';

type NoteModalProps = {
  isEdit?: boolean,
  note?: Note
}

export default function NoteModal({ note, isEdit = false}: NoteModalProps) {
  let [isOpen, setIsOpen] = useState(false);
  const addNote = useNotesStore(state => state.addNote);
  const editNote = useNotesStore(state => state.editNote);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    const formData = new FormData(target);

    if (formData && !isEdit) {
      const note: Note = {
        id: Date.now(),
        title: formData.get('title') as string,
        copy: formData.get('copy') as string,
        lastEdited: String(new Date()),
        archived: false,
        tags: formData.get('tags') as unknown as string[]
      }
      addNote(note);
    }

    if (formData && isEdit && note) {
      const noteToEdit: Note = {
        id: note.id,
        title: formData.get('title') as string,
        copy: formData.get('copy') as string,
        lastEdited: String(new Date()),
        archived: false,
        tags: formData.get('tags') as unknown as string[]
      };
      console.log(noteToEdit, note.id);
      editNote(noteToEdit);
    }

    closeModal();
  }

  return (
    <>
      {!isEdit ? (
        <button className="btn-primary" onClick={() => setIsOpen(true)}>
          + Add Note
        </button>
      ) : (
        <button className="btn-default ml-4" onClick={() => setIsOpen(true)}>
          <MdEdit className="text-primary-500 text-blue-500 text-lg" />
        </button>
      )}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left items-center shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5 flex justify-between"
                  >
                    {!isEdit ? 'Add New Note' : 'Edit Note'}
                    <button className="btn-secondary px-2" onClick={closeModal}>
                      <IoCloseOutline />
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form action="" onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="text"
                          name="title"
                          placeholder="Note Title"
                          required
                          defaultValue={note?.title}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-4">
                        <textarea
                          name="copy"
                          className="form-control"
                          rows={5}
                          defaultValue={note?.copy}
                          placeholder="Note description"
                          style={{ resize: "none" }}
                        />
                      </div>
                      <select
                        name="tags"
                        id=""
                        className="form-control mb-4"
                        multiple
                      >
                        {new Array(5).fill("").map((el, idx) => (
                          <option value={el} key={idx}>
                            Tag Name {idx}
                          </option>
                        ))}
                      </select>

                      {/* <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p> */}

                      <div className="mt-8 flex justify-end">
                        <button
                          type="button"
                          className="btn-secondary"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn-primary ml-4">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
